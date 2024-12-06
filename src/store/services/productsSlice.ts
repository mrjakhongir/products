import { Product } from '@/types/product'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiProduct = createApi({
	reducerPath: 'apiProduct',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
	endpoints: builder => ({
		getProducts: builder.query({
			query: () => '/products',
		}),
		getProduct: builder.query({
			query: (id: string) => `/products/${id}`,
		}),
		deleteProduct: builder.mutation({
			query: (id: number) => ({
				url: `/products/${id}`,
				method: 'DELETE',
			}),
		}),
		addProduct: builder.mutation({
			query: (product: Product) => ({
				url: '/products/add',
				method: 'POST',
				body: product,
			}),
		}),
		getProductsByPage: builder.query({
			query: (page: number) => `/products?limit=8&skip=${(page - 1) * 10}`,
		}),
	}),
})

export const {
	useGetProductsQuery,
	useGetProductQuery,
	useDeleteProductMutation,
	useAddProductMutation,
	useGetProductsByPageQuery,
} = apiProduct
