import { Check, X } from 'lucide-react'
import {
	type ComponentPropsWithoutRef,
	type ElementRef,
	forwardRef,
} from 'react'

import { SwitchRoot, SwitchThumb } from './styles'

const Switch = forwardRef<
	ElementRef<typeof SwitchRoot>,
	ComponentPropsWithoutRef<typeof SwitchRoot>
>(({ ...props }, ref) => {
	return (
		<SwitchRoot ref={ref} {...props}>
			<SwitchThumb>{props.checked ? <Check /> : <X />}</SwitchThumb>
		</SwitchRoot>
	)
})

export { Switch }
