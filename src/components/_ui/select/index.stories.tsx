import type { Meta, StoryObj } from '@storybook/react'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	type SelectLabelProps,
	SelectTrigger,
	type SelectTriggerProps,
	SelectValue,
} from '.'

export default {
	title: 'Components/Select',
	component: Select,
	args: {
		required: false,
		disabled: false,
	},
	argTypes: {
		disabled: {
			control: 'boolean',
		},
		required: {
			control: 'boolean',
		},
	},
} as Meta<SelectLabelProps & SelectTriggerProps>

export const Default: StoryObj<SelectLabelProps & SelectTriggerProps> = {
	render: (args) => (
		<Select>
			<SelectGroup>
				<SelectLabel required={args.required}>Select Label</SelectLabel>
				<SelectTrigger disabled={args.disabled}>
					<SelectValue placeholder="Select Placeholder" />
				</SelectTrigger>
			</SelectGroup>

			<SelectContent>
				<SelectItem value="option1">Option 1</SelectItem>
				<SelectItem value="option2">Option 2</SelectItem>
				<SelectItem value="option3">Option 3</SelectItem>
				<SelectItem value="option4">Option 4</SelectItem>
			</SelectContent>
		</Select>
	),
}

export const Required: StoryObj<SelectLabelProps & SelectTriggerProps> = {
	render: (args) => (
		<Select>
			<SelectGroup>
				<SelectLabel required={args.required}>Select Label</SelectLabel>
				<SelectTrigger disabled={args.disabled}>
					<SelectValue placeholder="Select Placeholder" />
				</SelectTrigger>
			</SelectGroup>

			<SelectContent>
				<SelectItem value="option1">Option 1</SelectItem>
				<SelectItem value="option2">Option 2</SelectItem>
				<SelectItem value="option3">Option 3</SelectItem>
				<SelectItem value="option4">Option 4</SelectItem>
			</SelectContent>
		</Select>
	),
	args: {
		required: true,
	},
	argTypes: {
		required: {
			table: {
				disable: true,
			},
		},
	},
}

export const Disabled: StoryObj<SelectLabelProps & SelectTriggerProps> = {
	render: (args) => (
		<Select>
			<SelectGroup>
				<SelectLabel required={args.required}>Select Label</SelectLabel>
				<SelectTrigger disabled={args.disabled}>
					<SelectValue placeholder="Select Placeholder" />
				</SelectTrigger>
			</SelectGroup>

			<SelectContent>
				<SelectItem value="option1">Option 1</SelectItem>
				<SelectItem value="option2">Option 2</SelectItem>
				<SelectItem value="option3">Option 3</SelectItem>
				<SelectItem value="option4">Option 4</SelectItem>
			</SelectContent>
		</Select>
	),
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
