import { styled } from '@/styles'
import {
	type ComponentPropsWithoutRef,
	type ElementRef,
	forwardRef,
} from 'react'

const StyledInput = styled('input', {
	height: 64,
	width: '100%',
	padding: '0 $6',
	background: '$white',
	borderRadius: '$md',
	border: '1px solid $gray300',
	color: '$gray900',
	transition: 'box-shadow 300ms',

	'&:hover': {
		borderColor: 'transparent',
		boxShadow: '0 0 0 2px $colors$blue500',
	},

	'&:focus': {
		outline: 0,
		borderColor: 'transparent',
		boxShadow: '0 0 0 4px $colors$gray300',
	},

	'&:disabled': {
		opacity: 0.5,
		cursor: 'not-allowed',
	},

	'&::placeholder': {
		color: '$gray500',
	},

	variants: {
		hasError: {
			true: {
				border: '2px solid $red400',
				background: '$red100',

				'&::placeholder': {
					color: '$gray600',
				},
			},
		},
	},
})

const Input = forwardRef<
	ElementRef<typeof StyledInput>,
	ComponentPropsWithoutRef<typeof StyledInput>
>(({ type, ...props }, ref) => {
	return <StyledInput {...props} ref={ref} type={type ?? 'text'} />
})

export { Input }
