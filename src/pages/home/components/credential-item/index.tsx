import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { toast } from 'sonner'

import { activateCredential } from '@/api/activate-credential'
import type { GetCredentialsResponse } from '@/api/get-credentials'
import { inactivateCredential } from '@/api/inactivate-credential'
import { IconButton } from '@/components/_ui/icon-button'
import { Label } from '@/components/_ui/label'
import { Switch } from '@/components/_ui/switch'
import { ServiceIcon } from '@/components/service-icon'
import { Actions, Container, Content, Data, Header } from './styles'

import pencilIcon from '@/assets/icons/pencil.svg'
import { Dialog, DialogTrigger } from '@/components/_ui/dialog'
import { EditCredentialForm } from '@/components/edit-credential-form'

interface CredentialItemProps {
	credential: {
		credential_uuid: string
		description: string
		service_type: 'airway' | 'road' | 'hotel' | 'vehicle'
		provider: {
			uuid: string
			name: string
		}
		active: boolean
		credential_values: string
	}
}

export function CredentialItem({ credential }: CredentialItemProps) {
	const [isEditCredentialFormOpen, setEditIsCredentialFormOpen] =
		useState(false)
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

		if (status === true) {
			toast.success('Credencial ativada com sucesso!')
		} else {
			toast.success('Credencial inativada com sucesso!')
		}
	}

	const { mutateAsync: activateCredentialFn } = useMutation({
		mutationFn: activateCredential,
		onSuccess: async (_, { credentialId }) => {
			updateCredentialStatusOnCache(credentialId, true)
		},
	})

	const { mutateAsync: inactivateCredentialFn } = useMutation({
		mutationFn: inactivateCredential,
		onSuccess: async (_, { credentialId }) => {
			updateCredentialStatusOnCache(credentialId, false)
		},
	})

	function handleSwitchChange(isChecked: boolean) {
		setIsCredentialActive(isChecked)
		if (isChecked) {
			activateCredentialFn({ credentialId: credential.credential_uuid })
		} else {
			inactivateCredentialFn({ credentialId: credential.credential_uuid })
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
				<Dialog
					open={isEditCredentialFormOpen}
					onOpenChange={setEditIsCredentialFormOpen}
				>
					<DialogTrigger asChild>
						<IconButton>
							<img src={pencilIcon} alt="Ícone de editar" />
						</IconButton>
					</DialogTrigger>

					<EditCredentialForm
						credentialId={credential.credential_uuid}
						onClose={() => setEditIsCredentialFormOpen(false)}
						isOpen={isEditCredentialFormOpen}
					/>
				</Dialog>

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
