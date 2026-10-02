import { createSlice } from "@reduxjs/toolkit";


const bookSlice = createSlice({
  name: 'book',
  initialState: {
    booksData: [],
    isAddBook: false,
    isEdit: false
  },
  reducers: {
    addBook: (state, action) => {
      state.booksData.push(action.payload); 
    },
    updateBook: (state, action) => {
      const index = state.booksData.findIndex((book) => book.id === action.payload.id);
      if (index !== -1) {
        state.booksData[index] = action.payload;
      }
    },
    removeBook: (state, action) => {
      state.booksData = state.booksData.filter(
        (book) => book.id !== action.payload
      );
    },
    toggleAddBook: (state) => {
      state.isAddBook = !state.isAddBook;
    },
    toggleEdit: (state) => {
      state.isEdit = !state.isEdit;
    }
  }
});

export const { addBook, updateBook, removeBook, toggleAddBook, toggleEdit } = bookSlice.actions;
export default bookSlice.reducer;
