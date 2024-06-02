import { CirclePlus } from 'lucide-react'

import { Button } from '../ui/button'
import { SearchInput } from '../ui/search-input'
import { Actions, Container, Content } from './styles'

export function Header() {
	return (
		<Container>
			<Content>
				<h2>Credenciais</h2>

				<Actions>
					<SearchInput placeholder="Buscar credenciais" />
					<Button>
						<CirclePlus />
						Nova credencial
					</Button>
				</Actions>
			</Content>
		</Container>
	)
}
