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
		lineHeight: '$base',
		'-webkit-font-smoothing': 'antialiased',
		scrollBehavior: 'smooth',
	},

	'h1, h2, h3, h4, h5, h6': {
		fontSize: 'inherit',
		fontWeight: 'inherit',
		lineHeight: '$base',
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

	'.toast': {
		padding: '$6',
		boxShadow: 'none',
		color: '$gray600',
		fontSize: '$xs',
		lineHeight: '$base',
		fontWeight: '$medium',

		svg: {
			height: '$4',
			width: '$4',
		},
	},

	'.toast-error': {
		background: '$red100',
		border: '1px solid $red500',

		svg: {
			color: '$red500',
		},
	},

	'.toast-success': {
		background: '$green100',
		border: '1px solid $green500',

		svg: {
			color: '$green500',
		},
	},

	'.toast-warning': {
		background: '$orange100',
		border: '1px solid $orange500',

		svg: {
			color: '$orange500',
		},
	},

	'.toast-info': {
		background: '$blue100',
		border: '1px solid $blue500',

		svg: {
			color: '$blue500',
		},
	},
})
