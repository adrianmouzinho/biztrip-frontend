import { api } from '@/lib/axios'

export interface EditCredentialRequest {
	description: string
	service_type: 'airway' | 'road' | 'hotel' | 'vehicle'
	credentials: {
		uuid: string
		value: string
	}[]
}

export interface EditCredentialResponse {
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

export async function editCredential({
	description,
	service_type,
	credentials,
}: EditCredentialRequest) {
	const response = await api.put<EditCredentialResponse>('/credentials', {
		description,
		service_type,
		credentials,
	})

	return response.data
}
