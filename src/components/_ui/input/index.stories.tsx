import type { Meta, StoryObj } from '@storybook/react'
import { Input, type InputProps } from '.'

export default {
	title: 'Components/Input',
	component: Input,
	args: {
		placeholder: 'Input',
	},
	argTypes: {
		size: {
			control: 'select',
			options: ['sm', 'md'],
		},
		hasError: {
			control: 'boolean',
		},
	},
} as Meta<InputProps>

export const Default: StoryObj<InputProps> = {}

export const Small: StoryObj<InputProps> = {
	args: {
		size: 'sm',
	},
}

export const Medium: StoryObj<InputProps> = {
	args: {
		size: 'md',
	},
}

// biome-ignore lint: variable can be named as Error
export const Error: StoryObj<InputProps> = {
	args: {
		hasError: true,
	},
}
