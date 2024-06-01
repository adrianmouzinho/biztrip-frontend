import { styled } from '../../styles'

export const HeaderContainer = styled('header', {
	backgroundColor: '$white',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: '$4 $8',
	borderBottom: '1px solid $gray300',

	h2: {
		fontSize: '$2xl',
		fontWeight: '$semiBold',
		letterSpacing: '1.5%',
	},

	'> div': {
		display: 'flex',
		alignItems: 'center',
		gap: '$4',
	},
})
