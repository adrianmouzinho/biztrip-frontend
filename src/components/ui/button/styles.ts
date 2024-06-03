import { styled } from '@/styles'

export const Button = styled('button', {
	all: 'unset',
	boxSizing: 'border-box',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '$2',
	borderRadius: '$md',
	fontWeight: '$semiBold',
	fontFamily: '$default',
	lineHeight: '$shorter',
	textAlign: 'center',
	cursor: 'pointer',
	transition: 'background 300ms',

	'&:disabled': {
		cursor: 'not-allowed',
		opacity: '0.32',
	},

	'&:focus': {
		boxShadow: '0 0 0 4px $colors$gray300',
	},

	variants: {
		variant: {
			primary: {
				color: '$white',
				background: '$blue500',

				'&:not(:disabled):hover': {
					background: '$blue900',
				},
			},

			secondary: {
				background: '$gray600',

				'&:not(:disabled):hover': {
					background: '$gray900',
				},
			},

			tertiary: {
				color: '$gray900',
				background: '$gray100',

				'&:not(:disabled):hover': {
					background: '$gray300',
				},
			},
		},

		size: {
			sm: {
				height: 48,
				padding: '0 $4',
				fontSize: '$md',

				svg: {
					width: '$4',
					height: '$4',
				},
			},

			md: {
				height: 52,
				padding: '0 $4',
				fontSize: '$xl',

				svg: {
					width: '$5',
					height: '$5',
				},
			},

			lg: {
				height: 80,
				padding: '0 $6',
				fontSize: '$2xl',

				svg: {
					width: '$8',
					height: '$8',
				},
			},
		},
	},

	defaultVariants: {
		variant: 'primary',
		size: 'sm',
	},
})
