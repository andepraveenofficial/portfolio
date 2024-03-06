import { createSlice } from "@reduxjs/toolkit";

const initialState = "html"
export const markdownSlice = createSlice({
    name: "markdown",
    initialState,
    reducers: {
        setMarkdown: (state, action) => {
            return action.payload
        }
    }
})

export const { setMarkdown } = markdownSlice.actions
export default markdownSlice.reducer