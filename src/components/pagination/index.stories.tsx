import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Pagination, type PaginationProps } from '.'

export default {
	component: Pagination,
	title: 'Pagination UI',
	args: {
		onPageChange: fn(),
	},
} as Meta<PaginationProps>

export const Default: StoryObj<PaginationProps> = {
	args: {
		links: {
			first: 'https://api.example.com?page=1',
			last: 'https://api.example.com?page=3',
			prev: null,
			next: 'https://api.example.com?page=2',
		},
		meta: {
			current_page: 1,
			from: 1,
			last_page: 3,
			links: [
				{
					url: 'https://api.example.com?page=1',
					label: 'Anterior',
					active: true,
				},
				{ url: 'https://api.example.com?page=1', label: '1', active: true },
				{ url: 'https://api.example.com?page=2', label: '2', active: false },
				{ url: 'https://api.example.com?page=3', label: '3', active: false },
				{
					url: 'https://api.example.com?page=3',
					label: 'Próximo',
					active: false,
				},
			],
			path: 'https://api.example.com',
			per_page: 5,
			to: 5,
			total: 12,
		},
	},
}
