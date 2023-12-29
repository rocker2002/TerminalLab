import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategoryDetails = createAsyncThunk('emoji/fetchCategoryDetails', async (category) => {
  const response = await axios.get(`https://emojihub.yurace.pro/api/category/${category}`);
  return response.data;
});

const emojiSlice = createSlice({
  name: 'emoji',
  initialState: {
    categories: [],
    selectedCategory: null,
    categoryDetails: null,
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setCategoryDetails: (state, action) => {
      state.categoryDetails = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryDetails.fulfilled, (state, action) => {
        state.categoryDetails = action.payload;
      });
  },
});

export const { setCategories, selectCategory, setCategoryDetails } = emojiSlice.actions;
export const selectEmoji = (state) => state.emoji;
export default emojiSlice.reducer;

