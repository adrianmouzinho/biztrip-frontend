import { styled } from '@/styles'

export const Content = styled('div', {
	flex: 1,
	display: 'flex',
	flexDirection: 'column',
	gap: '$4',
	overflow: 'hidden',
})

export const Container = styled('li', {
	height: 92,
	display: 'flex',
	alignItems: 'center',
	gap: '$6',
	padding: '$6',
	background: '$white',
	borderRadius: '$md',
	border: '2px solid $blue500',

	'@media (max-width: 768px)': {
		[`> ${Content}:not(:first-child)`]: {
			display: 'none',
		},
	},
})

export const Header = styled('span', {
	fontSize: '$xs',
	fontWeight: '$medium',
	lineHeight: '$shorter',
	color: '$gray500',

	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
})

export const Data = styled('span', {
	fontSize: '$md',
	fontWeight: '$semiBold',
	lineHeight: '$shorter',
	color: '$gray900',

	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
})

export const Actions = styled('div', {
	width: 'fit-content',
	display: 'flex',
	alignItems: 'center',
	gap: '$6',

	form: {
		minWidth: '7rem',
		display: 'flex',
		alignItems: 'center',
		gap: '$2',

		'@media (max-width: 768px)': {
			minWidth: 'fit-content',
		},
	},
})
