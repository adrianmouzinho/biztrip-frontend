import { styled } from '@/styles'
import type { Meta, StoryObj } from '@storybook/react'
import { X } from 'lucide-react'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from '.'
import { Button } from '../button'
import { IconButton } from '../icon-button'

const Flex = styled('div', { display: 'flex' })

export default {
	title: 'Components/Dialog',
	component: Dialog,
} as Meta

export const Default: StoryObj = {
	render: () => {
		return (
			<Dialog>
				<DialogTrigger asChild>
					<Button>Open Modal</Button>
				</DialogTrigger>
				<DialogContent>
					<Flex
						css={{
							alignItems: 'center',
							justifyContent: 'space-between',
							padding: '$6',
							borderBottom: '1px solid $gray300',
						}}
					>
						<DialogTitle>Title</DialogTitle>

						<DialogClose asChild>
							<IconButton aria-label="Close">
								<X />
							</IconButton>
						</DialogClose>
					</Flex>

					<Flex css={{ flex: 1 }} />

					<Flex
						css={{
							justifyContent: 'flex-end',
							gap: '$4',
							padding: '$6',
							borderTop: '1px solid $gray300',
						}}
					>
						<DialogClose asChild>
							<Button variant="tertiary">Cancel</Button>
						</DialogClose>
						<Button>Execute</Button>
					</Flex>
				</DialogContent>
			</Dialog>
		)
	},
}
