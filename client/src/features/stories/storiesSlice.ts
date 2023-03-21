import { createSlice } from '@reduxjs/toolkit';

export const storiesSlice = createSlice({
  name: 'stories',
  initialState: {
    stories: []
  },
  reducers: {}
})

export const {} = storiesSlice.actions
export default storiesSlice.reducer
