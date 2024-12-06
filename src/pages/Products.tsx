import ProductsGrid from '@/components/productsGrid/ProductsGrid'
import { useGetProductsByPageQuery } from '@/store/services/productsSlice'
import { Loader } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'

function Products() {
	const [searchParams] = useSearchParams()
	const { data, isLoading } = useGetProductsByPageQuery(
		Number(searchParams.get('page'))
	)

	return (
		<div className='py-5'>
			{isLoading ? (
				<Loader size={40} className='animate-spin mx-auto' />
			) : (
				<ProductsGrid data={data.products} />
			)}
		</div>
	)
}

export default Products
