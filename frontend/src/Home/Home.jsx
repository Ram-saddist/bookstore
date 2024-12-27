import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function Home() {
  const [books,setBooks]=useState([])
  useEffect(()=>{
    fetchBooks()
  },[])
  async function fetchBooks(){
    axios.get("http://localhost:5000/api/book/books")
    .then((res)=>{
      console.log(res)
      setBooks(res.data)
    })
  }
  return (
    <div>
      home
    </div>
  )
}
