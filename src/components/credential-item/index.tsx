import { useState } from 'react'

import { ServiceIcon } from '../service-icon'
import { IconButton } from '../ui/icon-button'
import { Label } from '../ui/label'
import { Switch } from '../ui/switch'
import { Actions, Container, Content, Data, Header } from './styles'

import pencilIcon from '@/assets/icons/pencil.svg'

type ServiceType = 'airway' | 'road' | 'hotel' | 'vehicle'

interface CredentialItemProps {
	credential: {
		credential_uuid: string
		description: string
		service_type: ServiceType
		provider: {
			uuid: string
			name: string
		}
		active: boolean
		credential_values: string
	}
}

export function CredentialItem({ credential }: CredentialItemProps) {
	const [isCredentialActive, setIsCredentialActive] = useState(
		credential.active,
	)

	return (
		<Container>
			<Content>
				<Header>Nome</Header>
				<Data>{credential.description}</Data>
			</Content>

			<Content>
				<Header>Fornecedor</Header>
				<Data>{credential.provider.name}</Data>
			</Content>

			<Content>
				<Header>Serviço</Header>
				<ServiceIcon type={credential.service_type} />
			</Content>

			<Actions>
				<IconButton>
					<img src={pencilIcon} alt="Ícone de editar" />
				</IconButton>
				<form>
					<Switch
						id="is-credential-active"
						checked={isCredentialActive}
						onCheckedChange={setIsCredentialActive}
					/>
					<Label htmlFor="is-credential-active">
						{isCredentialActive ? 'Ativo' : 'Inativo'}
					</Label>
				</form>
			</Actions>
		</Container>
	)
}
