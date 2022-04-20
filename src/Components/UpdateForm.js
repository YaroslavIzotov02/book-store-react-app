import React, { useState, useEffect } from 'react'
import { authors } from './authors'
import { books } from './books'

//компонент обновления книги в каталоге
const UpdateForm = (props) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  const [pageCount, setPageCount] = useState('')
  const [price, setPrice] = useState('')
  function handleTitle(e) {
    setTitle(e.target.value)
  }
  function handleAuthor(e) {
    setAuthor(e.target.value)
  }
  function handleDescription(e) {
    setDescription(e.target.value)
  }
  function handlePages(e) {
    setPageCount(e.target.value)
  }
  function handlePrice(e) {
    setPrice(e.target.value)
  }
  function handleSubmit(e) {
    props.book.id({
      title: title,
      author: author,
      description: description,
      pageCount: pageCount,
      price: price,
      itemCount: 0,
    })
    setAuthor('')
    setDescription('')
    setPageCount('')
    setPrice('')
    console.log(books)
    e.preventDefault()
  }

  function closeUpdate () {
    props.closeWindow()
  }

  return (
      <div id = "update" class = "popups">
          <div class = "content">
      <form action="" onSubmit={handleSubmit}>
      <a class="close" href="#" onClick={closeUpdate}>
          &times;
        </a>
        <label htmlFor="title">Название: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleTitle}
        />
        <br />
        <label htmlFor="authors">Автор:</label>
        <select name="authors" id="authors" onChange={handleAuthor}>
          {authors.map((author, index) => {
            return <option value={index}>{author}</option>
          })}
        </select>
        <br />
        <label htmlFor="description">Описание:</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          onChange={handleDescription}
          value={description}
        ></textarea>
        <br />
        <label htmlFor="pages">Кол-во страниц:</label>
        <input
          type="number"
          name="pages"
          id="pages"
          value={pageCount}
          onChange={handlePages}
        />
        <br />
        <label htmlFor="price">Цена:</label>
        <input
          type="text"
          name="price"
          id="price"
          value={price}
          onChange={handlePrice}
        />
        <br />
        <input type="submit" value="Обновить" />
      </form>
    </div>
    </div>
  )
}

export default UpdateForm
