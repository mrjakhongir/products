import { Product } from '@/types/product'
import { useState } from 'react'
import AlertDeletion from '../alertDeletion/AlertDeletion'
import { Card } from '../card/Card'
import Pagination from '../pagination/Pagination'

type ProductsGridProps = {
	data: Product[]
}
const ProductsGrid: React.FC<ProductsGridProps> = ({ data }) => {
	const [productId, setProductId] = useState<number | null>(null)
	return (
		<section>
			<section className='flex flex-wrap gap-5 mb-5'>
				{data.map(product => (
					<Card
						key={product.id}
						product={product}
						setProductId={setProductId}
					/>
				))}
			</section>
			<Pagination count={10} />
			<AlertDeletion productId={productId} setProductId={setProductId} />
		</section>
	)
}

export default ProductsGrid
