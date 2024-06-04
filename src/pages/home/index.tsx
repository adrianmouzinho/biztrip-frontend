import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { getCredentials } from '@/api/get-credentials'
import { Pagination } from '@/components/pagination'
import { CredentialItem } from './components/credential-item'
import { CredentialsListSkeleton } from './components/credentials-list-skeleton'
import { Container, EmptyItem, List, LoadingPagination } from './styles'

export function Home() {
	const [searchParams, setSearchParams] = useSearchParams()

	const page = z.coerce
		.number()
		.transform((page) => page - 1)
		.parse(searchParams.get('page') ?? '1')

	const { data: result, isFetching: isFetchingCredentials } = useQuery({
		queryKey: ['credentials', page],
		queryFn: () => getCredentials({ page }),
	})

	function handlePaginate(page: number) {
		setSearchParams((prev) => {
			prev.set('page', (page + 1).toString())

			return prev
		})
	}

	return (
		<Container>
			<List>
				{isFetchingCredentials && <CredentialsListSkeleton />}

				{result &&
					result.data.map((credential) => {
						return (
							<CredentialItem
								key={credential.credential_uuid}
								credential={credential}
							/>
						)
					})}

				{result && result.data.length === 0 && (
					<EmptyItem>Nenhuma credencial encontrada</EmptyItem>
				)}
			</List>

			{result ? (
				<Pagination
					links={result.links}
					meta={result.meta}
					onPageChange={handlePaginate}
				/>
			) : (
				<LoadingPagination>Carregando credenciais...</LoadingPagination>
			)}
		</Container>
	)
}
