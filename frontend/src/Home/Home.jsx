import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Home.css'
export default function Home() {
  const [books, setBooks] = useState([])
  const [editBook, setEditBook] = useState("")
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
  function submitBook(){
    
  }
  function handleBookEdit(){

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
                  return (
                    editBook && editBook._id === book._id ? (
                      <form className="row g-3" onSubmit={submitBook}>
                        <div className="col-12 text-center">
                          <h1>Add new Book</h1>
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="inpuTitle" className="form-label">Title of the book</label>
                          <input type="text" className="form-control" id="inpuTitle" onChange={handleBookEdit} />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="inputAuthor" className="form-label">Author</label>
                          <input type="text" className="form-control" id="inputAuthor" onChange={handleBookEdit} />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="inputPrice" className="form-label">Price</label>
                          <input type="text" className="form-control" id="inputPrice" onChange={handleBookEdit} />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="inputDescription" className="form-label">Description</label>
                          <input type="text" className="form-control" id="inputDescription" onChange={handleBookEdit} />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="inputImageUrl" className="form-label">Image url</label>
                          <input type="text" className="form-control" id="inputImageUrl" onChange={handleBookEdit} />
                        </div>

                        <div className="col-12">
                          <button className="btn btn-success">Submit</button>
                          <button onClick={() => setEditBook(null)} type="submit" className="btn btn-danger">Cancel</button>
                        </div>
                      </form>
                    ) : (
                      <div className='col' key={book._id}>
                        <div className="card h-100">
                          <img className="card-img-top" src={book.imageUrl} alt={book.title} />
                          <div className="card-body">
                            <h1 className="card-title">{book.title}</h1>
                            <p className="card-text">{book.author}</p>
                            <p className="card-text">{book.price}</p>
                            <p className="card-text">{book.description}</p>

                          </div>
                          <div class="card-footer">
                            <button onClick={() => setEditBook(book)} className="btn btn-warning  fw-bold">Edit</button>
                          </div>
                        </div>

                      </div>
                    )
                  )
                })
              }
            </div>
          </div>
        )
      }
    </div >
  )
}
