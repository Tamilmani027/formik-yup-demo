import { createSlice } from "@reduxjs/toolkit";


const bookSlice=createSlice(
	{
		name:'book',
		
		initialState:{
			booksData:[],
			isAddBook:false,
			isEdit:false
		},

		reducers:{

		}
	}
)