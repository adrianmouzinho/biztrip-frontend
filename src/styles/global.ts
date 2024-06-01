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
		scrollBehavior: 'smooth',
	},

	'h1, h2, h3, h4, h5, h6': {
		fontSize: 'inherit',
		fontWeight: 'inherit',
	},

	'input, button, textarea, select': {
		font: 'inherit',
	},

	'ol, ul': {
		listStyle: 'none',
	},

	'img, svg': {
		display: 'block',
		verticalAlign: 'middle',
	},

	img: {
		maxWidth: '100%',
		height: 'auto',
	},
})
