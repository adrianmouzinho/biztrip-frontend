import type { Meta, StoryObj } from '@storybook/react'
import { SearchInput, type SearchInputProps } from '.'

export default {
	title: 'Components/SearchInput',
	component: SearchInput,
	args: {
		placeholder: 'Search Input',
	},
} as Meta<SearchInputProps>

export const Default: StoryObj<SearchInputProps> = {}
