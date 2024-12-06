import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'
import ProductsGrid from '../productsGrid/ProductsGrid'

const NewProducts = () => {
	const { newProducts } = useSelector((state: RootState) => state.newProducts)
	return (
		<div className='my-5'>
			<h1 className='text-3xl font-semibold mb-2'>New products</h1>
			{<ProductsGrid data={newProducts} />}
		</div>
	)
}

export default NewProducts
