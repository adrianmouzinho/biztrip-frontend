import { api } from '@/lib/axios'

export interface GetCredentialDetailsRequest {
	credentialId: string
}

export interface GetCredentialDetailsResponse {
	credential_uuid: string
	description: string
	service_type: 'airway' | 'road' | 'hotel' | 'vehicle'
	provider: {
		uuid: string
		name: string
		service_type: string
		active: boolean
	}
	active: boolean
	credential_values: {
		uuid: string
		name: string
		value: string
		parameter: {
			uuid: string
			title: string
			input_type: string
			description: string
			required: boolean
		}
	}[]
}

export async function getCredentialDetails({
	credentialId,
}: GetCredentialDetailsRequest) {
	const response = await api.get<GetCredentialDetailsResponse>(
		`/credentials/${credentialId}`,
	)

	return response.data
}
