import { api } from '@/lib/axios'

interface InactivateCredentialRequest {
	credentialId: string
}

export async function inactivateCredential({
	credentialId,
}: InactivateCredentialRequest) {
	await api.patch(`/credentials/${credentialId}/inactive`)
}
