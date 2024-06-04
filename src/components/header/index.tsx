// import * as Dialog from '@radix-ui/react-dialog'
import { CirclePlus } from 'lucide-react'
import { useState } from 'react'

import { Button } from '../_ui/button'
import { Dialog, DialogTrigger } from '../_ui/dialog'
import { SearchInput } from '../_ui/search-input'
import { CreateCredentialModal } from '../create-credential-modal'
import { Container, Content, Flex } from './styles'

export function Header() {
	const [isCreateCredentialModalOpen, setIsCreateCredentialModalOpen] =
		useState(false)

	return (
		<Container>
			<Content>
				<h2>Credenciais</h2>

				<Flex css={{ alignItems: 'center', gap: '$4' }}>
					<SearchInput placeholder="Buscar credenciais" />

					<Dialog
						open={isCreateCredentialModalOpen}
						onOpenChange={setIsCreateCredentialModalOpen}
					>
						<DialogTrigger asChild>
							<Button>
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
