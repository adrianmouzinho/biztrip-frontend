import { styled } from '@/styles'

export const Container = styled('div', {
	width: '100%',
	maxWidth: 664,
	padding: '$10',
	display: 'flex',
	flexDirection: 'column',
	gap: '$10',
	background: '$white',
	borderRadius: '$md',
	border: '1px solid $gray300',

	h2: {
		fontWeight: '$semiBold',
		fontSize: '2.5rem',
		letterSpacing: '1.5%',
	},

	p: {
		fontSize: '$2xl',
		letterSpacing: '2%',
		color: '$gray600',
	},

	'@media (max-width: 768px)': {
		padding: '$6',

		h2: {
			fontSize: '$2xl',
		},

		p: {
			fontSize: '$md',
		},
	},
})

export const Form = styled('form', {
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	gap: '$6',
})

export const Flex = styled('div', { display: 'flex' })

export const Fieldset = styled('fieldset', {
	all: 'unset',
	display: 'flex',
	flexDirection: 'column',
	gap: '$2',
})

export const ErrorMessage = styled('div', {
	color: '$red900',
	display: 'flex',
	alignItems: 'center',
	gap: '$1',

	svg: {
		width: '$5',
		height: '$5',
	},

	label: {
		fontSize: '$sm',
		lineHeight: '$shorter',
	},
})

export const PasswordContainer = styled('div', {
	position: 'relative',

	svg: {
		position: 'absolute',
		top: '$5',
		right: '$5',
		color: '$gray300',
		cursor: 'pointer',
	},
})
