import { api } from '@/lib/axios'

export interface User {
	name: string
	email: string
	avatar_url: string
}

export interface SignInRequest {
	email: string
	password: string
}

export interface SignInResponse {
	token: {
		type: string
		value: string
	}
	user: User
}

export async function signIn({ email, password }: SignInRequest) {
	const response = await api.post<SignInResponse>('/login', { email, password })

	return response.data
}
