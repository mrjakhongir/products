import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'

const ProductsTop = () => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	return (
		<div className='mb-5'>
			<h1 className='text-3xl font-semibold mb-2'>Products</h1>
			<div className='flex gap-2'>
				<Button
					variant={pathname === '/' ? 'default' : 'secondary'}
					onClick={() => navigate('/')}
				>
					All
				</Button>
				<Button
					variant={pathname === '/favorites' ? 'default' : 'secondary'}
					onClick={() => navigate('/favorites')}
				>
					Favories
				</Button>
			</div>
		</div>
	)
}

export default ProductsTop
