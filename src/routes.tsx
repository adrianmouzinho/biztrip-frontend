import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { Home } from './pages/home'
import { SignIn } from './pages/sign-in'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <AuthLayout />,
		children: [
			{
				path: '/sign-in',
				element: <SignIn />,
			},
		],
	},
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
		],
	},
])
