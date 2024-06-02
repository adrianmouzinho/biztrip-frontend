import { type ReactNode, createContext, useContext, useState } from 'react'

import {
	type SignInRequest,
	type User,
	signIn as authenticate,
} from '@/api/sign-in'
import { api } from '@/lib/axios'

interface AuthContextData {
	signed: boolean
	user: User | null
	signIn: (request: SignInRequest) => Promise<void>
}

interface AuthContextProviderProps {
	children: ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
	const [user, setUser] = useState<User | null>(() => {
		const storageUser = localStorage.getItem('@biztriz:user')
		const storageToken = localStorage.getItem('@biztriz:token')

		if (storageUser && storageToken) {
			const [type, value] = storageToken.split(' ')

			api.defaults.headers.common.Authorization = `${type} ${value}`

			return JSON.parse(storageUser)
		}

		return null
	})

	async function signIn({ email, password }: SignInRequest) {
		const { token, user } = await authenticate({ email, password })

		setUser(user)

		api.defaults.headers.common.Authorization = `${token.type} ${token.value}`

		const userToStorage = JSON.stringify(user)

		localStorage.setItem('@biztriz:user', userToStorage)
		localStorage.setItem('@biztriz:token', `${token.type} ${token.value}`)
	}

	return (
		<AuthContext.Provider value={{ signed: Boolean(user), user, signIn }}>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuth() {
	return useContext(AuthContext)
}
