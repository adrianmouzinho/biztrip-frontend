import { Button } from '../_ui/button'
import { Container, Content, Flex, PageButton } from './styles'

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
					{meta.links.slice(1, meta.links.length - 1).map((page) => {
						const isPage = !!Number(page.label)

						if (isPage) {
							return (
								<PageButton
									key={page.label}
									onClick={() => onPageChange(Number(page.label))}
									disabled={meta.links.length === 3}
									active={meta.current_page === Number(page.label)}
								>
									{page.label}
								</PageButton>
							)
						}

						return <span key={page.label}>{page.label}</span>
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
