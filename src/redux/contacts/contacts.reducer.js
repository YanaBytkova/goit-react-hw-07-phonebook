import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.headers.common["content-type"] = "application/json";

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (thunkApi) => {
    try {
      const { data } = await axios.get(
        `https://6561ca94dcd355c08324321a.mockapi.io/api/contacts/contacts`
      );
 
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const { data } = await axios.delete(
        `https://6561ca94dcd355c08324321a.mockapi.io/api/contacts/contacts/${contactId}`
      );
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkApi) => {
    try {
      const { data } = await axios.post(
        `https://6561ca94dcd355c08324321a.mockapi.io/api/contacts/contacts`, newContact
      );
 
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);


const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
  filterTerm: ""
  
};

const contactsSlice = createSlice({
 
  name: 'contacts',
  initialState,
  reducers: {

    inputFilter(state, { payload }) {
     state.filterTerm = payload;
   }, 

},
extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = payload;
        
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(contact=> contact.id !== payload.id);
        
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = [...state.contacts, payload];
        
      })

      .addMatcher(
        isAnyOf(
    
          fetchContacts.pending, 
          deleteContact.pending, 
          addContact.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
         
          fetchContacts.rejected,
          deleteContact.rejected,
          addContact.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),

});

export const {inputFilter} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
