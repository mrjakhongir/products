import ProductsGrid from '@/components/productsGrid/ProductsGrid'
import useLocalStorage from '@/hooks/useLocalStorage'

const Favorites = () => {
	const { favorites } = useLocalStorage()

	return (
		<section>
			{favorites.length > 0 ? (
				<ProductsGrid data={favorites} />
			) : (
				<p className='text-center text-2xl'>No favorites yet</p>
			)}
		</section>
	)
}

export default Favorites
