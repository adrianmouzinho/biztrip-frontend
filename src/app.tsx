import { QueryClientProvider } from '@tanstack/react-query'
import { CircleAlert, CircleCheck, Info, TriangleAlert } from 'lucide-react'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { AuthContextProvider } from './contexts/auth'
import { queryClient } from './lib/react-query'
import { router } from './routes'

const toastOptions = {
	classNames: {
		toast: 'toast',
		error: 'toast-error',
		success: 'toast-success',
		warning: 'toast-warning',
		info: 'toast-info',
	},
}

const icons = {
	success: <CircleCheck />,
	info: <Info />,
	warning: <TriangleAlert />,
	error: <CircleAlert />,
}

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthContextProvider>
				<RouterProvider router={router} />
				<Toaster toastOptions={toastOptions} icons={icons} />
			</AuthContextProvider>
		</QueryClientProvider>
	)
}
