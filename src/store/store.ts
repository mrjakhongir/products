import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import newProductsReducer from './newProductsSlice'
import { apiProduct } from './services/productsSlice'

export const store = configureStore({
	reducer: {
		[apiProduct.reducerPath]: apiProduct.reducer,
		newProducts: newProductsReducer,
	},

	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(apiProduct.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
setupListeners(store.dispatch)
