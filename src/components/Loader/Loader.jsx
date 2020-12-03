import React from 'react'
import './Loader.css'

function Loader() {
  return (
    <section className="preloader">
      <i className="preloader__rotary" />
      <p className="preloader__text">Идет загрузка данных...</p>
    </section>
  )
}

export default Loader