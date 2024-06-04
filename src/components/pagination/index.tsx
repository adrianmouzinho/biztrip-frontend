import { Button } from '../_ui/button'
import { Container, Content, Flex, PaginationButton } from './styles'

interface PaginationProps {
	onPageChange: (pageIndex: number) => Promise<void> | void
	links: {
		first: string
		last: string
		prev: string | null
		next: string | null
	}
	meta: {
		current_page: number
		from: number
		last_page: number
		links: {
			url: string | null
			label: string
			active: boolean
		}[]
		path: string
		per_page: number
		to: number
		total: number
	}
}

export function Pagination({ links, meta, onPageChange }: PaginationProps) {
	function getPageNumbers() {
		const pages = []
		const { current_page, last_page } = meta

		if (last_page <= 6) {
			for (let i = 1; i <= last_page; i++) {
				pages.push(i)
			}
		} else {
			if (current_page <= 3) {
				pages.push(1, 2, 3, '...', last_page - 1, last_page)
			} else if (current_page > last_page - 3) {
				pages.push(1, 2, '...', last_page - 2, last_page - 1, last_page)
			} else {
				pages.push(
					1,
					'...',
					current_page - 1,
					current_page,
					current_page + 1,
					'...',
					last_page,
				)
			}
		}

		return pages
	}

	return (
		<Container>
			<Content>
				<Button
					variant="tertiary"
					onClick={() => onPageChange(meta.current_page - 1)}
					disabled={links.prev === null}
				>
					Anterior
				</Button>

				<Flex css={{ alignItems: 'center', gap: '$4' }}>
					{getPageNumbers().map((page) => {
						if (typeof page === 'number') {
							return (
								<PaginationButton
									key={page}
									onClick={() => onPageChange(page)}
									disabled={meta.current_page === page}
								>
									{page}
								</PaginationButton>
							)
						}

						return <span key={page}>{page}</span>
					})}
				</Flex>

				<Button
					variant="tertiary"
					onClick={() => onPageChange(meta.current_page + 1)}
					disabled={links.next === null}
				>
					Próximo
				</Button>
			</Content>
		</Container>
	)
}
