import React from 'react'

function BookCard({book}) {
	return (
		<>
		<div className='bookcard'>
			<div>
			<p>Book Name: {book.bookname}</p>
			<p>ISBN number: {book.isbn}</p>
			<p>Pub. Date: {book.pudate}</p>
			</div>
			<div className='bookbtn'>
			<button onClick={()=>HandleClick()}>Show more</button>
			<button>Edit</button>
			<button>Delete</button>
			</div>
			<div>
				<p>Author Name: {book.authorname}</p>
				<p>DOB: {book.dob}</p>
				<p>Short Bio: {book.bio}</p>
			</div>
		</div>
		</>
	)
}

export default BookCard