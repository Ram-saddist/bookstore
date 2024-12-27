import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Home.css'
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
          <div className='container'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {
                books.map((book) => {
                  return <div className='col' key={book._id}>
                          <div className="card h-100">
                            <img className="card-img-top" src={book.imageUrl} alt={book.title} />
                            <div className="card-body">
                              <h1 className="card-title">{book.title}</h1>
                              <p className="card-text">{book.author}</p>
                              <p className="card-text">{book.price}</p>
                              <p className="card-text">{book.description}</p>
                             
                            </div>
                            <div class="card-footer">
                              <button className="btn btn-warning  fw-bold">Edit</button>
                              </div>
                          </div>
                          
                        </div>
                })
              }
            </div>
          </div>
        )
      }
    </div >
  )
}
