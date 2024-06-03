import { styled } from '@/styles'

export const Button = styled('button', {
	all: 'unset',
	boxSizing: 'border-box',
	height: '$8',
	width: '$8',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	background: 'transparent',
	color: '$gray500',
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
