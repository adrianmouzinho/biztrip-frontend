import { styled } from '@/styles'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { Check, X } from 'lucide-react'
import { type ComponentProps, type ElementRef, forwardRef } from 'react'

const StyledSwitch = styled(SwitchPrimitive.Root, {
	all: 'unset',
	boxSizing: 'border-box',
	overflow: 'hidden',
	position: 'relative',
	width: '$12',
	height: '$6',
	background: 'transparent',
	borderRadius: '$full',
	boxShadow: 'inset 0 0 0 2px $colors$gray600',
	WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

	'&:focus': {
		outline: '2px solid $gray300',
	},

	'&[data-state="checked"]': {
		background: '$blue100',
		boxShadow: 'inset 0 0 0 2px $colors$blue500',
	},

	'&:disabled': {
		background: '$gray100',
		pointerEvents: 'none',
	},
})

const StyledSwitchThumb = styled(SwitchPrimitive.Thumb, {
	position: 'relative',
	display: 'block',
	width: '$4',
	height: '$4',
	background: '$gray500',
	borderRadius: '$full',
	boxShadow: '0 0 2px $gray300',
	transition: 'transform 100ms',
	transform: 'translateX(4px)',
	willChange: 'transform',

	'&[data-state="checked"]': {
		transform: 'translateX(28px)',
		background: '$blue500',
	},

	svg: {
		position: 'absolute',
		width: '$2',
		height: '$2',
		color: '$white',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	},
})

export interface SwitchProps extends ComponentProps<typeof StyledSwitch> {}

const Switch = forwardRef<ElementRef<typeof StyledSwitch>, SwitchProps>(
	({ ...props }, ref) => {
		return (
			<StyledSwitch ref={ref} {...props}>
				<StyledSwitchThumb>
					{props.checked ? <Check /> : <X />}
				</StyledSwitchThumb>
			</StyledSwitch>
		)
	},
)

export { Switch }
