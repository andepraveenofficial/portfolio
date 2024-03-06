import { configureStore } from '@reduxjs/toolkit'

// Slices
import markdownSlice from './markdownSlice'

const appStore = configureStore({
  reducer: {
    markdown: markdownSlice
  },
})

export default appStore