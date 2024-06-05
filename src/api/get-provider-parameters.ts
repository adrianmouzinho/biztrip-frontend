import { api } from '@/lib/axios'

export interface GetProviderParametersRequest {
	providerId: string
}

export interface GetProviderParametersResponse {
	data: {
		service_types: 'airway' | 'road' | 'hotel' | 'vehicle'[]
		parameters: {
			uuid: string
			title: string
			description: string
			input_type: string
			required: boolean
		}[]
	}
}

export async function getProviderParameters({
	providerId,
}: GetProviderParametersRequest) {
	const response = await api.get<GetProviderParametersResponse>(
		`/credentials/providers/${providerId}/parameters`,
	)

	return response.data
}
