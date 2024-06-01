import { styled } from '../../../styles'

export const InputContainer = styled('div', {
	height: 48,
	minWidth: 212,
	padding: '0 $4',
	backgroundColor: 'transparent',
	borderRadius: '$md',
	border: '1px solid $gray300',
	display: 'flex',
	alignItems: 'center',
	gap: '$2',
	transition: 'box-shadow 300ms',

	img: {
		width: '$5',
		height: '$5',
	},

	'&:hover': {
		borderColor: 'transparent',
		boxShadow: '0 0 0 2px $colors$blue500',
	},

	'&:has(input:focus)': {
		borderColor: 'transparent',
		boxShadow: '0 0 0 4px $colors$gray300',
	},

	'&:has(input:disabled)': {
		opacity: 0.5,
		cursor: 'not-allowed',
	},
})

export const Input = styled('input', {
	color: '$gray900',
	fontWeight: 'regular',
	background: 'transparent',
	border: 0,
	width: '100%',

	'&:focus': {
		outline: 0,
	},

	'&:disabled': {
		cursor: 'not-allowed',
	},

	'&::placeholder': {
		color: '$gray600',
	},
})
