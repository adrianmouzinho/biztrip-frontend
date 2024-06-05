import { styled } from '@/styles'
import { Search } from 'lucide-react'
import {
	type ComponentPropsWithoutRef,
	type ElementRef,
	forwardRef,
} from 'react'

const StyledInputContainer = styled('div', {
	height: 48,
	minWidth: 212,
	padding: '0 $4',
	backgroundColor: 'transparent',
	borderRadius: '$md',
	border: '1px solid $gray300',
	display: 'flex',
	alignItems: 'center',
	gap: '$2',
	transition: 'box-shadow 300ms',

	svg: {
		width: '$6',
		height: '$6',
		color: '$gray500',
	},

	'&:hover': {
		borderColor: 'transparent',
		boxShadow: '0 0 0 2px $colors$blue500',
	},

	'&:has(input:focus)': {
		borderColor: 'transparent',
		boxShadow: '0 0 0 4px $colors$gray300',
	},

	'&:has(input:disabled)': {
		opacity: 0.5,
		cursor: 'not-allowed',
	},

	'@media (max-width: 768px)': {
		width: '100%',
	},
})

const StyledInput = styled('input', {
	color: '$gray900',
	fontWeight: 'regular',
	background: 'transparent',
	border: 0,
	width: '100%',

	'&:focus': {
		outline: 0,
	},

	'&:disabled': {
		cursor: 'not-allowed',
	},

	'&::placeholder': {
		color: '$gray600',
	},
})

const SearchInput = forwardRef<
	ElementRef<typeof StyledInput>,
	ComponentPropsWithoutRef<typeof StyledInput>
>(({ type, ...props }, ref) => {
	return (
		<StyledInputContainer>
			<Search />
			<StyledInput {...props} ref={ref} type={type ?? 'search'} />
		</StyledInputContainer>
	)
})

export { SearchInput }
