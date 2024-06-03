import { api } from '@/lib/axios'

export type GetProvidersResponse = {
	uuid: string
	name: string
	slug: string
	logo: string
	service_type: string
	active: boolean
	provider_services: {
		uuid: string
		provider_uuid: string
		service_type: string
		orders_online: number
	}[]
}[]

export async function getProviders() {
	const response = await api.get<GetProvidersResponse>('/providers')

	return response.data
}
