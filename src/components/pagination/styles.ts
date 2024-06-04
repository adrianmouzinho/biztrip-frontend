import { styled } from '@/styles'

export const Container = styled('div', {
	position: 'fixed',
	bottom: 0,
	left: 0,
	right: 0,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	background: '$white',
	borderTop: '1px solid $gray300',
})

export const Content = styled('div', {
	width: '100%',
	maxWidth: 1904,
	margin: '0 auto',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: '$4 $6',
})

export const Flex = styled('div', { display: 'flex' })

export const PageButton = styled('button', {
	all: 'unset',
	boxSizing: 'border-box',
	height: '2.75rem',
	width: '2.75rem',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	borderRadius: '$md',
	fontWeight: '$semiBold',
	fontFamily: '$default',
	lineHeight: '$shorter',
	textAlign: 'center',
	cursor: 'pointer',
	transition: 'background 300ms, color 300ms',

	'&:disabled': {
		cursor: 'not-allowed',
		opacity: '0.32',
	},

	'&:focus': {
		boxShadow: '0 0 0 4px $colors$gray300',
	},

	'&:not(:disabled):hover': {
		color: '$blue900',
		background: '$gray100',
	},

	variants: {
		active: {
			true: {
				color: '$blue500',
				background: '$blue100',
			},

			false: {
				color: '$gray500',
				background: '$gray100',
			},
		},
	},

	defaultVariants: {
		active: false,
	},
})
