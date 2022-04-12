import React, { useEffect, useState } from 'react'

//book component
const Book = (props) => {
  const removeBook = (id) => {
    console.log(id)
    props.handleRemove(id)
  }
  const showInfo = () => {
    alert(props.book.author)
  }
  return (
    <div key={props.book.id} className="book">
      <h1>{props.book.title}</h1>
      <h4>{props.book.author}</h4>
      {/* <img
        className="bookimg"
        src={props.book.img}
        alt=""
        title={props.book.title}
      /> */}
      <div className="menu">
        <button>+ в корзину</button>
        <button onClick={() => removeBook(props.book.id)}>удалить</button>
        <button>обновить</button>
        <button onClick={showInfo}>информация</button>
      </div>
    </div>
  )
}

export default Book
