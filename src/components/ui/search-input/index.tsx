import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { type ComponentProps, forwardRef } from 'react'
import { Input, InputContainer } from './styles'

interface SearchInputProps extends ComponentProps<typeof Input> {}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
	({ type, ...props }, ref) => {
		return (
			<InputContainer>
				<MagnifyingGlassIcon />
				<Input {...props} ref={ref} type={type ?? 'text'} />
			</InputContainer>
		)
	},
)

export { SearchInput }
