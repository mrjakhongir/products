import { useSearchParams } from 'react-router-dom'
import { Button } from '../ui/button'

type PaginationProps = {
	count: number
}

const Pagination: React.FC<PaginationProps> = ({ count }) => {
	const [searchParams, setSearchParams] = useSearchParams()
	const goToPrevPage = () => {
		if (searchParams.get('page') === '1') return
		setSearchParams({ page: String(Number(searchParams.get('page')) - 1) })
		window.scrollTo(0, 0)
	}

	const goToNextPage = () => {
		if (searchParams.get('page') === String(count)) return
		setSearchParams({ page: String(Number(searchParams.get('page')) + 1) })
		window.scrollTo(0, 0)
	}
	return (
		<section className='flex justify-center items-center gap-2'>
			<Button
				onClick={() => goToPrevPage()}
				disabled={searchParams.get('page') === '1'}
			>
				&lt;
			</Button>
			<div className='flex items-center gap-2'>
				{Array.from({ length: count }, (_, i) => i + 1).map(page => (
					<Button
						key={page}
						variant={`${
							searchParams.get('page') === String(page) ? 'default' : 'outline'
						}`}
						onClick={() => {
							setSearchParams({ page: String(page) })
							window.scrollTo(0, 0)
						}}
					>
						{page}
					</Button>
				))}
			</div>
			<Button
				onClick={() => goToNextPage()}
				disabled={searchParams.get('page') === String(count)}
			>
				&gt;
			</Button>
		</section>
	)
}

export default Pagination
