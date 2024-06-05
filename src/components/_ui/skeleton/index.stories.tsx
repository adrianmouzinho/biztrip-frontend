import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton, type SkeletonProps } from '.'

export default {
	title: 'Components/Skeleton',
	component: Skeleton,
} as Meta<SkeletonProps>

export const Default: StoryObj<SkeletonProps> = {
	args: {
		css: {
			width: '200px',
			height: '48px',
		},
	},
	argTypes: {
		css: {
			table: {
				disable: true,
			},
		},
	},
}
