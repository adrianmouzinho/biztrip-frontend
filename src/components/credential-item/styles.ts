import { styled } from '@/styles'

export const Container = styled('li', {
	height: 92,
	display: 'flex',
	alignItems: 'center',
	gap: '$6',
	padding: '$6',
	background: '$white',
	borderRadius: '$md',
	border: '2px solid $blue500',
})

export const Content = styled('div', {
	flex: 1,
	display: 'flex',
	flexDirection: 'column',
	gap: '$4',
})

export const Header = styled('span', {
	fontSize: '$xs',
	fontWeight: '$medium',
	lineHeight: '$shorter',
	color: '$gray500',
})

export const Data = styled('span', {
	fontSize: '$md',
	fontWeight: '$semiBold',
	lineHeight: '$shorter',
	color: '$gray900',
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
	},
})
