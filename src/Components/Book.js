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
  const addToCart = (id) => {
    console.log(id)
    props.addToCart(id)
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
        <button onClick={() => addToCart(props.book.id)}>+ в корзину</button>
        <button onClick={() => removeBook(props.book.id)}>удалить</button>
        <button>обновить</button>
        <button onClick={showInfo}>информация</button>
      </div>
    </div>
  )
}

export default Book
