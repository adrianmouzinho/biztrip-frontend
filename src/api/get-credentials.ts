import { api } from '@/lib/axios'

export interface GetCredentialsQuery {
	page?: number | null
	name?: string | null
}

export interface GetCredentialsResponse {
	data: {
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
		credential_values: string
	}[]
	links: {
		first: string
		last: string
		prev: string | null
		next: string | null
	}
	meta: {
		current_page: number
		from: number
		last_page: number
		links: {
			url: string | null
			label: string
			active: boolean
		}[]
		path: string
		per_page: number
		to: number
		total: number
	}
}

export async function getCredentials({ page, name }: GetCredentialsQuery) {
	const response = await api.get<GetCredentialsResponse>('/credentials', {
		params: {
			page,
			name,
		},
	})

	return response.data
}
