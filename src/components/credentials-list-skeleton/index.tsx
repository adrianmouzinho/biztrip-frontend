import {
	Actions,
	ButtonSkeleton,
	Container,
	Content,
	DataSkeleton,
	FormSkeleton,
	Header,
	ServiceIconSkeleton,
} from './styles'

export function CredentialsListSkeleton() {
	return (
		<>
			{Array.from({ length: 8 }).map((_, i) => {
				return (
					<Container key={i}>
						<Content>
							<Header>Nome</Header>
							<DataSkeleton />
						</Content>

						<Content>
							<Header>Fornecedor</Header>
							<DataSkeleton />
						</Content>

						<Content>
							<Header>Serviço</Header>
							<ServiceIconSkeleton />
						</Content>

						<Actions>
							<ButtonSkeleton />
							<FormSkeleton />
						</Actions>
					</Container>
				)
			})}
		</>
	)
}
