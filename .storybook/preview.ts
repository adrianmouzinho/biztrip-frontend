import type { Preview } from '@storybook/react'
import { globalStyles } from '../src/styles/global'

globalStyles()

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
}

export default preview
