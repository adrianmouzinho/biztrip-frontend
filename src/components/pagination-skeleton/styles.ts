import { styled } from '@/styles'
import { Skeleton } from '../_ui/skeleton'

export const Container = styled('div', {
	position: 'fixed',
	bottom: 0,
	left: 0,
	right: 0,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	background: '$white',
	borderTop: '1px solid $gray300',
})

export const Content = styled('div', {
	width: '100%',
	maxWidth: 1904,
	margin: '0 auto',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: '$4 $6',
})

export const Flex = styled('div', { display: 'flex' })

export const ButtonSkeleton = styled(Skeleton, {
	width: '6rem',
	height: '3rem',
})

export const PageButtonSkeleton = styled(Skeleton, {
	width: '2.75rem',
	height: '2.75rem',
})
