import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import BookDetailsForm from './components/BookDetailsForm'
import BookCard from './components/BookCard'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAddBook } from './slice/bookSlice'

function App() {
const isAddBook=useSelector((state)=>state.book.isAddBook);
 const books=useSelector((state)=>state.book.booksData);
 const dispatch=useDispatch();
 console.log(books);

  return (
    <>
     <div className='mainpage'>
      <h1>Admin Dashboard</h1>
      <button onClick={()=>dispatch(toggleAddBook())}>Add Book</button>
      {
        isAddBook &&
        <BookDetailsForm/>
      }
     </div>
     <div className='bookcard-container'>
      {
        books.map((book,index)=>{
           return <BookCard key={index} book={book}/>
        })
      }
     </div>
     
    </>
  )
}

export default App
