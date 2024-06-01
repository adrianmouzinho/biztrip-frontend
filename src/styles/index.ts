import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
	styled,
	css,
	globalCss,
	keyframes,
	getCssText,
	theme,
	createTheme,
	config,
} = createStitches({
	themeMap: {
		...defaultThemeMap,
		height: 'space',
		width: 'space',
	},

	theme: {
		colors: {
			white: '#FFF',
			black: '#000',

			gray100: '#F0F2F5',
			gray300: '#C2CCD6',
			gray500: '#668099',
			gray600: '#475A6B',
			gray700: '#3E444D',
			gray900: '#141A1F',

			blue100: '#E0F0FF',
			blue500: '#0064C5',
			blue900: '#003161',

			green100: '#EEF8ED',
			green500: '#377C2F',

			red100: '#FCE8ED',
			red500: '#AE1437',

			orange100: '#F6F4F3',
			orange500: '#C36700',
		},
		fontSizes: {
			xxs: '0.625rem',
			xs: '0.75rem',
			sm: '0.875rem',
			md: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'4xl': '2rem',
			'5xl': '2.25rem',
			'6xl': '3rem',
			'7xl': '4rem',
			'8xl': '4.5rem',
			'9xl': '6rem',
		},
		fontWeights: {
			regular: '400',
			medium: '500',
			semiBold: '600',
			bold: '700',
		},
		fonts: {
			default: 'Inter, sans-serif',
		},
		lineHeights: {
			shorter: '125%',
			short: '140%',
			base: '160%',
			tall: '180%',
		},
		radii: {
			px: '1px',
			xs: '4px',
			sm: '6px',
			md: '8px',
			lg: '16px',
			full: '99999px',
		},
		space: {
			1: '0.25rem',
			2: '0.5rem',
			3: '0.75rem',
			4: '1rem',
			5: '1.25rem',
			6: '1.5rem',
			7: '1.75rem',
			8: '2rem',
			10: '2.5rem',
			12: '3rem',
			16: '4rem',
			20: '5rem',
			40: '10rem',
			64: '16rem',
			80: '20rem',
		},
	},
})
