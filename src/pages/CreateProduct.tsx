import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import CustomInput from '@/components/customInput/CustomInput'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { setFavoriteProducts } from '@/store/newProductsSlice'
import { useAddProductMutation } from '@/store/services/productsSlice'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

const FormSchema = z.object({
	title: z.string().min(2, {
		message: 'Title must be at least 2 characters.',
	}),
	description: z.string().min(2, {
		message: 'Description must be at least 2 characters.',
	}),
	category: z.string().min(2, {
		message: 'Category must be at least 2 characters.',
	}),
	price: z.string().min(2, {
		message: 'Price must be at least 2 characters.',
	}),
	image: z
		.instanceof(FileList)
		.refine(files => files.length > 0, { message: 'Image is required' }),
	rating: z
		.string()
		.min(1, {
			message: '1 is the minimum rating.',
		})
		.max(5, {
			message: 'Rating must be at most 5 .',
		}),
	brand: z.string().min(2, {
		message: 'Brand must be at least 2 characters.',
	}),
})

const CreateProduct = () => {
	const [imageSrc, setImageSrc] = useState<string | null>(null)
	const [addProduct, { isLoading }] = useAddProductMutation()
	const dispatch = useDispatch()

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			title: '',
			description: '',
			category: '',
			price: '',
			image: undefined,
			rating: '1',
			brand: '',
		},
	})

	const image = form.watch('image')
	useEffect(() => {
		if (image && image.length > 0) {
			const file = image[0]
			const reader = new FileReader()

			reader.onload = () => {
				setImageSrc(reader.result as string)
			}

			reader.readAsDataURL(file)
		}
	}, [image])

	function onSubmit(data: z.infer<typeof FormSchema>) {
		const file = data.image[0]
		const reader = new FileReader()
		reader.onload = () => {
			const newProduct = {
				id: Math.floor(Math.random() * 100),
				title: data.title,
				description: data.description,
				category: data.category,
				price: +data.price,
				images: [reader.result as string],
				rating: data.rating,
				brand: data.brand,
				tags: ['hello'],
			}
			addProduct(newProduct)
				.unwrap()
				.then(() => toast.success('Product added successfully'))
				.catch(() => toast.error('Error adding product'))
			dispatch(setFavoriteProducts([newProduct]))
		}
		form.reset()
		reader.readAsDataURL(file)
	}

	return (
		<div className='py-10 max-w-[800px] mx-auto'>
			<h1 className='text-3xl font-bold mb-5'>Create Product</h1>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='w-full grid grid-cols-2 gap-4 border p-5 rounded-lg shadow-lg'
				>
					<CustomInput
						control={form.control}
						name='title'
						label='Title'
						placeholder='Tesla model X'
						isRequired
					/>
					<CustomInput
						control={form.control}
						name='description'
						label='Description'
						placeholder='Experience clean and powerful cabin conditioning from hidden vents'
						isRequired
					/>
					<CustomInput
						control={form.control}
						name='category'
						label='Category'
						placeholder='Cross over'
						isRequired
					/>
					<CustomInput
						control={form.control}
						name='price'
						label='Price'
						placeholder='$80 000'
						isRequired
					/>
					<CustomInput
						control={form.control}
						name='rating'
						label='Rating'
						placeholder='4.7'
						isRequired
					/>
					<CustomInput
						control={form.control}
						name='brand'
						label='Brand'
						placeholder='Tesla'
						isRequired
					/>
					<CustomInput
						control={form.control}
						name='image'
						label='Image'
						isRequired
						type='file'
					/>
					<br />
					{imageSrc && <img src={imageSrc} alt='image' className='w-full' />}
					<br />
					<Button type='submit' disabled={!form.formState.isValid}>
						{isLoading ? 'Submitting...' : 'Submit'}
					</Button>
				</form>
			</Form>
		</div>
	)
}

export default CreateProduct
