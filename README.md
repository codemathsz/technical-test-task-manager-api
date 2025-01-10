# NodeJS + Express

## Desafio Técnico: API Restful de Gerenciamento de Tarefas
O objetivo deste desafio técnico é desenvolver uma API Restful para gerenciamento de tarefas utilizando o framework Express. A aplicação deve permitir as seguintes operações:
- Criação de Tarefas: Adicionar novas tarefas com título, descrição e status.
- Busca de Tarefas: Recuperar todas as tarefas cadastradas.
- Atualização de Tarefas: Modificar uma tarefa existente com base no seu ID.
- Exclusão de Tarefas: Remover uma tarefa específica pelo seu ID.

## Rotas da API
- GET /tasks: Retorna todas as tarefas.
- POST /tasks: Cria uma nova tarefa. Parâmetros esperados: título, descrição e status.
- PUT /tasks/:id: Atualiza uma tarefa existente. Parâmetro esperado: ID da tarefa.
- DELETE /tasks/:id: Deleta uma tarefa específica. Parâmetro esperado: ID da tarefa.

## Possiveis melhorias

- Validação dos dados.

- Tratamento de erros.

- Paginação.

- Uso de promises.

## Instalação do Projeto

1. **Clone o repositório**:
```bash 
git clone <URL_DO_REPOSITORIO> 
cd <NOME_DO_DIRETORIO>
```

2. **Instale as dependências do projeto**:
```bash 
npm install
```

3. **Inicie o servidor de desenvolvimento**:
```bash 
npm run dev
```