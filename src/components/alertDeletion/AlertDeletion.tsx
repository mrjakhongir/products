import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { useDeleteProductMutation } from '@/store/services/productsSlice'
import { toast } from 'react-toastify'

type AlertDeletionProps = {
	productId: number | null
	setProductId: React.Dispatch<React.SetStateAction<number | null>>
}

const AlertDeletion: React.FC<AlertDeletionProps> = ({
	productId,
	setProductId,
}) => {
	const [deleteProduct] = useDeleteProductMutation()

	const deleteSelectedProduct = async () => {
		if (productId) {
			await deleteProduct(productId)
				.unwrap()
				.then(() => toast.success('Product deleted successfully'))
				.catch(() => toast.error('Error deleting product'))
			setProductId(null)
		}
	}

	return (
		<AlertDialog open={!!productId} onOpenChange={() => setProductId(null)}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction onClick={deleteSelectedProduct}>
						Continue
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}

export default AlertDeletion
