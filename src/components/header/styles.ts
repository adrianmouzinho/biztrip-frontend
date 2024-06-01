import { styled } from '@/styles'

export const HeaderContainer = styled('header', {
	backgroundColor: '$white',
	borderBottom: '1px solid $gray300',

	'> div': {
		width: '100%',
		maxWidth: 1328,
		margin: '0 auto',
		padding: '$4 $6',

		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',

		h2: {
			fontSize: '$2xl',
			fontWeight: '$semiBold',
			letterSpacing: '1.5%',
		},
	},
})

export const Actions = styled('div', {
	display: 'flex',
	alignItems: 'center',
	gap: '$4',
})
