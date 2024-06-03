import type { SwitchProps } from '@radix-ui/react-switch'
import { Check, X } from 'lucide-react'

import { SwitchRoot, SwitchThumb } from './styles'

export function Switch({ ...props }: SwitchProps) {
	return (
		<SwitchRoot {...props}>
			<SwitchThumb>{props.checked ? <Check /> : <X />}</SwitchThumb>
		</SwitchRoot>
	)
}
