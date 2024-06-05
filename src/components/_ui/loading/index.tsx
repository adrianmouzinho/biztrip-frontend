import { keyframes, styled } from '@/styles'
import { LoaderCircle } from 'lucide-react'
import {
	type ComponentPropsWithoutRef,
	type ElementRef,
	forwardRef,
} from 'react'

const spin = keyframes({
	'0%': { transform: 'rotate(0deg)' },
	'100%': { transform: 'rotate(360deg)' },
})

const Spinner = styled(LoaderCircle, {
	animation: `${spin} 1s linear infinite`,
	size: '$6',
	color: '$white',
})

const Loading = forwardRef<
	ElementRef<typeof Spinner>,
	ComponentPropsWithoutRef<typeof Spinner>
>(({ ...props }, ref) => {
	return <Spinner ref={ref} {...props} />
})

export { Loading }
