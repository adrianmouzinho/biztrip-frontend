import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { type ComponentProps, type ElementRef, forwardRef } from 'react'

import { styled } from '@/styles'

const Select = SelectPrimitive.Root

const SelectGroup = styled(SelectPrimitive.Group, {
	display: 'flex',
	flexDirection: 'column',
	gap: '$2',
})

const SelectValue = SelectPrimitive.Value

const SelectIcon = styled(SelectPrimitive.SelectIcon, {
	color: '$gray500',
})

const StyledSelectTrigger = styled(SelectPrimitive.SelectTrigger, {
	all: 'unset5',
	width: '100%',
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	borderRadius: '$md',
	padding: '0 $4',
	fontSize: '$md',
	lineHeight: '$shorter',
	height: 48,
	gap: 5,
	backgroundColor: '$white',
	color: '$gray600',
	border: '1px solid $gray300',
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

	'&[data-placeholder]': { color: '$gray500' },

	'&[data-disabled]': {
		background: '$gray100',
		pointerEvents: 'none',
	},
})

export interface SelectTriggerProps
	extends ComponentProps<typeof StyledSelectTrigger> {}

const SelectTrigger = forwardRef<
	ElementRef<typeof StyledSelectTrigger>,
	SelectTriggerProps
>(({ className, children, ...props }, ref) => {
	return (
		<StyledSelectTrigger ref={ref} {...props}>
			{children}
			<SelectIcon asChild>
				<ChevronDown />
			</SelectIcon>
		</StyledSelectTrigger>
	)
})

const StyledSelectContent = styled(SelectPrimitive.Content, {
	overflow: 'hidden',
	background: '$white',
	borderRadius: '$md',
	boxShadow: '0px 24px 32px 0px rgba(27, 27, 27, 0.16)',
	border: '1px solid $gray300',
})

export interface SelectContentProps
	extends ComponentProps<typeof StyledSelectContent> {}

const SelectContent = forwardRef<
	ElementRef<typeof StyledSelectContent>,
	SelectContentProps
>(({ className, children, ...props }, ref) => (
	<SelectPrimitive.Portal>
		<StyledSelectContent ref={ref} {...props}>
			<SelectScrollUpButton />
			<SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
			<SelectScrollDownButton />
		</StyledSelectContent>
	</SelectPrimitive.Portal>
))

const StyledItem = styled(SelectPrimitive.Item, {
	fontSize: '$sm',
	lineHeight: '$shorter',
	color: '$gray600',
	display: 'flex',
	alignItems: 'center',
	height: 40,
	padding: '0 $4',
	position: 'relative',
	userSelect: 'none',

	'&[data-disabled]': {
		color: '$gray300',
		pointerEvents: 'none',
	},

	'&[data-highlighted]': {
		outline: 'none',
		backgroundColor: '$gray100',
	},
})

const StyledSelectLabel = styled(SelectPrimitive.Label, {
	display: 'flex',
	gap: '$2',
	fontSize: '$xs',
	fontWeight: 'bold',
	lineHeight: '$shorter',
	color: '$gray700',
	textAlign: 'left',

	span: {
		color: '$orange500',
	},
})

export interface SelectLabelProps
	extends ComponentProps<typeof StyledSelectLabel> {
	required?: boolean
}

const SelectLabel = forwardRef<
	ElementRef<typeof StyledSelectLabel>,
	SelectLabelProps
>(({ required = false, ...props }, ref) => {
	return (
		<StyledSelectLabel ref={ref} {...props}>
			{props.children} {required && <span>Obrigatório</span>}
		</StyledSelectLabel>
	)
})

const StyledSelectSeparator = styled(SelectPrimitive.Separator, {
	height: 1,
	backgroundColor: '$gray300',
})

export interface SelectSeparatorProps
	extends ComponentProps<typeof StyledSelectSeparator> {}

const SelectSeparator = forwardRef<
	ElementRef<typeof StyledSelectSeparator>,
	SelectSeparatorProps
>(({ className, ...props }, ref) => {
	return <StyledSelectSeparator ref={ref} {...props} />
})

const scrollButtonStyles = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	height: 24,
	background: '$white',
	color: '$gray500',
	cursor: 'default',
}

const StyledSelectScrollUpButton = styled(
	SelectPrimitive.ScrollUpButton,
	scrollButtonStyles,
)

export interface StyledSelectScrollUpButtonProps
	extends ComponentProps<typeof StyledSelectScrollUpButton> {}

const SelectScrollUpButton = forwardRef<
	ElementRef<typeof StyledSelectScrollUpButton>,
	StyledSelectScrollUpButtonProps
>(({ className, ...props }, ref) => {
	return (
		<StyledSelectScrollUpButton ref={ref} {...props}>
			<ChevronUp />
		</StyledSelectScrollUpButton>
	)
})

const StyledSelectScrollDownButton = styled(
	SelectPrimitive.ScrollDownButton,
	scrollButtonStyles,
)

export interface StyledSelectScrollDownButtonProps
	extends ComponentProps<typeof StyledSelectScrollDownButton> {}

const SelectScrollDownButton = forwardRef<
	ElementRef<typeof StyledSelectScrollDownButton>,
	StyledSelectScrollDownButtonProps
>(({ className, ...props }, ref) => {
	return (
		<StyledSelectScrollDownButton ref={ref} {...props}>
			<ChevronDown />
		</StyledSelectScrollDownButton>
	)
})

export interface StyledItemProps extends ComponentProps<typeof StyledItem> {}

const SelectItem = forwardRef<ElementRef<typeof StyledItem>, StyledItemProps>(
	({ children, ...props }, ref) => {
		return (
			<StyledItem {...props} ref={ref}>
				<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
			</StyledItem>
		)
	},
)

export {
	Select,
	SelectGroup,
	SelectValue,
	SelectTrigger,
	SelectContent,
	SelectLabel,
	SelectItem,
	SelectSeparator,
	SelectScrollUpButton,
	SelectScrollDownButton,
}
