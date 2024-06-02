import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as yup from 'yup'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ErrorMessage, Form, InputsContainer } from './styles'

import alertIcon from '@/assets/icons/alert.svg'
import logoImg from '@/assets/logo.svg'

const signInSchema = yup.object().shape({
	email: yup
		.string()
		.email('Insira um e-mail válido')
		.required('Este campo é obrigatório'),
	password: yup.string().required('Este campo é obrigatório'),
})

type SignInSchema = yup.InferType<typeof signInSchema>

export function SignIn() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: yupResolver(signInSchema),
	})

	async function handleAuthenticate({ email, password }: SignInSchema) {
		try {
			// Delay de 1s
			await new Promise((resolve) => setTimeout(resolve, 1000))

			console.log({ email, password })

			toast.success('Login efetuado com sucesso')
			toast
		} catch (err) {
			toast.error('Credenciais inválidas')
		}
	}

	return (
		<Form onSubmit={handleSubmit(handleAuthenticate)}>
			<img src={logoImg} alt="Logo da biztrip" />

			<h2>Faça login para entrar na plataforma.</h2>

			<InputsContainer>
				<div>
					<Label htmlFor="email">E-mail</Label>
					<Input
						type="email"
						id="email"
						placeholder="Seu e-mail"
						autoCapitalize="none"
						autoComplete="email"
						autoCorrect="off"
						{...register('email')}
						hasError={!!errors.email}
					/>
					{errors.email && (
						<ErrorMessage>
							<img src={alertIcon} alt="Ícone de alerta" />
							{errors.email.message}
						</ErrorMessage>
					)}
				</div>

				<div>
					<Label htmlFor="password">Senha</Label>
					<Input
						type="password"
						id="password"
						placeholder="Sua senha"
						{...register('password')}
						hasError={!!errors.password}
					/>
					{errors.password && (
						<ErrorMessage>
							<img src={alertIcon} alt="Ícone de alerta" />
							{errors.password.message}
						</ErrorMessage>
					)}
				</div>
			</InputsContainer>

			<Button type="submit" size="md" disabled={isSubmitting}>
				{isSubmitting ? 'Carregando...' : 'Entrar'}
			</Button>
		</Form>
	)
}
