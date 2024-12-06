import { Product } from '@/types/product'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

interface NewProducts {
	newProducts: Product[]
}

const initialState: NewProducts = {
	newProducts: [],
}

export const favoritesSlice = createSlice({
	name: 'newProducts',
	initialState,
	reducers: {
		setFavoriteProducts: (state, action: PayloadAction<Product[]>) => {
			state.newProducts = action.payload
		},
	},
})

export const { setFavoriteProducts } = favoritesSlice.actions

export default favoritesSlice.reducer
