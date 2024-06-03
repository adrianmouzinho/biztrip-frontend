import { api } from '@/lib/axios'

interface ActivateCredentialRequest {
	credentialId: string
}

export async function activateCredential({
	credentialId,
}: ActivateCredentialRequest) {
	await api.patch(`/credentials/${credentialId}/active`)
}
