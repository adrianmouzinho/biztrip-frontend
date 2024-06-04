import { render } from '@testing-library/react'
import userEvent, { type UserEvent } from '@testing-library/user-event'
import type { Mock } from 'vitest'

import { Pagination } from '.'

let user: UserEvent
let onPageChangeCallback: Mock<[number], void>

describe('Pagination', () => {
	beforeEach(() => {
		user = userEvent.setup()
		onPageChangeCallback = vi.fn()
	})

	it('should be able to navigate to the next page', async () => {
		const mockMeta = {
			current_page: 1,
			from: 1,
			last_page: 2,
			links: [
				{ url: null, label: 'Anterior', active: false },
				{ url: '/?page=1', label: '1', active: true },
				{ url: '/?page=2', label: '2', active: false },
				{ url: '/?page=2', label: 'Próximo', active: false },
			],
			path: '/',
			per_page: 5,
			to: 5,
			total: 6,
		}

		const mockLinks = {
			first: '/?page=1',
			last: '/?page=2',
			prev: null,
			next: '/?page=2',
		}

		const wrapper = render(
			<Pagination
				links={mockLinks}
				meta={mockMeta}
				onPageChange={onPageChangeCallback}
			/>,
		)

		const nextPageButton = wrapper.getByRole('button', {
			name: 'Próximo',
		})

		await user.click(nextPageButton)

		expect(onPageChangeCallback).toHaveBeenCalledWith(2)
	})

	it('should be able to navigate to the previous page', async () => {
		const mockMeta = {
			current_page: 2,
			from: 6,
			last_page: 2,
			links: [
				{ url: '/?page=1', label: 'Anterior', active: false },
				{ url: '/?page=1', label: '1', active: false },
				{ url: '/?page=2', label: '2', active: true },
				{ url: null, label: 'Próximo', active: false },
			],
			path: '/',
			per_page: 5,
			to: 6,
			total: 6,
		}

		const mockLinks = {
			first: '/?page=1',
			last: '/?page=2',
			prev: '/?page=1',
			next: null,
		}

		const wrapper = render(
			<Pagination
				links={mockLinks}
				meta={mockMeta}
				onPageChange={onPageChangeCallback}
			/>,
		)

		const nextPageButton = wrapper.getByRole('button', {
			name: 'Anterior',
		})

		await user.click(nextPageButton)

		expect(onPageChangeCallback).toHaveBeenCalledWith(1)
	})
})
