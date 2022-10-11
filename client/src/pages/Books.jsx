import { React, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

import BookCard from "../component/BookCard"

const Books = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchAllBooks = async () => {
      try{
        const res = await axios.get("http://localhost:8800/books")
        setBooks(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchAllBooks()
  },[])

  return <div>
    <h1>Book Shop</h1>
    <div className="books">
      {books.map(book=>(
        <BookCard book={book} />
      ))}
    </div>
    <button>
      <Link to="/add">Add new Book</Link>
    </button>
  </div>
}

export default Books