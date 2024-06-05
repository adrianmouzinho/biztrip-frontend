import { api } from '@/lib/axios'

export interface InactivateCredentialRequest {
	credentialId: string
}

export async function inactivateCredential({
	credentialId,
}: InactivateCredentialRequest) {
	await api.patch(`/credentials/${credentialId}/inactive`)
}
