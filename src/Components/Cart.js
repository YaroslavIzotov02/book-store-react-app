import React, { useState, useEffect } from 'react'
import { cartItems } from './cartItems'
import { NavBar } from '..'
import { Header } from '..'
import { Footer } from '..'

//компонент корзины
function Cart() {
  const [items, setItems] = useState(
    cartItems.reduce(
      (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
      []
    )
  )
  const totalPrice = items.reduce((a, c) => a + c.price * c.itemCount, 0)
  const removeFromCart = (id) => {
    let newCartItems = items.filter((item) => item.id !== id)
    console.log(newCartItems)
    setItems(newCartItems)
  }
  const incrementCount = (id) => {
    let product = items.find((item) => item.id === id)
    if (product) {
      setItems(
        items.map((item) =>
          item.id == id
            ? { ...product, itemCount: product.itemCount + 1 }
            : item
        )
      )
    }
  }
  const decrementCount = (id) => {
    let product = items.find((item) => item.id === id)
    if (product) {
      setItems(
        items.map((item) =>
          item.id == id
            ? { ...product, itemCount: product.itemCount - 1 }
            : item
        )
      )
    }
  }

  return (
    <>
      <Header />
      <NavBar />
      <div>{items.length === 0 && <p>Корзина пуста</p>}</div>
      {items.length !== 0 && (
        <div className="cart">
          <table>
            <th>Название</th>
            <th>Количество</th>
            <th>Цена</th>
            {items.map((item, index) => (
              <tr key={index} className="item">
                <td>
                  {item.title}, {item.author}
                  <button
                    type="submit"
                    {...(item.itemCount === 0 && removeFromCart(item.id))}
                    onClick={() => removeFromCart(item.id)}
                  >
                    удалить
                  </button>
                </td>
                <td>
                  {item.itemCount}
                  <button type="submit" onClick={() => incrementCount(item.id)}>
                    +
                  </button>
                  <button type="submit" onClick={() => decrementCount(item.id)}>
                    -
                  </button>
                </td>
                <td>{item.price * item.itemCount}</td>
              </tr>
            ))}
          </table>
          <p>Итог: {totalPrice}</p>
          <button id="submit" type="submit">
            Оформить заказ
          </button>
        </div>
      )}
      <Footer />
    </>
  )
}

export default Cart
