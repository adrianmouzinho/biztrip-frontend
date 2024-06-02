import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Form, InputsContainer } from './styles'

import logoImg from '@/assets/logo.svg'

export function SignIn() {
	return (
		<Form>
			<img src={logoImg} alt="Logo da biztrip" />

			<h2>Faça login para entrar na plataforma.</h2>

			<InputsContainer>
				<div>
					<Label htmlFor="email">E-mail</Label>
					<Input type="email" id="email" placeholder="E-mail" />
				</div>

				<div>
					<Label htmlFor="password">Senha</Label>
					<Input type="password" id="password" placeholder="Senha" />
				</div>
			</InputsContainer>

			<Button type="submit" size="md">
				Entrar
			</Button>
		</Form>
	)
}
