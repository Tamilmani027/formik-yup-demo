import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeBook, toggleAddBook } from '../slice/bookSlice'
import BookDetailsForm from './BookDetailsForm'

function BookCard({book}) {
	const [showDetails, setShowDetails] = useState(false)
	const [isEditing, setIsEditing] = useState(false)
	const dispatch = useDispatch()

	const handleDelete = () => {
		dispatch(removeBook(book.id))
	}

	const handleEdit = () => {
		setIsEditing(true)
		dispatch(toggleAddBook())
	}

	return (
		<>
		<div className='bookcard'>
			<div>
			<p>Book Name: {book.bookname}</p>
			<p>ISBN number: {book.isbn}</p>
			<p>Pub. Date: {book.pubdate}</p>
			</div>
			<div className='bookbtn'>
			<button onClick={() => setShowDetails((visible) => !visible)}>{showDetails ? 'Show less' : 'Show more'}</button>
			<button onClick={handleEdit}>Edit</button>
			<button onClick={handleDelete}>Delete</button>
			</div>
			{showDetails && <div>
				<p>Author Name: {book.authorname}</p>
				<p>DOB: {book.dob}</p>
				<p>Short Bio: {book.bio}</p>
			</div>}
		</div>
		{isEditing && <BookDetailsForm book={book} onComplete={() => setIsEditing(false)} />}
		</>
	)
}

export default BookCard
