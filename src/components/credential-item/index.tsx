import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { toast } from 'sonner'

import { activateCredential } from '@/api/activate-credential'
import type { GetCredentialsResponse } from '@/api/get-credentials'
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
	const queryClient = useQueryClient()

	function updateCredentialStatusOnCache(
		credentialId: string,
		status: boolean,
	) {
		const credentialsListingCache =
			queryClient.getQueriesData<GetCredentialsResponse>({
				queryKey: ['credentials'],
			})

		for (const [cacheKey, cached] of credentialsListingCache) {
			if (!cached) {
				continue
			}

			queryClient.setQueryData<GetCredentialsResponse>(cacheKey, {
				...cached,
				data: cached.data.map((credential) => {
					if (credential.credential_uuid !== credentialId) {
						return credential
					}

					return {
						...credential,
						active: status,
					}
				}),
			})
		}

		toast.success('Credencial ativada com sucesso!')
	}

	const { mutateAsync: activateCredentialFn } = useMutation({
		mutationFn: activateCredential,
		onSuccess: async (_, { credentialId }) => {
			updateCredentialStatusOnCache(credentialId, true)
		},
	})

	function handleSwitchChange(isChecked: boolean) {
		setIsCredentialActive(isChecked)
		if (isChecked) {
			activateCredentialFn({ credentialId: credential.credential_uuid })
		} else {
			console.log('Lógica quando o switch não está marcado')
		}
	}

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
						onCheckedChange={handleSwitchChange}
					/>
					<Label htmlFor="is-credential-active">
						{isCredentialActive ? 'Ativo' : 'Inativo'}
					</Label>
				</form>
			</Actions>
		</Container>
	)
}
