import { styled } from '@/styles'

export const Container = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'stretch',
})

export const List = styled('ul', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'stretch',
	gap: '$6',
	paddingBottom: '$20',
})

export const EmptyItem = styled('div', {
	height: 96,
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	background: '$white',
	borderRadius: '$md',
	border: '1px solid $gray300',
	lineHeight: '$shorter',
})

export const LoadingPagination = styled('div', {
	height: 80,
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
