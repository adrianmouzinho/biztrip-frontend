import { styled } from '@/styles'

export const Form = styled('form', {
	width: '100%',
	maxWidth: 400,
	padding: '$8',

	display: 'flex',
	flexDirection: 'column',
	gap: '$6',

	background: '$white',
	borderRadius: '$md',
	border: '1px solid $gray300',

	img: {
		height: '$10',
	},

	h2: {
		textAlign: 'center',
	},
})

export const InputsContainer = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: '$4',

	'> div': {
		display: 'flex',
		flexDirection: 'column',
		gap: '$2',
	},
})

export const ErrorMessage = styled('div', {
	color: '$red900',
	display: 'flex',
	alignItems: 'center',
	gap: '$1',

	img: {
		width: '$5',
		height: '$5',
	},

	label: {
		fontSize: '$sm',
		lineHeight: '$shorter',
	},
})