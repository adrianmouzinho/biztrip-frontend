import { styled } from '@/styles'
import { type ComponentProps, type ElementRef, forwardRef } from 'react'

const StyledLabel = styled('label', {
	display: 'flex',
	gap: '$2',
	fontSize: '$xs',
	fontWeight: 'bold',
	lineHeight: '$shorter',
	color: '$gray700',
	textAlign: 'left',

	span: {
		color: '$orange500',
	},
})

interface LabelProps extends ComponentProps<typeof StyledLabel> {
	required?: boolean
}

const Label = forwardRef<ElementRef<typeof StyledLabel>, LabelProps>(
	({ required = false, ...props }, ref) => {
		return (
			<StyledLabel {...props} ref={ref}>
				{props.children} {required && <span>Obrigatório</span>}
			</StyledLabel>
		)
	},
)

export { Label }
