import { BadgePlus } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header className='flex items-center justify-between p-5 bg-primary rounded-lg text-white'>
			<Link to='/'>Logo</Link>
			<nav className='flex gap-4'>
				<Link to='/create-product' className='flex gap-1'>
					<BadgePlus />
					<span>Add Product</span>
				</Link>
			</nav>
		</header>
	)
}

export default Header
