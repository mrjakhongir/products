import { Button } from '@/components/ui/button'
import { useGetProductQuery } from '@/store/services/productsSlice'
import { Loader } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetails = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const { data: product, isLoading } = useGetProductQuery(id || '')

	return (
		<div className='py-10'>
			{isLoading ? (
				<Loader size={40} className='animate-spin mx-auto' />
			) : (
				<>
					<Button variant='link' onClick={() => navigate('/')}>
						⬅️ Back to products
					</Button>
					<section className='max-w-[800px] mx-auto border p-5 rounded-lg shadow-lg'>
						<div className='mb-5'>
							<h1 className='text-3xl font-bold mb-3'>{product.title}</h1>
							<p className='text-slate-600'>{product.description}</p>
						</div>
						<div className='flex gap-10'>
							<img
								className='max-w-[400px] bg-secondary'
								src={product.images[0]}
								alt=''
							/>
							<ul className='flex-1 flex flex-col gap-2'>
								<li className='flex justify-between'>
									<span className='text-lg font-medium'>Price:</span>{' '}
									<span>${product.price}</span>
								</li>
								<li className='flex justify-between'>
									<span className='text-lg font-medium'>Category:</span>{' '}
									<span className='inline-block capitalize bg-orange-300 text-white px-3 py-1 rounded-md'>
										{product.category}
									</span>
								</li>
								<li className='flex justify-between'>
									<span className='text-lg font-medium'>Rating:</span>{' '}
									<span>{product.rating}</span>
								</li>
								<li className='flex justify-between'>
									<span className='text-lg font-medium'>Brand:</span>{' '}
									<span>{product.brand}</span>
								</li>
								<li className='flex justify-between'>
									<span className='text-lg font-medium'>Tags:</span>
									<div className='flex gap-2'>
										{product.tags.map((tag: string) => (
											<span className='inline-block bg-destructive text-white px-3 py-1 rounded-md'>
												{tag}
											</span>
										))}
									</div>
								</li>
								<li className='mt-auto'>
									<Button variant='outline' className='w-full mb-2'>
										Add to Favorites
									</Button>
									<Button className='w-full'>Add to cart</Button>
								</li>
							</ul>
						</div>
					</section>
				</>
			)}
		</div>
	)
}

export default ProductDetails
