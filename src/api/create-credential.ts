import { api } from '@/lib/axios'

interface CreateCredentialRequest {
	providerId: string
	description: string
	service_type: 'airway' | 'road' | 'hotel' | 'vehicle'
	parameters: {
		credential_parameter_uuid: string
		value: string
	}[]
}

interface CreateCredentialResponse {
	credential_uuid: string
	description: string
	service_type: 'airway' | 'road' | 'hotel' | 'vehicle'
	provider: {
		uuid: string
		name: string
		slug: string
		logo: string
		description: string
		service_type: string
		active: boolean
	}
	active: boolean
	credential_values: string
}

export async function createCredential({
	providerId,
	description,
	service_type,
	parameters,
}: CreateCredentialRequest) {
	const response = await api.post<CreateCredentialResponse>(
		`/credentials/providers/${providerId}`,
		{
			description,
			service_type,
			parameters,
		},
	)

	return response.data
}
