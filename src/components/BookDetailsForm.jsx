import React from 'react'

function BookDetailsForm() {
	return (
	<div className='overlay1'>
	<div className='form'>
			<h3>Book Details</h3>
			<div className='bookform'>
			<label>
				Book Name:<input type='text' />
			</label>
			<label>
				ISBN Number:<input type='number' />
			</label>
			<label>
				Pub. Date:<input type='date' />
			</label>
			</div>
			<h3>Author Details</h3>
			<div className='authorform'>
				<label>
				Author Name:<input type='text' />
			</label>
			<label>
				DOB:<input type='number' />
			</label>
			<label>
				Short Bio:<input type='textarea' />
			</label>
			</div>
			<button>Add Book</button>
		</div>
		</div>
	)
}

export default BookDetailsForm