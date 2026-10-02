import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import BookDetailsForm from './components/BookDetailsForm'
import BookCard from './components/BookCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='mainpage'>
      <h1>Admin Dashboard</h1>
      <button>Add Book</button>
     </div>
     <div className='bookcard-container'>
      <BookCard/>
      <BookDetailsForm/>
     </div>
     
     {/*<BookDetailsForm />*/}
    </>
  )
}

export default App
