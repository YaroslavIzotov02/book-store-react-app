import React, { useEffect, useState } from 'react'

//book component
const Book = (props) => {
  return (
    <div className="book">
      <h1>{props.book.title}</h1>
      <h4>{props.book.author}</h4>
      <img src={props.book.img} alt="" title={props.book.title} />
      <button className="addbtn">+ в корзину</button>
      <button className="addbtn">+ в корзину</button>
      <button className="addbtn">+ в корзину</button>
      <button className="addbtn">+ в корзину</button>
    </div>
  )
}

export default Book
