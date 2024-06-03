import { api } from '@/lib/axios'

// export interface GetCredentialsQuery {
// 	pageIndex?: number | null
// }

export interface GetCredentialsResponse {
	data: {
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
	}[]
	links: {
		first: string | null
		last: string | null
		prev: string | null
		next: string | null
	}
	meta: {
		current_page: number
		from: number | null
		last_page: number
		links: {
			url: string | null
			label: string
			active: boolean
		}[]
		path: string
		per_page: number
		to: number | null
		total: number
	}
}

export async function getCredentials() {
	const response = await api.get<GetCredentialsResponse>('/credentials', {
		params: {},
	})

	return response.data
}
