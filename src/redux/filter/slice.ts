import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FilterSliceState, Sort, SortPropertyEnum} from "./types";


const initialState: FilterSliceState = {
    searchValue: '',
    activeIndex: 0,
    currentPage: 1,
    sort: {
        name: 'Популярности',
        sortProperty: SortPropertyEnum.RATING
    }
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setActiveIndex(state, action: PayloadAction<number>) {
            state.activeIndex = action.payload
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload
        },
        setSortType(state, action: PayloadAction<Sort>) {
            state.sort = action.payload
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        },
        setFilters(state, actions: PayloadAction<FilterSliceState>) {
            if (Object.keys(actions.payload).length) {
                state.sort = actions.payload.sort
                state.currentPage = Number(actions.payload.currentPage)
                state.activeIndex = Number(actions.payload.activeIndex)
            } else {
                state.currentPage = 1;
                state.activeIndex = 0;
                state.sort = {
                    name: 'Популярности',
                    sortProperty: SortPropertyEnum.RATING
                }
            }
        }
    }
})



export const { setActiveIndex, setSortType, setCurrentPage, setFilters, setSearchValue } = filterSlice.actions

export  default  filterSlice.reducer