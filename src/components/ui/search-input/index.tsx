import { Search } from 'lucide-react'
import { type ComponentProps, forwardRef } from 'react'
import { Input, InputContainer } from './styles'

interface SearchInputProps extends ComponentProps<typeof Input> {}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
	({ type, ...props }, ref) => {
		return (
			<InputContainer>
				<Search />
				<Input {...props} ref={ref} type={type ?? 'search'} />
			</InputContainer>
		)
	},
)

export { SearchInput }
