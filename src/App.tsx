import { Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import ProductsLayout from './layouts/ProductsLayout'
import CreateProduct from './pages/CreateProduct'
import Favorites from './pages/Favorites'
import ProductDetails from './pages/ProductDetails'
import Products from './pages/Products'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='/' element={<ProductsLayout />}>
					<Route index element={<Products />} />
					<Route path='favorites' element={<Favorites />} />
				</Route>
				<Route path='products/:id' element={<ProductDetails />} />
				<Route path='/create-product' element={<CreateProduct />} />
			</Route>
		</Routes>
	)
}

export default App
