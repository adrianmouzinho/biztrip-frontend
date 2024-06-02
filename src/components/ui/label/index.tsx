import { type ComponentProps, forwardRef } from 'react'
import { Label as CustomLabel } from './styles'

interface LabelProps extends ComponentProps<typeof CustomLabel> {}

const Label = forwardRef<HTMLLabelElement, LabelProps>(({ ...props }, ref) => {
	return <CustomLabel {...props} ref={ref} />
})

export { Label }
