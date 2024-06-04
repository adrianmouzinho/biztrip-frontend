import { styled } from '@/styles'

export const Container = styled('header', {
	position: 'sticky',
	top: 0,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	background: '$white',
	borderBottom: '1px solid $gray300',
})

export const Content = styled('div', {
	width: '100%',
	maxWidth: 1904,
	margin: '0 auto',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: '$4 $6',

	h2: {
		fontSize: '$2xl',
		fontWeight: '$semiBold',
		letterSpacing: '1.5%',
	},
})

export const Flex = styled('div', { display: 'flex' })
