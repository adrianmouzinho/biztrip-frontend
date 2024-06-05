import { styled } from '@/styles'

export const Container = styled('div', {
	flex: 1,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'stretch',
})

export const List = styled('ul', {
	flex: 1,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'stretch',
	gap: '$6',
	padding: '$10 $6 7.5rem',

	'@media (max-width: 768px)': {
		paddingBottom: '$10',
	},
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
