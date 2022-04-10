import React, { useState, useEffect } from 'react'

function AddPersonForm(props) {
  const [person, setPerson] = useState('')
  function handleChange(e) {
    setPerson(e.target.value)
  }
  function handleSubmit(e) {
    props.handleSubmit(person)
    setPerson('')
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new contact"
        onChange={handleChange}
        value={person}
      />
      <input type="submit" value="Add" />
    </form>
  )
}

function PeopleList(props) {
  const arr = props.data
  const listItems = arr.map((val, index) => <li key={index}>{val}</li>)
  return <ul>{listItems}</ul>
}

const contacts = ['James Smith', 'Thomas Anderson', 'Bruce Wayne']

export const el = <ContactManager data={contacts}></ContactManager>

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data)
  function addPerson(name) {
    setContacts([...contacts, name])
  }
  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  )
}
