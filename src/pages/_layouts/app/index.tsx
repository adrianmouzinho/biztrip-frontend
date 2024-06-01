import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'
import { Container, Main } from './styles'

export function AppLayout() {
	return (
		<Container>
			<Header />
			<Main>
				<Outlet />
			</Main>
		</Container>
	)
}
