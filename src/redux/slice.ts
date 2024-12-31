import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { HOME_PAGE } from '../constants'

export interface CounterState {
  currentPage: string
  isActiveMenu: boolean
  isLoading: boolean
}

const initialState: CounterState = {
  currentPage: HOME_PAGE,
  isActiveMenu: false,
  isLoading: false
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setCurrentPage: (state: CounterState, action: PayloadAction<string>) => {
      state.currentPage = action.payload
    },
    setActiveMenu: (state: CounterState, action: PayloadAction<boolean>) => {
      state.isActiveMenu = action.payload
    },
    setIsLoading: (state: CounterState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
  }
})

export default mainSlice
