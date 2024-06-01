import { Button } from '../ui/button'
import { SearchInput } from '../ui/search-input'
import { HeaderContainer } from './styles'

import plusIcon from '../../assets/icons/plus.svg'

export function Header() {
	return (
		<HeaderContainer>
			<h2>Credenciais</h2>

			<div>
				<SearchInput placeholder="Buscar credenciais" />
				<Button>
					<img src={plusIcon} alt="Ícone de plus" />
					Nova credencial
				</Button>
			</div>
		</HeaderContainer>
	)
}
