# 📒 API de Agenda de Contatos

Esta API permite gerenciar contatos de forma segura, incluindo operações de CRUD (Criar, Ler, Atualizar, Excluir) com autenticação e autorização. A aplicação foi desenvolvida usando Fastify, Prisma, Node.js e TypeScript.

## 🛠️ Tecnologias Utilizadas

- ⚡ **Fastify**: Framework web rápido e eficiente para Node.js.
- 📦 **Prisma**: ORM moderno para TypeScript e Node.js.
- 🟢 **Node.js**: Plataforma de desenvolvimento backend.
- 💻 **TypeScript**: Superconjunto do JavaScript que adiciona tipagem estática ao código.

## ✨ Funcionalidades

- 📇 **CRUD de Contatos**: Cadastrar, visualizar, atualizar e excluir contatos.
- 🔐 **Autenticação**: Usuários devem se autenticar para acessar a API.
- 🛡️ **Autorização**: Usuários com diferentes permissões (admin e usuário regular) têm acesso a diferentes operações.
- 🛠️ **Validação de Dados**: Validações como email único e campos obrigatórios para cadastro de contatos.

## ⚙️ Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/agenda-de-contatos-api.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute as migrações do banco de dados com Prisma:
   ```bash
   npx prisma migrate dev
   ```

4. Inicie o servidor:
   ```bash
   npm run dev
   ```

A API estará disponível em: `http://localhost:5000`.



## 📌 Requisitos Funcionais

- **Cadastro de Contatos**: Usuários podem criar contatos com nome, telefone e email.
- **Visualização de Contatos**: Listar todos os contatos cadastrados.
- **Atualização de Contatos**: Editar informações de um contato existente.
- **Exclusão de Contatos**: Remover contatos.

## 🔐 Requisitos de Autenticação e Autorização

- **Autenticação**: Todas as rotas que manipulam contatos exigem autenticação via JWT.
- **Autorização**: Diferentes permissões são atribuídas a usuários, como administrador e usuário regular.

## 📜 Regras de Negócio

- Usuários devem se cadastrar com **nome** e **email**.
- O **email** deve ser uma chave única.
- Contatos devem ter **nome** e pelo menos uma forma de contato (telefone ou email).
- Somente **usuários autenticados** podem criar, atualizar ou excluir contatos.
- A autorização é baseada em **funções de usuário** (admin ou usuário comum).

## 🔒 Segurança

- Todos os dados são armazenados com segurança e protegidos contra acessos não autorizados.
- As entradas do usuário são validadas para evitar a inserção de dados incorretos ou maliciosos.

## 🤝 Como Contribuir

1. Faça um fork do repositório.
2. Crie uma nova branch para sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Commit suas alterações:
   ```bash
   git commit -m 'Adiciona nova feature'
   ```
4. Envie para a branch original:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.

## 📝 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

