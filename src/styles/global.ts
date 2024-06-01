import { globalCss } from '.'

export const globalStyles = globalCss({
	'*': {
		margin: 0,
		padding: 0,
		boxSizing: 'border-box',
	},

	body: {
		backgroundColor: '$gray100',
		color: '$gray900',
		fontFamily: '$default',
		'-webkit-font-smoothing': 'antialiased',
	},
})
