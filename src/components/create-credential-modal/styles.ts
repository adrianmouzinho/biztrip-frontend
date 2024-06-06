import { styled } from '@/styles'

export const Form = styled('form', {
	overflow: 'hidden',
	flex: 1,
	display: 'flex',
	flexDirection: 'column',
})

export const InputsContainer = styled('div', {
	overflow: 'auto',
	flex: 1,
	display: 'flex',
	padding: '$6',
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
