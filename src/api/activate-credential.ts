import { api } from '@/lib/axios'

export interface ActivateCredentialRequest {
	credentialId: string
}

export async function activateCredential({
	credentialId,
}: ActivateCredentialRequest) {
	await api.patch(`/credentials/${credentialId}/active`)
}
