import {
	CheckCircledIcon,
	ExclamationTriangleIcon,
	InfoCircledIcon,
} from '@radix-ui/react-icons'
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
	success: <CheckCircledIcon />,
	info: <InfoCircledIcon />,
	warning: <ExclamationTriangleIcon />,
	error: <ExclamationTriangleIcon />,
}

export function App() {
	return (
		<>
			<RouterProvider router={router} />
			<Toaster toastOptions={toastOptions} icons={icons} />
		</>
	)
}
