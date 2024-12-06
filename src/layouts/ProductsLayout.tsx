import ProductsTop from '@/components/productsTop/ProductsTop'
import { Outlet } from 'react-router-dom'

function ProductsLayout() {
	return (
		<>
			<ProductsTop />
			<Outlet />
		</>
	)
}

export default ProductsLayout
