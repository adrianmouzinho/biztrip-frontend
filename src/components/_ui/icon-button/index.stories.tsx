import type { Meta, StoryObj } from '@storybook/react'
import { X } from 'lucide-react'
import { IconButton, type IconButtonProps } from '.'

export default {
	title: 'Components/IconButton',
	component: IconButton,
	args: {
		children: <X />,
	},
} as Meta<IconButtonProps>

export const Default: StoryObj<IconButtonProps> = {
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
	},
}
