import { isAxiosError } from 'axios'
import { useLayoutEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

import { Header } from '@/components/header'
import { useAuth } from '@/contexts/auth'
import { api } from '@/lib/axios'
import { Container, Main } from './styles'

export function AppLayout() {
	const { signed } = useAuth()
	const navigate = useNavigate()

	if (!signed) {
		return <Navigate to={'/sign-in'} replace />
	}

	useLayoutEffect(() => {
		const interceptorId = api.interceptors.response.use(
			(response) => response,
			(error) => {
				if (isAxiosError(error)) {
					const status = error.response?.status

					if (status === 401) {
						navigate('/sign-in', {
							replace: true,
						})
					}
				}

				return Promise.reject(error)
			},
		)

		// Clean up the side effect when the component unmounts
		return () => {
			api.interceptors.response.eject(interceptorId)
		}
	}, [navigate])

	return (
		<Container>
			<Header />
			<Main>
				<Outlet />
			</Main>
		</Container>
	)
}
