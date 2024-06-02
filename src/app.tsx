import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { router } from './routes'

import errorIcon from '@/assets/icons/error.svg'
import infoIcon from '@/assets/icons/info.svg'
import successIcon from '@/assets/icons/success.svg'
import warningIcon from '@/assets/icons/warning.svg'

export function App() {
	return (
		<>
			<RouterProvider router={router} />
			<Toaster
				toastOptions={{
					classNames: {
						toast: 'toast',
						error: 'toast-error',
						success: 'toast-success',
						warning: 'toast-warning',
						info: 'toast-info',
					},
				}}
				icons={{
					success: <img src={successIcon} alt="" />,
					info: <img src={infoIcon} alt="" />,
					warning: <img src={warningIcon} alt="" />,
					error: <img src={errorIcon} alt="" />,
				}}
			/>
		</>
	)
}
