import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Control, FieldPath, FieldValues } from 'react-hook-form'

interface CustomInputProps<TFieldValues extends FieldValues> {
	control: Control<TFieldValues>
	name: FieldPath<TFieldValues>
	label?: string
	placeholder?: string
	isRequired?: boolean
	type?: string
}

const CustomInput = <TFieldValues extends FieldValues>({
	control,
	name,
	label,
	placeholder,
	isRequired = false,
	type = 'text',
}: CustomInputProps<TFieldValues>) => (
	<FormField
		control={control}
		name={name}
		render={({ field }) => (
			<FormItem>
				{label && (
					<FormLabel>
						{label}
						{isRequired && <span className='text-red-500'> *</span>}
					</FormLabel>
				)}
				<FormControl>
					<Input
						type={type}
						placeholder={placeholder}
						{...(type === 'file'
							? {
									onChange: e => field.onChange(e.target.files),
									onBlur: field.onBlur,
							  }
							: field)}
					/>
				</FormControl>
				<FormMessage />
			</FormItem>
		)}
	/>
)

export default CustomInput
