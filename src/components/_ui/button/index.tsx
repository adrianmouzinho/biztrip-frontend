import { type ComponentProps, forwardRef } from 'react'
import { Button as CustomButton } from './styles'

interface ButtonProps extends ComponentProps<typeof CustomButton> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ type, ...props }, ref) => {
		return <CustomButton {...props} ref={ref} type={type ?? 'button'} />
	},
)

export { Button }
