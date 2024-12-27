import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function Home() {
  const [books, setBooks] = useState([])
  useEffect(() => {
    fetchBooks()
  }, [])
  async function fetchBooks() {
    axios.get("http://localhost:5000/api/book/books")
      .then((res) => {
        console.log(res)
        setBooks(res.data)
      })
  }
  return (
    <div>
      <h1>Books</h1>

      {
        books.length === 0 ? (
          <div>Currently we dont have any books </div>
        ) : (
          <ul className='books-container'>

            {
              books.map((book) => {
                return <li key={book._id}>
                          {console.log("books details", book)}
                          <h1>{book.title}</h1>
                          <p>{book.author}</p>
                          <p>{book.price}</p>
                          <p>{book.description}</p>
                          <img src={book.imageUrl} alt={book.title} width="30%" />
                        </li>
              })
            }
          </ul>
        )
      }
    </div>
  )
}
