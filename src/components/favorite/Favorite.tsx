import useLocalStorage from '@/hooks/useLocalStorage'
import { Product } from '@/types/product'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'

type FavoriteProps = {
	product: Product
}

function Favorite({ product }: FavoriteProps) {
	const { favorites, setFavorites } = useLocalStorage()
	const [isFavorite, setIsFavorite] = useState(false)

	useEffect(() => {
		setIsFavorite(favorites.some(item => item.id === product.id))
	}, [product, favorites])
	function toggleFavorite(e: React.MouseEvent<HTMLButtonElement>) {
		e.stopPropagation()

		if (isFavorite) {
			setFavorites(prevState =>
				prevState.filter(item => item.id !== product.id)
			)
		} else {
			setFavorites(prevState => [...prevState, product])
		}

		setIsFavorite(!isFavorite)
	}

	return (
		<Button
			variant={'ghost'}
			onClick={e => toggleFavorite(e)}
			className='absolute z-10 top-4 right-3 border hover:bg-transparent bg-white'
		>
			{isFavorite ? (
				<img src='/heart-solid.svg' alt='heart solid' className='w-6 h-6' />
			) : (
				<img src='/heart-regular.svg' alt='heart regular' className='w-6 h-6' />
			)}
		</Button>
	)
}

export default Favorite
