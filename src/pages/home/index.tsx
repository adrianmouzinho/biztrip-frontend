import { useQuery } from '@tanstack/react-query'

import { getCredentials } from '@/api/get-credentials'
import { CredentialItem } from '@/components/credential-item'
import { CredentialsListSkeleton } from '@/components/credentials-list-skeleton'
import { EmptyItem, List } from './styles'

export function Home() {
	const { data: result, isFetching: isFetchingCredentials } = useQuery({
		queryKey: ['credentials'],
		queryFn: () => getCredentials(),
	})

	return (
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
	)
}
