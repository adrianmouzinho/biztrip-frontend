import { styled } from '@/styles'
import { Skeleton } from '../_ui/skeleton'

export const Content = styled('div', {
	flex: '1',
	display: 'flex',
	flexDirection: 'column',
	gap: '$4',
})

export const Container = styled('li', {
	height: 92,
	display: 'flex',
	alignItems: 'center',
	gap: '$6',
	padding: '$6',
	background: '$white',
	borderRadius: '$md',
	border: '2px solid $gray300',

	'@media (max-width: 768px)': {
		[`> ${Content}:not(:first-child)`]: {
			display: 'none',
		},
	},
})

export const Header = styled('span', {
	fontSize: '$xs',
	fontWeight: '$medium',
	lineHeight: '$shorter',
	color: '$gray500',
})

export const DataSkeleton = styled(Skeleton, {
	width: '12rem',
	height: '$6',

	'@media (max-width: 768px)': {
		width: '5rem',
	},
})

export const ServiceIconSkeleton = styled(Skeleton, {
	width: '$6',
	height: '$4',
})

export const Actions = styled('div', {
	width: 'fit-content',
	display: 'flex',
	alignItems: 'center',
	gap: '$6',
})

export const ButtonSkeleton = styled(Skeleton, {
	width: '$8',
	height: '$8',
})

export const FormSkeleton = styled(Skeleton, {
	width: '$16',
	height: '$6',
})
