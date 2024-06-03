import { styled } from '@/styles'

export const List = styled('ul', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'stretch',
	gap: '$6',
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