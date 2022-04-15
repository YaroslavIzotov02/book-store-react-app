import React, { useState, useEffect } from 'react'
import { cartItems } from './cartItems'
import { NavBar } from '..'
import { Header } from '..'
import { Footer } from '..'

//компонент корзины
function Cart() {
  const [items, setItems] = useState(cartItems)
  console.log(items)
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
                <button type="submit">удалить</button>
              </td>
              <td> </td>
              <td>{item.price}</td>
            </tr>
          ))}
        </table>
        <p>Итог:</p>
        <button id="submit" type="submit">
          Оформить заказ
        </button>
      </div>
      <Footer />
    </>
  )
}

export default Cart
