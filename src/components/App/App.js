import React from 'react';
import ReactPaginate from 'react-paginate';
import Table from '../Table/Table';
import Loader from '../Loader/Loader';
import ViewHumanData from '../ViewHumanData/ViewHumanData';
import ModeSelector from '../ModeSelector/ModeSelector';
import SearchPerson from '../SearchPerson/SearchPerson';
// для сортировки используется библиотека lodash
import _ from 'lodash';

function App() {
  const [isModeSelected, setIsModeSelected] = React.useState(false);
  const [isLoading, setIslodaing] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [sort, setSort] = React.useState('asc');
  const [sortField, setSortField] = React.useState('id');
  const [currentPage, setCurrentPage] = React.useState(0);
  const [row, setRow] = React.useState(null);

  async function getFetchData(url) {
      // получаем данные с помощью fetch запроса
      const res = await fetch(url)
      // преобразовываем в json формат
      const data = await res.json()
      // убираем Loader после загрузки данных
      setIslodaing(false)
      // показываем пользователю уже отсортированные данные
      setData(_.orderBy(data, sortField, sort))
    }

  const handleClickSort = (sortField) => {
    const clonedData = data.concat();
    const sortType = sort === 'asc' ? 'desc' : 'asc'
    const orderData = _.orderBy(clonedData, sortField, sortType)

    setData(orderData);
    setSort(sortType);
    setSortField(sortField);
  }

  const onRowSelect = (row) => {
    setRow(row)
  }

  // функция заглушка для обновления текста в textarea
  const handleChange = (event) => {
    console.log(event);
  }

  // функция поиска отдельного человека
  const onSearch = (search) => {
    setSearch(search)
    setCurrentPage(0)
  }

  const modeSelectHandler = (url) => {
    setIsModeSelected(true)
    setIslodaing(true)
    // сбросил data чтобы при отправке запроса пагинацию не было видно
    setData([])
    setRow(null)
    getFetchData(url)
    // сброс начальной страницы при поиске на 0, иначе переключение режимов
    // работает не корректно
    setCurrentPage(0)
    // сброс данных чтобы при нажатии кнопки поиска выдача была полная
    // а не по залипшей строке search
    setSearch('')
  }

  // меняем страницы с помощью пагинации
  const pageChangeHandler = ({selected}) => {
    setCurrentPage(selected)
  }

  // // Фильтрация данных
  const getFilteredData = () => {
    if (!search) {
      return data
    }
    return data.filter(item => {
      return item['firstName']
        .toLowerCase()
        .includes(search.toLowerCase())
        ||
        item['lastName']
        .toLowerCase()
        .includes(search.toLowerCase())
    })
  }

// Фильтрация данных
  const filteredData = getFilteredData()
// указываем что из массива data показываем только 50 результатов на странице
// и отфильтрованные по строке search
  const displayData = _.chunk(filteredData, 50)[currentPage]

  // считаем сколько данных в выдаче и в зависимости от этого выводим длину пагинации
  const pageCount = Math.ceil(filteredData.length / 50)

  return (
    <div className="container">
      {
        isLoading
        ? null
        : <ModeSelector  onSelect={modeSelectHandler}/>
      }

      {
        isLoading
          ? <Loader />
          : data.length > 0
          ? <>
              <SearchPerson onSearch={onSearch} />
              <Table
                data={displayData}
                handleClickSort={handleClickSort}
                sort={sort}
                sortField={sortField}
                onRowSelect={onRowSelect}
              />
            </>
          :
            null
        }

        {
          data.length > 50
            ? <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={pageChangeHandler}
                containerClassName={'pagination'}
                activeClassName={'active'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                nextClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextLinkClassName={'page-link'}
                forcePage={currentPage}
              />
            :
              null
        }

        {
          row && <ViewHumanData
            detailsPersonData={row}
            handleChange={handleChange}
          />
        }
    </div>
  );
}

export default App;
