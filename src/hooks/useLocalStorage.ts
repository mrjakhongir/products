import { Product } from '@/types/product'
import { useEffect, useState } from 'react'

const useLocalStorage = () => {
	const [favorites, setFavorites] = useState<Product[]>(() => {
		const favorites = localStorage.getItem('favorites')
		return favorites ? JSON.parse(favorites) : []
	})
	useEffect(() => {
		localStorage.setItem('favorites', JSON.stringify(favorites))
	}, [favorites])
	return { favorites, setFavorites }
}

export default useLocalStorage
