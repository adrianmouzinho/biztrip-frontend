import type { Meta, StoryObj } from '@storybook/react'
import { Switch, type SwitchProps } from '.'

export default {
	title: 'Components/Switch',
	component: Switch,
	args: {
		checked: false,
		disabled: false,
	},
	argTypes: {
		checked: {
			control: 'boolean',
		},
		disabled: {
			control: 'boolean',
		},
	},
} as Meta<SwitchProps>

export const Checked: StoryObj<SwitchProps> = {
	args: {
		checked: true,
	},
	argTypes: {
		checked: {
			table: {
				disable: true,
			},
		},
	},
}

export const Unchecked: StoryObj<SwitchProps> = {
	args: {
		checked: false,
	},
	argTypes: {
		checked: {
			table: {
				disable: true,
			},
		},
	},
}

export const Disabled: StoryObj<SwitchProps> = {
	args: {
		disabled: true,
	},
	argTypes: {
		disabled: {
			table: {
				disable: true,
			},
		},
	},
}
