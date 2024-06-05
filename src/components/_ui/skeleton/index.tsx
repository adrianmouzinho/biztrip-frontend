import { styled } from '@/styles'

const Skeleton = styled('div', {
	borderRadius: '$md',
	background: '$gray600',
	opacity: 0.1,
	animationName: 'pulse',
	animationDuration: '1.5s',
	animationTimingFunction: 'ease-in-out',
	animationIterationCount: 'infinite',
	'@keyframes pulse': {
		'0%': { opacity: 0.1 },
		'50%': { opacity: 0.3 },
		'100%': { opacity: 0.1 },
	},
})

export { Skeleton }
