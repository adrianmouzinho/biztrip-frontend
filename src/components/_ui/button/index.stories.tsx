import type { Meta, StoryObj } from '@storybook/react'
import { PlusCircle } from 'lucide-react'
import { Button, type ButtonProps } from '.'

export default {
	title: 'Components/Button',
	component: Button,
	args: {
		children: 'Button',
	},
	argTypes: {
		variant: {
			control: 'select',
			options: ['primary', 'secondary', 'tertiary'],
		},
		size: {
			control: 'select',
			options: ['sm', 'md', 'lg'],
		},
		disabled: {
			control: 'boolean',
		},
	},
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

export const Primary: StoryObj<ButtonProps> = {
	args: {
		variant: 'primary',
	},
}

export const Secondary: StoryObj<ButtonProps> = {
	args: {
		variant: 'secondary',
	},
}

export const Tertiary: StoryObj<ButtonProps> = {
	args: {
		variant: 'tertiary',
	},
}

export const WithIcon: StoryObj<ButtonProps> = {
	args: {
		children: (
			<>
				<PlusCircle /> Button With Icon
			</>
		),
	},
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
	},
}
