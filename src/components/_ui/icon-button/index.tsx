import { styled } from '@/styles'
import { type ComponentProps, type ElementRef, forwardRef } from 'react'

const StyledIconButton = styled('button', {
	all: 'unset',
	boxSizing: 'border-box',
	height: '$8',
	width: '$8',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	background: 'transparent',
	color: '$gray500',
	borderRadius: '$md',
	cursor: 'pointer',

	'&:disabled': {
		cursor: 'not-allowed',
		opacity: '0.32',
	},

	'svg, img': {
		width: '$6',
		height: '$6',
	},

	'&:focus': {
		boxShadow: '0 0 0 4px $colors$gray300',
	},
})

export interface IconButtonProps
	extends ComponentProps<typeof StyledIconButton> {}

const IconButton = forwardRef<
	ElementRef<typeof StyledIconButton>,
	IconButtonProps
>(({ type, ...props }, ref) => {
	return <StyledIconButton {...props} ref={ref} type={type ?? 'button'} />
})

export { IconButton }
