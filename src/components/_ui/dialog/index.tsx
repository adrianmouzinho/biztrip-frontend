import { keyframes, styled } from '@/styles'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { type ComponentProps, type ElementRef, forwardRef } from 'react'

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const overlayShow = keyframes({
	'0%': { opacity: 0 },
	'100%': { opacity: 1 },
})

const contentShow = keyframes({
	'0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
	'100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

const StyledDialogOverlay = styled(DialogPrimitive.Overlay, {
	background: 'rgba(0, 0, 0, 0.4)',
	position: 'fixed',
	inset: 0,
	animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

export interface DialogOverlayProps
	extends ComponentProps<typeof StyledDialogOverlay> {}

const DialogOverlay = forwardRef<
	ElementRef<typeof StyledDialogOverlay>,
	DialogOverlayProps
>(({ ...props }, ref) => {
	return <StyledDialogOverlay ref={ref} {...props} />
})

const StyledDialogContent = styled(DialogPrimitive.Content, {
	background: '$white',
	borderRadius: '$md',
	boxShadow: '0px 8px 12px 0px rgba(27, 27, 27, 0.16)',
	position: 'fixed',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '90vw',
	height: '90vh',
	maxWidth: 1024,
	maxHeight: 848,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'stretch',
	animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

	'&:focus': { outline: 'none' },
})

export interface DialogContentProps
	extends ComponentProps<typeof StyledDialogContent> {}

const DialogContent = forwardRef<
	ElementRef<typeof StyledDialogContent>,
	DialogContentProps
>(({ children, ...props }, ref) => (
	<DialogPortal>
		<DialogOverlay />
		<StyledDialogContent ref={ref} {...props}>
			{children}
		</StyledDialogContent>
	</DialogPortal>
))

const StyledDialogTitle = styled(DialogPrimitive.Title, {
	fontWeight: '$semiBold',
	fontSize: '$2xl',
	letterSpacing: '1.5%',
})

export interface DialogTitleProps
	extends ComponentProps<typeof StyledDialogTitle> {}

const DialogTitle = forwardRef<
	ElementRef<typeof StyledDialogTitle>,
	DialogTitleProps
>(({ ...props }, ref) => {
	return <StyledDialogTitle ref={ref} {...props} />
})

const StyledDialogDescription = styled(DialogPrimitive.Description, {
	fontSize: '$md',
})

export interface DialogDescriptionProps
	extends ComponentProps<typeof StyledDialogDescription> {}

const DialogDescription = forwardRef<
	ElementRef<typeof StyledDialogDescription>,
	DialogDescriptionProps
>(({ ...props }, ref) => {
	return <StyledDialogDescription ref={ref} {...props} />
})

export {
	Dialog,
	DialogPortal,
	DialogOverlay,
	DialogClose,
	DialogTrigger,
	DialogContent,
	DialogTitle,
	DialogDescription,
}
