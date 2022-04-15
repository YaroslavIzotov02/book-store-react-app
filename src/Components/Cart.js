import React, { useState, useEffect } from 'react'
import { cartItems } from './cartItems'
import { NavBar } from '..'
import { Header } from '..'
import { Footer } from '..'
import { toContainHTML } from '@testing-library/jest-dom/dist/matchers'

//компонент корзины
function Cart() {
  const [items, setItems] = useState(cartItems.reduce((unique, item) => unique.includes(item) ? unique: [...unique, item], []))
  console.log(items)
  const removeFromCart = (id) =>
  {
    let newCartItems = items.filter((item) => item.id !== id)
    console.log(newCartItems)
    setItems(newCartItems)
  }
  const incrementCount = (id) =>
  {
    let product = items.find((item) => item.id === id)
    setItems(items.map((item) => product.id == item.id ? {item: item.itemCount+=1}: item))
  }
  const decrementCount = (id) =>
  {
    let product = items.find((item) => item.id === id)
    setItems(items.map((item) => product.id == item.id ? {item: item.itemCount-=1}: item))
  }

  return (
    <>
      <Header />
      <NavBar />
      <div className="cart">
        <table>
          <th>Название</th>
          <th>Количество</th>
          <th>Цена</th>
          {items.map((item, index) => (
            <tr key={index} className="item">
              <td>
                {item.title}, {item.author}
                <button type="submit" onClick = {() => removeFromCart(item.id)}>удалить</button>
              </td>
              <td> {item.itemCount}
              <button type="submit" onClick = {() => {incrementCount(item.id)}}>+</button> 
              <button type="submit" onClick = {() => decrementCount(item.id)}>-</button>
              </td>
              <td>{item.price * item.itemCount}</td>
            </tr>
          ))}
        </table>
        <p>Итог: </p>
        <button id="submit" type="submit">
          Оформить заказ
        </button>
      </div>
      <Footer />
    </>
  )
}

export default Cart
