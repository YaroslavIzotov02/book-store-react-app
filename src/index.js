import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './Styles/BookForm.css'
import App from './Components/App'
import reportWebVitals from './reportWebVitals'
import { books } from './Components/books'
import { authors } from './Components/authors'
import BookForm from './BookForm'
import Book from './Components/Book'
import { el } from './Components/Contacts'

//компонент каталога
function Catalog() {
  return (
    <>
      <Header />
      <NavBar />
      <div className="catalog">
        {books.map((book, index) => {
          return <Book id={index} book={book}></Book>
        })}
      </div>
      <Footer />
    </>
  )
}

//компонент добавления автора
const AuthorForm = () => {
  const [author, setAuthor] = useState('')
  function handleChange(e) {
    setAuthor(e.target.value)
  }
  function handleSubmit(e) {
    authors.unshift(author)
    setAuthor('')
    console.log(authors)
    e.preventDefault()
  }
  return (
    <div className="authorform">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">ФИО автора:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={author}
          onChange={handleChange}
        />
        <input type="submit" value="Добавить" />
      </form>
    </div>
  )
}

const Header = () => {
  return (
    <div className="header">
      <p>Book Store</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="footer">
      <p></p>
    </div>
  )
}

function BookPage() {
  return (
    <>
      <Header />
      <NavBar />
      <BookForm data={books}></BookForm>
      <Footer />
    </>
  )
}

function AuthorPage() {
  return (
    <>
      <Header />
      <NavBar />
      <AuthorForm></AuthorForm>
      <Footer />
    </>
  )
}

//компонент меню
function NavBar() {
  function openBookPage() {
    ReactDOM.render(<BookPage />, document.getElementById('root'))
  }
  function openAuthorPage() {
    ReactDOM.render(<AuthorPage />, document.getElementById('root'))
  }
  function openCatalogPage() {
    ReactDOM.render(<Catalog />, document.getElementById('root'))
  }
  return (
    <ul className="navbar">
      <li>
        <a href="#">Корзина</a>
      </li>
      <li style={{ float: 'left' }}>
        <a href="#" onClick={openCatalogPage}>
          Каталог
        </a>
      </li>
      <li>
        <a href="#" onClick={openBookPage}>
          Добавить книгу
        </a>
      </li>
      <li>
        <a href="#" onClick={openAuthorPage}>
          Добавить автора
        </a>
      </li>
    </ul>
  )
}

// ReactDOM.render(
//   <React.StrictMode>
//   </React.StrictMode>,
//   document.getElementById('root')
// )

ReactDOM.render(<Catalog />, document.getElementById('root'))

export default Catalog

reportWebVitals()
