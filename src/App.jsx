import './App.css'
import BookDetailsForm from './components/BookDetailsForm'
import BookCard from './components/BookCard'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAddBook } from './slice/bookSlice'

function App() {
const isAddBook=useSelector((state)=>state.book.isAddBook);
 const books=useSelector((state)=>state.book.booksData);
 const dispatch=useDispatch();

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
        books.map((book)=>{
           return <BookCard key={book.id} book={book}/>
        })
      }
      {books.length === 0 && <p>No books added yet. Click "Add Book" to create one.</p>}
     </div>
     
    </>
  )
}

export default App
