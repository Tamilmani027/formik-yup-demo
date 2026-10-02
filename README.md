# Formik + Yup Book Manager

A simple React app to manage books with form validation and global state.

## Features

- Add a new book from a modal form.
- Validate form fields using Yup.
- View a list of books as cards.
- Expand each card to show author details.
- Edit an existing book.
- Delete a book.
- Manage state with Redux Toolkit and React Redux.

## Tech Stack

- React 19
- Vite 8
- Redux Toolkit
- React Redux
- Formik
- Yup
- Oxlint

## Project Structure

src/
- App.jsx
- main.jsx
- App.css
- components/
	- BookCard.jsx
	- BookDetailsForm.jsx
- slice/
	- bookSlice.jsx
- store/
	- store.jsx

## Getting Started

### 1. Install dependencies

npm install

### 2. Run development server

npm run dev

Open the local URL shown in the terminal.

## Scripts

- npm run dev: Start Vite dev server.
- npm run build: Create production build.
- npm run preview: Preview production build locally.
- npm run lint: Run Oxlint.

## State Shape

The Redux slice stores:

- booksData: List of saved books.
- isAddBook: Controls add/edit form visibility.
- isEdit: Edit mode flag in slice state.

## Validation Rules

The form requires all fields:

- bookname
- isbn
- pubdate
- authorname
- dob
- bio

## Notes

- Book IDs are generated with crypto.randomUUID() when adding new books.
- The dependency list currently includes install due to a previous install command. It is not required by the app and can be removed if desired.
