import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { isAxiosError } from 'axios'
import { CircleAlert, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import * as yup from 'yup'

import { Button } from '@/components/_ui/button'
import { Input } from '@/components/_ui/input'
import { Label } from '@/components/_ui/label'
import { Loading } from '@/components/_ui/loading'
import { useAuth } from '@/contexts/auth'
import {
	Container,
	ErrorMessage,
	Fieldset,
	Flex,
	Form,
	PasswordContainer,
} from './styles'

const signInSchema = yup.object().shape({
	email: yup
		.string()
		.email('Insira um e-mail válido')
		.required('O campo e-mail é obrigatório'),
	password: yup
		.string()
		.min(8, 'A senha deve ter pelo menos 8 caracteres')
		.required('O campo senha é obrigatório'),
})

type SignInSchema = yup.InferType<typeof signInSchema>

export function SignIn() {
	const [showPassword, setShowPassword] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const { signIn } = useAuth()
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: yupResolver(signInSchema),
	})

	const { mutateAsync: authenticate } = useMutation({
		mutationFn: signIn,
	})

	async function handleAuthenticate({ email, password }: SignInSchema) {
		try {
			await authenticate({ email, password })

			toast.success('Login efetuado com sucesso.')
			setError(null)

			navigate('/', { replace: true })
		} catch (err) {
			if (isAxiosError(err)) {
				if ('message' in err.response?.data) {
					setError(err.response?.data.message)
				}
			}
		}
	}

	return (
		<Container>
			<Flex css={{ flexDirection: 'column', gap: '$6' }}>
				<h2>Acessar a plataforma.</h2>
				<p>Encontre as melhores condições para suas viagens corporativas</p>
			</Flex>

			<Form onSubmit={handleSubmit(handleAuthenticate)}>
				<Fieldset>
					<Label htmlFor="email">E-mail</Label>
					<Input
						type="email"
						id="email"
						placeholder="Seu e-mail"
						autoCapitalize="none"
						autoComplete="email"
						autoCorrect="off"
						{...register('email')}
						size={{ '@initial': 'sm', '@media (min-width: 768px)': 'md' }}
						hasError={!!errors.email}
					/>
					{errors.email && (
						<ErrorMessage>
							<CircleAlert />
							{errors.email.message}
						</ErrorMessage>
					)}
				</Fieldset>

				<Fieldset>
					<Label htmlFor="password">Senha</Label>
					<PasswordContainer>
						<Input
							type={showPassword ? 'text' : 'password'}
							id="password"
							placeholder="Sua senha"
							{...register('password')}
							size={{ '@initial': 'sm', '@media (min-width: 768px)': 'md' }}
							hasError={!!errors.password}
						/>
						{showPassword ? (
							<EyeOff onClick={() => setShowPassword(!showPassword)} />
						) : (
							<Eye onClick={() => setShowPassword(!showPassword)} />
						)}
					</PasswordContainer>
					{errors.password && (
						<ErrorMessage>
							<CircleAlert />
							{errors.password.message}
						</ErrorMessage>
					)}
				</Fieldset>

				{error && (
					<ErrorMessage>
						<CircleAlert />
						{error}
					</ErrorMessage>
				)}

				<Flex css={{ flexDirection: 'column', gap: '$2' }}>
					<Button
						type="submit"
						size={{ '@initial': 'sm', '@media (min-width: 768px)': 'md' }}
						disabled={isSubmitting}
					>
						{isSubmitting && <Loading css={{ color: '$white' }} />} Acessar
					</Button>
					<Button
						as="a"
						variant="tertiary"
						size={{ '@initial': 'sm', '@media (min-width: 768px)': 'md' }}
					>
						Não possuo conta
					</Button>
				</Flex>
			</Form>
		</Container>
	)
}
