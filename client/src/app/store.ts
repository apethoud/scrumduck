import { configureStore } from '@reduxjs/toolkit'
import storiesReducer from '../features/stories/storiesSlice'
import { apiSlice } from '../features/api/apiSlice'

export default configureStore({
  reducer: {
    stories: storiesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(apiSlice.middleware)
})