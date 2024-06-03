import { styled } from '@/styles'

export const Label = styled('label', {
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
