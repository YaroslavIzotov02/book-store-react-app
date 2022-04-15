import React, { useState, useEffect } from 'react'
import { authors } from './authors'
import { books } from './books'

//компонент добавления новой книги в каталог
const BookForm = (props) => {
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  const [pageCount, setPageCount] = useState('')
  const [price, setPrice] = useState('')
  const [itemCount, setItemCount] = useState(0)
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
    books.unshift({
      ...books,
      id: books.length + 1,
      title: title,
      author: author,
      description: description,
      pageCount: pageCount,
      price: price,
      itemCount: 0,
    })
    setTitle('')
    setAuthor('')
    setDescription('')
    setPageCount('')
    setPrice('')
    setItemCount(0)
    console.log(books)
    e.preventDefault()
  }
  return (
    <div className="bookform">
      <form action="" onSubmit={handleSubmit}>
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
            return <option value={author}>{author}</option>
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
        <input type="submit" value="Добавить" />
      </form>
    </div>
  )
}

export default BookForm
