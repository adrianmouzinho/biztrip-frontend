import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { CircleAlert, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as yup from 'yup'

import { createCredential } from '@/api/create-credential'
import { getProviderParameters } from '@/api/get-provider-parameters'
import { getProviders } from '@/api/get-providers'
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
import { ErrorMessage, Fieldset, Flex, Form, InputsContainer } from './styles'

const createCredentialSchema = yup.object().shape({
	provider: yup.string().required('O campo fornecedor é obrigatório'),
	name: yup.string().required('O campo nome da credencial é obrigatório'),
	serviceType: yup
		.string()
		.oneOf(['airway', 'road', 'hotel', 'vehicle'])
		.required('O campo tipo de serviço é obrigatório'),
})

type CreateCredentialSchema = yup.InferType<typeof createCredentialSchema>

interface CreateCredentialModalProps {
	onClose: () => void
}

export function CreateCredentialModal({ onClose }: CreateCredentialModalProps) {
	const [selectedProvider, setSelectedProvider] = useState<string | null>(null)

	const formRef = useRef(null)

	const queryClient = useQueryClient()

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<CreateCredentialSchema>({
		resolver: yupResolver(createCredentialSchema),
	})

	const { mutateAsync: createCredentialFn, isPending: isCreatingCredential } =
		useMutation({
			mutationFn: createCredential,
			onSuccess: async () => {
				queryClient.invalidateQueries({
					queryKey: ['credentials'],
				})
			},
		})

	const { data: result, isFetching: isFetchingProviders } = useQuery({
		queryKey: ['providers'],
		queryFn: () => getProviders(),
	})

	const {
		data,
		isFetching: isFetchingProviderParameters,
		refetch,
	} = useQuery({
		queryKey: ['provider-parameters', selectedProvider],
		queryFn: () => getProviderParameters({ providerId: selectedProvider! }),
		enabled: !!selectedProvider,
	})

	async function handleCreateCredential({
		provider,
		name,
		serviceType,
	}: CreateCredentialSchema) {
		const formData = new FormData(formRef.current!)
		let parameters = []

		for (const pair of formData.entries()) {
			parameters.push({
				credential_parameter_uuid: pair[0],
				value: pair[1].toString(),
			})
		}

		parameters = parameters.slice(3)

		await createCredentialFn({
			providerId: provider,
			description: name,
			service_type: serviceType,
			parameters,
		})

		onClose()

		toast.success('Credencial criada com sucesso!')
	}

	useEffect(() => {
		if (selectedProvider) {
			refetch()
		}
	}, [selectedProvider, refetch])

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
				<DialogTitle>Nova credencial</DialogTitle>

				<DialogClose asChild>
					<IconButton aria-label="Close">
						<X />
					</IconButton>
				</DialogClose>
			</Flex>

			<Form ref={formRef} onSubmit={handleSubmit(handleCreateCredential)}>
				<InputsContainer>
					<Controller
						control={control}
						name="provider"
						render={({ field: { name, onChange, value, disabled } }) => {
							return (
								<Select
									name={name}
									onValueChange={(value) => {
										onChange(value)
										setSelectedProvider(value)
									}}
									value={value}
									disabled={disabled}
								>
									<SelectGroup>
										<SelectLabel required>Fornecedor</SelectLabel>
										<SelectTrigger>
											<SelectValue placeholder="Selecione o fornecedor" />
										</SelectTrigger>
										{errors.provider && (
											<ErrorMessage>
												<CircleAlert />
												{errors.provider.message}
											</ErrorMessage>
										)}
									</SelectGroup>

									<SelectContent>
										{result?.map((provider) => (
											<SelectItem key={provider.uuid} value={provider.uuid}>
												{provider.name}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							)
						}}
					/>

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

					{data && (
						<>
							{data.data.parameters.map((parameter) => {
								return (
									<Fieldset key={parameter.uuid}>
										<Label
											htmlFor={parameter.uuid}
											required={parameter.required}
										>
											{parameter.title
												? parameter.title
												: parameter.description}
										</Label>
										<Input
											type={parameter.input_type}
											id={parameter.uuid}
											name={parameter.uuid}
											required={parameter.required}
										/>
									</Fieldset>
								)
							})}
						</>
					)}
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
							isCreatingCredential ||
							isFetchingProviders ||
							isFetchingProviderParameters
						}
					>
						Adicionar
					</Button>
				</Flex>
			</Form>
		</DialogContent>
	)
}
