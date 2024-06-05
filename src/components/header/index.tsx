import { useDebounce } from '@uidotdev/usehooks'
import { CirclePlus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Button } from '../_ui/button'
import { Dialog, DialogTrigger } from '../_ui/dialog'
import { SearchInput } from '../_ui/search-input'
import { CreateCredentialModal } from '../create-credential-modal'
import { Container, Content, Flex } from './styles'

export function Header() {
	const [searchParams, setSearchParams] = useSearchParams()
	const name = searchParams.get('name') ?? ''

	const [isCreateCredentialModalOpen, setIsCreateCredentialModalOpen] =
		useState(false)
	const [filter, setFilter] = useState(name)

	const debouncedFilter = useDebounce(filter, 500)

	useEffect(() => {
		setSearchParams((prev) => {
			if (debouncedFilter) {
				prev.set('name', debouncedFilter)
				prev.set('page', '1')
			} else {
				prev.delete('name')
			}

			return prev
		})
	}, [debouncedFilter, setSearchParams])

	return (
		<Container>
			<Content>
				<h2>Credenciais</h2>

				<Flex>
					<SearchInput
						name="search"
						placeholder="Buscar credenciais"
						value={filter}
						onChange={(e) => setFilter(e.target.value)}
					/>

					<Dialog
						open={isCreateCredentialModalOpen}
						onOpenChange={setIsCreateCredentialModalOpen}
					>
						<DialogTrigger asChild>
							<Button
								css={{
									'@media (max-width: 768px)': {
										width: '100%',
									},
								}}
							>
								<CirclePlus />
								Nova credencial
							</Button>
						</DialogTrigger>

						<CreateCredentialModal
							onClose={() => setIsCreateCredentialModalOpen(false)}
						/>
					</Dialog>
				</Flex>
			</Content>
		</Container>
	)
}
