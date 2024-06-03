import { type ComponentProps, forwardRef } from 'react'
import { Label as CustomLabel } from './styles'

interface LabelProps extends ComponentProps<typeof CustomLabel> {
	required?: boolean
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
	({ required = false, ...props }, ref) => {
		return (
			<CustomLabel {...props} ref={ref}>
				{props.children} {required && <span>Obrigatório</span>}
			</CustomLabel>
		)
	},
)

export { Label }
