import { keyframes, styled } from '@/styles'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import {
	type ComponentPropsWithoutRef,
	type ElementRef,
	forwardRef,
} from 'react'

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogClose = AlertDialogPrimitive.Cancel

const AlertDialogAction = AlertDialogPrimitive.Action

const overlayShow = keyframes({
	'0%': { opacity: 0 },
	'100%': { opacity: 1 },
})

const contentShow = keyframes({
	'0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
	'100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

const StyledAlertDialogOverlay = styled(AlertDialogPrimitive.Overlay, {
	background: 'rgba(0, 0, 0, 0.4)',
	position: 'fixed',
	inset: 0,
	animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

const AlertDialogOverlay = forwardRef<
	ElementRef<typeof StyledAlertDialogOverlay>,
	ComponentPropsWithoutRef<typeof StyledAlertDialogOverlay>
>(({ ...props }, ref) => {
	return <StyledAlertDialogOverlay ref={ref} {...props} />
})

const StyledAlertDialogContent = styled(AlertDialogPrimitive.Content, {
	background: '$white',
	borderRadius: '$md',
	boxShadow: '0px 8px 12px 0px rgba(27, 27, 27, 0.16)',
	position: 'fixed',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '90vw',
	maxWidth: 774,
	maxHeight: 848,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'stretch',
	animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

	'&:focus': { outline: 'none' },
})

const AlertDialogContent = forwardRef<
	ElementRef<typeof StyledAlertDialogContent>,
	ComponentPropsWithoutRef<typeof StyledAlertDialogContent>
>(({ children, ...props }, ref) => (
	<AlertDialogPortal>
		<AlertDialogOverlay />
		<StyledAlertDialogContent ref={ref} {...props}>
			{children}
		</StyledAlertDialogContent>
	</AlertDialogPortal>
))

const StyledAlertDialogTitle = styled(AlertDialogPrimitive.Title, {
	fontWeight: '$semiBold',
	fontSize: '$2xl',
	letterSpacing: '1.5%',
})

const AlertDialogTitle = forwardRef<
	ElementRef<typeof StyledAlertDialogTitle>,
	ComponentPropsWithoutRef<typeof StyledAlertDialogTitle>
>(({ ...props }, ref) => {
	return <StyledAlertDialogTitle ref={ref} {...props} />
})

const StyledAlertDialogDescription = styled(AlertDialogPrimitive.Description, {
	fontSize: '$md',
})

const AlertDialogDescription = forwardRef<
	ElementRef<typeof StyledAlertDialogDescription>,
	ComponentPropsWithoutRef<typeof StyledAlertDialogDescription>
>(({ ...props }, ref) => {
	return <StyledAlertDialogDescription ref={ref} {...props} />
})

export {
	AlertDialog,
	AlertDialogPortal,
	AlertDialogOverlay,
	AlertDialogClose,
	AlertDialogAction,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogTitle,
	AlertDialogDescription,
}
