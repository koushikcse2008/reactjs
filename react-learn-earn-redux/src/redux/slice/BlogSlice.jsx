import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getApiData } from "../baseurl/AxiosMethods";

const initialState = ({
    blogs_data: [],
    status: 'idle'
}); 

export const FetchBlog = createAsyncThunk("fetch/blog", async () => {
    try {
        let res = await getApiData("blogs");
        return res?.data;
    } catch(error) {
        console.log(error);
    }
});

export const BlogSlice = createSlice({
    name: "blogslice",
    initialState,
    reducers: {},
    extraReducers: {
        [FetchBlog.pending]: (state) => {
            state.status = "loading";
        },
        [FetchBlog.fulfilled]: (state, {payload}) => {            
            state.status = "idle";
            state.blogs_data = payload;
        },
        [FetchBlog.rejected]: (state) => {
            state.status = "reject";
        }
    }
});

