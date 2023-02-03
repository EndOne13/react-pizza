import {createAsyncThunk} from "@reduxjs/toolkit";
import {FetchPizzasArgs, Pizza} from "./types";
import axios from "axios";

export const fetchPizzas = createAsyncThunk<Pizza[], FetchPizzasArgs>(
    'pizza/fetchPizzasStatus',
    async (params: FetchPizzasArgs) => {
        const {sortBy, order, category, search, currentPage} = params
        const {data} = await axios.get(`https://6352e6c7a9f3f34c374b4459.mockapi.io/Items?&page=${currentPage}&limit=10&${category}&sortBy=${sortBy}&order=${order}&${search}`)

        return data;
    }
)