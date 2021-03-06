# Начало работы с приложением Create React

#### Склонируйте проект
 `git clone https://github.com/rashidovD/fugrutest.git`
 #### Перейдите в папку проекта
 `cd fugrtest`
 #### Установите все зависимости
 `npm install`
 #### Запустите проект
`npm start` или `yarn start`
## Функциональность тестового задания
##### Проект постороен на функциональных компонентах
* Получение по API массива данных
* Выбор получения большого количества или маленького количества данных
* Есть возможность сортировки
* Выведение на страницу отдельной персоны по строке поиска
* Реализована пагинация, если в выдаче больше 50 данных
* Реализован Лоадер при загрузке данных
* Для пагинации и сортировки использованы сторонние библиотеки `yarn add react-paginate` и `yarn add lodash`
* Тестирование на наличие багов проведено ручное


## Доступные скрипты

В корневом каталоге проекта вы можете запустить:

### `yarn start`

Запускает приложение в режиме разработки.\
Откройте [http://localhost:3000](http://localhost:3000) чтобы посмотреть его в браузере.

Страница будет перезагружена, если вы внесете правки.  Вы также увидите любые ошибки линта в консоли.

### `yarn test`

Запускает средство выполнения тестов в интерактивном режиме просмотра. \ Дополнительные сведения см. В разделе [running tests](https://facebook.github.io/create-react-app/docs/running-tests)

### `yarn build`

Собирает приложение для производства в папку `build`. \ Оно правильно связывает React в рабочем режиме и оптимизирует сборку для достижения максимальной производительности.

Сборка минифицирована, а имена файлов включают хеши. \ Ваше приложение готово к развертыванию!

См. раздел о [deployment](https://facebook.github.io/create-react-app/docs/deployment) для дополнительной информации.


