import React, { useEffect, useState } from 'react'
import { Footer } from '..'
import UpdateForm from './UpdateForm'
import PopUp from './PopUp'
import { Header } from '..'
import { NavBar } from '..' 

//book component
const Book = (props) => {
  const [popUp, setPopUp] = useState(false)
  const [UpdateForm, setUpdateForm] = useState(false)
  const removeBook = (id) => {
    console.log(id)
    props.handleRemove(id)
  }
  const showInfo = () => {
    setPopUp(true)
  }
  const closeInfo = () => {
    setPopUp(false)
  }
  const showUpdate = () => {
    setUpdateForm(true)
  }
  const closeUpdate = () => {
    setUpdateForm(false)
  }
  const addToCart = (id) => {
    console.log(id)
    props.addToCart(id)
  }

  return (
    <>
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
          <button onClick={showUpdate}>обновить</button>
          <button onClick={showInfo}>информация</button>
        </div>
      </div>
      {popUp && <PopUp book={props.book} closeWindow={closeInfo}></PopUp>}
      {UpdateForm && <UpdateForm book={props.book} closeWindow={closeUpdate}></UpdateForm>}
    </>
  )
}

export default Book
