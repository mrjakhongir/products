import { Product } from '@/types/product'
import { useNavigate } from 'react-router-dom'
import Favorite from '../favorite/Favorite'
import { Button } from '../ui/button'

type CardProps = {
	product: Product
	setProductId: React.Dispatch<React.SetStateAction<number | null>>
}

export const Card: React.FC<CardProps> = ({ product, setProductId }) => {
	const navigate = useNavigate()

	function deleteProduct(e: React.MouseEvent<HTMLButtonElement>) {
		e.stopPropagation()
		setProductId(product.id)
	}

	return (
		<div
			onClick={() => navigate(`/products/${product.id}`)}
			className='relative flex flex-col gap-4 max-w-[310px] bg-secondary rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer border group'
		>
			<div className='rounded-lg overflow-hidden h-56'>
				<img
					src={product.images[0]}
					alt=''
					className='w-full h-full object-contain'
				/>
				<Favorite product={product} />
			</div>
			<div className='flex-1 flex flex-col bg-white p-3'>
				<h2 className='font-bold text-xl text-primary mb-3 group-hover:text-destructive'>
					{product.title}
				</h2>
				<div className='mt-auto'>
					<p className='overflow-ellipsis mb-3'>{product.description}</p>
					<Button onClick={e => deleteProduct(e)} className='w-full'>
						Delete
					</Button>
				</div>
			</div>
		</div>
	)
}
