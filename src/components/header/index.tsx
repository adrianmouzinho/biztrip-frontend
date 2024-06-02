import { PlusCircledIcon } from '@radix-ui/react-icons'

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
						<PlusCircledIcon />
						Nova credencial
					</Button>
				</Actions>
			</Content>
		</Container>
	)
}
