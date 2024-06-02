import { CircleAlert, CircleCheck, Info, TriangleAlert } from 'lucide-react'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

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
		<>
			<RouterProvider router={router} />
			<Toaster toastOptions={toastOptions} icons={icons} />
		</>
	)
}
