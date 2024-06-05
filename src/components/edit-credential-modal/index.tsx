import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { CircleAlert, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as yup from 'yup'

import { editCredential } from '@/api/edit-credential'
import { getCredentialDetails } from '@/api/get-credential-details'
import { Button } from '../_ui/button'
import { DialogClose, DialogContent, DialogTitle } from '../_ui/dialog'
import { IconButton } from '../_ui/icon-button'
import { Input } from '../_ui/input'
import { Label } from '../_ui/label'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '../_ui/select'
import {
	ErrorMessage,
	Fieldset,
	Flex,
	Form,
	InputsContainer,
	Loading,
} from './styles'

const editCredentialSchema = yup.object().shape({
	name: yup.string().required('O campo nome da credencial é obrigatório'),
	serviceType: yup
		.string()
		.oneOf(['airway', 'road', 'hotel', 'vehicle'])
		.required('O campo tipo de serviço é obrigatório'),
})

type EditCredentialSchema = yup.InferType<typeof editCredentialSchema>

interface EditCredentialModalProps {
	credentialId: string
	isOpen: boolean
	onClose: () => void
}

export function EditCredentialModal({
	credentialId,
	isOpen,
	onClose,
}: EditCredentialModalProps) {
	const formRef = useRef(null)

	const queryClient = useQueryClient()

	const {
		register,
		handleSubmit,
		control,
		setValue,
		formState: { errors },
	} = useForm<EditCredentialSchema>({
		resolver: yupResolver(editCredentialSchema),
	})

	const { mutateAsync: editCredentialFn, isPending: isEditingCredential } =
		useMutation({
			mutationFn: editCredential,
			onSuccess: async () => {
				queryClient.invalidateQueries({
					queryKey: ['credentials'],
				})

				queryClient.invalidateQueries({
					queryKey: ['credential'],
				})
			},
		})

	const {
		data: credential,
		isLoading: isLoadingCredential,
		isFetching: isFetchingCredential,
	} = useQuery({
		queryKey: ['credential', credentialId],
		queryFn: () => getCredentialDetails({ credentialId }),
		staleTime: 1000 * 60 * 15, // 15 minutes
		enabled: isOpen,
	})

	useEffect(() => {
		if (credential) {
			setValue('name', credential.description)
			setValue('serviceType', credential.service_type)
		}
	}, [credential, setValue])

	async function handleEditCredential({
		name,
		serviceType,
	}: EditCredentialSchema) {
		const formData = new FormData(formRef.current!)
		let parameters = []

		for (const pair of formData.entries()) {
			parameters.push({
				uuid: pair[0],
				value: pair[1].toString(),
			})
		}

		parameters = parameters.slice(2)

		await editCredentialFn({
			description: name,
			service_type: serviceType,
			credentials: parameters,
		})

		onClose()

		toast.success('Credencial editada com sucesso!')
	}

	return (
		<DialogContent>
			<Flex
				css={{
					alignItems: 'center',
					justifyContent: 'space-between',
					padding: '$6',
					borderBottom: '1px solid $gray300',
				}}
			>
				<DialogTitle>Editar credencial</DialogTitle>

				<DialogClose asChild>
					<IconButton aria-label="Close">
						<X />
					</IconButton>
				</DialogClose>
			</Flex>

			<Form ref={formRef} onSubmit={handleSubmit(handleEditCredential)}>
				{isLoadingCredential && (
					<Loading>Carregando dados da credencial...</Loading>
				)}

				{credential && (
					<>
						<InputsContainer>
							<Select defaultValue={credential.provider.uuid} disabled>
								<SelectGroup>
									<SelectLabel required>Fornecedor</SelectLabel>
									<SelectTrigger>
										<SelectValue placeholder="Selecione o fornecedor" />
									</SelectTrigger>
								</SelectGroup>

								<SelectContent>
									<SelectItem value={credential.provider.uuid}>
										{credential.provider.name}
									</SelectItem>
								</SelectContent>
							</Select>

							<Fieldset>
								<Label htmlFor="name" required>
									Nome da credencial
								</Label>
								<Input id="name" {...register('name')} />
								{errors.name && (
									<ErrorMessage>
										<CircleAlert />
										{errors.name.message}
									</ErrorMessage>
								)}
							</Fieldset>

							<Controller
								control={control}
								name="serviceType"
								render={({ field: { name, onChange, value, disabled } }) => {
									return (
										<Select
											name={name}
											onValueChange={onChange}
											value={value}
											disabled={disabled}
										>
											<SelectGroup>
												<SelectLabel required>Tipo de serviço</SelectLabel>
												<SelectTrigger>
													<SelectValue placeholder="Selecione o tipo de serviço" />
												</SelectTrigger>
												{errors.serviceType && (
													<ErrorMessage>
														<CircleAlert />
														{errors.serviceType.message}
													</ErrorMessage>
												)}
											</SelectGroup>

											<SelectContent>
												<SelectItem value="airway">Aéreo</SelectItem>
												<SelectItem value="road">Rodoviário</SelectItem>
												<SelectItem value="hotel">Hotéis</SelectItem>
												<SelectItem value="vehicle">Carros</SelectItem>
											</SelectContent>
										</Select>
									)
								}}
							/>

							{credential.credential_values.map((credentialValue) => {
								return (
									<Fieldset key={credentialValue.uuid}>
										<Label
											htmlFor={credentialValue.uuid}
											required={credentialValue.parameter.required}
										>
											{credentialValue.parameter.title
												? credentialValue.parameter.title
												: credentialValue.parameter.description}
										</Label>
										<Input
											type={credentialValue.parameter.input_type}
											id={credentialValue.uuid}
											defaultValue={credentialValue.value}
											name={credentialValue.uuid}
											required={credentialValue.parameter.required}
										/>
									</Fieldset>
								)
							})}
						</InputsContainer>

						<Flex
							css={{
								justifyContent: 'flex-end',
								gap: '$4',
								padding: '$6',
								borderTop: '1px solid $gray300',
							}}
						>
							<DialogClose asChild>
								<Button variant="tertiary">Cancelar</Button>
							</DialogClose>
							<Button
								type="submit"
								disabled={
									isEditingCredential ||
									isFetchingCredential ||
									isLoadingCredential
								}
							>
								Editar
							</Button>
						</Flex>
					</>
				)}
			</Form>
		</DialogContent>
	)
}
