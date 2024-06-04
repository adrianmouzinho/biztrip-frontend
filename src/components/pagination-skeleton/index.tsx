import {
	ButtonSkeleton,
	Container,
	Content,
	Flex,
	PageButtonSkeleton,
} from './styles'

export function PaginationSkeleton() {
	return (
		<Container>
			<Content>
				<ButtonSkeleton />

				<Flex css={{ alignItems: 'center', gap: '$4' }}>
					<PageButtonSkeleton />
					<PageButtonSkeleton />
					<PageButtonSkeleton />
				</Flex>

				<ButtonSkeleton />
			</Content>
		</Container>
	)
}
