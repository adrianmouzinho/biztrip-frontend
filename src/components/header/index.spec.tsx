import { render } from '@testing-library/react'
import { Header } from '.'

vi.mock('@uidotdev/usehooks', () => ({
	useDebounce: (value: string) => value,
}))

vi.mock('react-router-dom', () => ({
	useSearchParams: () => [new URLSearchParams(), vi.fn()],
}))

vi.mock('../create-credential-modal', () => ({
	CreateCredentialModal: ({ onClose }: { onClose: () => void }) => (
		// biome-ignore lint: fake modal
		<div onClick={onClose}>Modal</div>
	),
}))

describe('Header', () => {
	it('should render a h2 element with the text "Credenciais"', () => {
		const { getByText } = render(<Header />)

		expect(getByText('Credenciais')).toBeInTheDocument()
	})

	it('should render an input element with the placeholder "Buscar credenciais"', () => {
		const { getByPlaceholderText } = render(<Header />)

		expect(getByPlaceholderText('Buscar credenciais')).toBeInTheDocument()
	})

	it('should render a button element with the text "Nova credencial"', () => {
		const { getByText } = render(<Header />)

		expect(getByText('Nova credencial')).toBeInTheDocument()
	})
})
