// import * as Dialog from '@radix-ui/react-dialog'
import { CirclePlus } from 'lucide-react'

import { Button } from '../_ui/button'
import { Dialog, DialogTrigger } from '../_ui/dialog'
import { SearchInput } from '../_ui/search-input'
import { CreateCredentialForm } from '../create-credential-form'
import { Container, Content, Flex } from './styles'

export function Header() {
	return (
		<Container>
			<Content>
				<h2>Credenciais</h2>

				<Flex css={{ alignItems: 'center', gap: '$4' }}>
					<SearchInput placeholder="Buscar credenciais" />

					<Dialog>
						<DialogTrigger asChild>
							<Button>
								<CirclePlus />
								Nova credencial
							</Button>
						</DialogTrigger>

						<CreateCredentialForm />
					</Dialog>
				</Flex>
			</Content>
		</Container>
	)
}
