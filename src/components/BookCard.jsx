import React from 'react'

function BookCard() {
	return (
		<>
		<div className='bookcard'>
			<div>
			<p>Book Name:</p>
			<p>ISBN number:</p>
			<p>Pub. Date:</p>
			</div>
			<div className='bookbtn'>
			<p>Show more</p>
			<button>Edit</button>
			<button>Delete</button>
			</div>
			<div>
				<p>Author Name:</p>
				<p>DOB:</p>
				<p>Short Bio:</p>
			</div>
		</div>
		</>
	)
}

export default BookCard