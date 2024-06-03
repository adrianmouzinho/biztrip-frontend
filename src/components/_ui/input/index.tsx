import { type ComponentProps, forwardRef } from 'react'
import { Input as CustomInput } from './styles'

interface InputProps extends ComponentProps<typeof CustomInput> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ type, ...props }, ref) => {
		return <CustomInput {...props} ref={ref} type={type ?? 'text'} />
	},
)

export { Input }
