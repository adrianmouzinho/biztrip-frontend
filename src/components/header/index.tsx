import { Button } from '../ui/button'
import { SearchInput } from '../ui/search-input'
import { Actions, HeaderContainer } from './styles'

import plusIcon from '@/assets/icons/plus.svg'

export function Header() {
	return (
		<HeaderContainer>
			<div>
				<h2>Credenciais</h2>

				<Actions>
					<SearchInput placeholder="Buscar credenciais" />
					<Button>
						<img src={plusIcon} alt="Ícone de plus" />
						Nova credencial
					</Button>
				</Actions>
			</div>
		</HeaderContainer>
	)
}
