import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { Home } from './pages/home'
import { SignIn } from './pages/sign-in'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
		],
	},
	{
		path: '/sign-in',
		element: <AuthLayout />,
		children: [
			{
				index: true,
				element: <SignIn />,
			},
		],
	},
])
