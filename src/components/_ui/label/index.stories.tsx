import type { Meta, StoryObj } from '@storybook/react'
import { Label, type LabelProps } from '.'

export default {
	title: 'Components/Label',
	component: Label,
	args: {
		children: 'Label',
	},
} as Meta<LabelProps>

export const Default: StoryObj<LabelProps> = {}

export const Required: StoryObj<LabelProps> = {
	args: {
		required: true,
	},
}
