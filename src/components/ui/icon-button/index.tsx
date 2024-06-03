import { type ComponentProps, forwardRef } from 'react'
import { Button as CustomButton } from './styles'

interface IconButtonProps extends ComponentProps<typeof CustomButton> {}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
	({ type, ...props }, ref) => {
		return <CustomButton {...props} ref={ref} type={type ?? 'button'} />
	},
)

export { IconButton }
