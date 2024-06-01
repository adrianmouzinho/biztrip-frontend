import { type ComponentProps, forwardRef } from 'react'
import { Input, InputContainer } from './styles'

import searchIcon from '@/assets/icons/search.svg'

interface SearchInputProps extends ComponentProps<typeof Input> {}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
	({ type, ...props }, ref) => {
		return (
			<InputContainer>
				<img src={searchIcon} alt="Ícone de plus" />
				<Input {...props} ref={ref} type={type ?? 'text'} />
			</InputContainer>
		)
	},
)

export { SearchInput }
