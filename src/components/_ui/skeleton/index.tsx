import { keyframes, styled } from '@/styles'
import type { ComponentProps } from 'react'

const pulse = keyframes({
	'0%': { opacity: 0.1 },
	'50%': { opacity: 0.2 },
	'100%': { opacity: 0.1 },
})

const StyledSkeleton = styled('div', {
	borderRadius: '$md',
	background: '$gray600',
	opacity: 0.1,
	animation: `${pulse} 1.5s ease-in-out infinite`,
})

export interface SkeletonProps extends ComponentProps<typeof StyledSkeleton> {}

const Skeleton = (props: SkeletonProps) => {
	return <StyledSkeleton {...props} />
}

export { Skeleton }
