# Clean Architecture - Full Cycle 3.0

Este repositório demonstra a aplicação dos princípios da Clean Architecture em um projeto backend utilizando Node.js e TypeScript. A estrutura do código separa claramente as responsabilidades em camadas como `domain`, `usecases` e `infrastructure`, promovendo alta coesão, baixo acoplamento e facilidade de testes.

## 📚 Sobre o Projeto

Este projeto foi desenvolvido como parte do curso Full Cycle 3.0, com o objetivo de aplicar na prática os conceitos de arquitetura limpa e design orientado ao domínio. A organização do código segue os princípios da Clean Architecture, proporcionando uma base sólida para aplicações escaláveis e de fácil manutenção.

## 🧱 Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

```

.
|-- README.md
|-- jest.config.ts
|-- package-lock.json
|-- package.json
|-- src
|   |-- domain
|   |   |-- @shared
|   |   |   |-- entity
|   |   |   |   `-- entity.abstract.ts
|   |   |   |-- event
|   |   |   |   |-- event-dispatcher.interface.ts
|   |   |   |   |-- event-dispatcher.spec.ts
|   |   |   |   |-- event-dispatcher.ts
|   |   |   |   |-- event-handler.interface.ts
|   |   |   |   `-- event.interface.ts
|   |   |   |-- notification
|   |   |   |   |-- notification.error.ts
|   |   |   |   |-- notification.spec.ts
|   |   |   |   `-- notification.ts
|   |   |   |-- repository
|   |   |   |   `-- repository-interface.ts
|   |   |   `-- validator
|   |   |       `-- validator.interface.ts
|   |   |-- checkout
|   |   |   |-- entity
|   |   |   |   |-- order.spec.ts
|   |   |   |   |-- order.ts
|   |   |   |   `-- order_item.ts
|   |   |   |-- factory
|   |   |   |   |-- order.factory.spec.ts
|   |   |   |   `-- order.factory.ts
|   |   |   |-- repository
|   |   |   |   `-- order-repository.interface.ts
|   |   |   `-- service
|   |   |       |-- order.service.spec.ts
|   |   |       `-- order.service.ts
|   |   |-- customer
|   |   |   |-- entity
|   |   |   |   |-- customer.spec.ts
|   |   |   |   `-- customer.ts
|   |   |   |-- factory
|   |   |   |   |-- customer.factory.spec.ts
|   |   |   |   |-- customer.factory.ts
|   |   |   |   `-- customer.validator.factory.ts
|   |   |   |-- repository
|   |   |   |   `-- customer-repository.interface.ts
|   |   |   |-- validator
|   |   |   |   `-- customer.yup.validator.ts
|   |   |   `-- value-object
|   |   |       `-- address.ts
|   |   `-- product
|   |       |-- entity
|   |       |   |-- product.interface.ts
|   |       |   |-- product.spec.ts
|   |       |   `-- product.ts
|   |       |-- event
|   |       |   |-- handler
|   |       |   |   `-- send-email-when-product-is-created.handler.ts
|   |       |   `-- product-created.event.ts
|   |       |-- factory
|   |       |   |-- product.factory.spec.ts
|   |       |   |-- product.factory.ts
|   |       |   `-- product.validator.factory.ts
|   |       |-- repository
|   |       |   `-- product-repository.interface.ts
|   |       |-- service
|   |       |   |-- product.service.spec.ts
|   |       |   `-- product.service.ts
|   |       `-- validator
|   |           `-- product.yup.validator.ts
|   |-- infrastructure
|   |   |-- api
|   |   |   |-- __tests__
|   |   |   |   |-- customer.e2e.spec.ts
|   |   |   |   `-- product.e2e.spec.ts
|   |   |   |-- express.ts
|   |   |   |-- presenters
|   |   |   |   |-- customer.presenter.ts
|   |   |   |   `-- product.presenter.ts
|   |   |   |-- routes
|   |   |   |   |-- customer.route.ts
|   |   |   |   `-- product.route.ts
|   |   |   `-- server.ts
|   |   |-- customer
|   |   |   `-- repository
|   |   |       `-- sequelize
|   |   |           |-- customer.model.ts
|   |   |           |-- customer.repository.spec.ts
|   |   |           `-- customer.repository.ts
|   |   |-- order
|   |   |   `-- repository
|   |   |       `-- sequilize
|   |   |           |-- order-item.model.ts
|   |   |           |-- order.model.ts
|   |   |           |-- order.repository.spec.ts
|   |   |           `-- order.repository.ts
|   |   `-- product
|   |       `-- repository
|   |           `-- sequelize
|   |               |-- product.model.ts
|   |               |-- product.repository.spec.ts
|   |               `-- product.repository.ts
|   `-- usecase
|       |-- customer
|       |   |-- create
|       |   |   |-- create.customer.dto.ts
|       |   |   |-- create.customer.unit.spec.ts
|       |   |   `-- create.customer.usecase.ts
|       |   |-- find
|       |   |   |-- find.customer.dto.ts
|       |   |   |-- find.customer.integration.spec.ts
|       |   |   |-- find.customer.unit.spec.ts
|       |   |   `-- find.customer.usecase.ts
|       |   |-- list
|       |   |   |-- list.customer.dto.ts
|       |   |   |-- list.customer.unit.spec.ts
|       |   |   `-- list.customer.usecase.ts
|       |   `-- update
|       |       |-- update.customer.dto.ts
|       |       |-- update.customer.unit.spec.ts
|       |       `-- update.customer.usecase.ts
|       `-- product
|           |-- create
|           |   |-- create.product.dto.ts
|           |   |-- create.product.integration.spec.ts
|           |   |-- create.product.unit.spec.ts
|           |   `-- create.product.usecase.ts
|           |-- find
|           |   |-- find.product.dto.ts
|           |   |-- find.product.integration.spec.ts
|           |   |-- find.product.unit.spec.ts
|           |   `-- find.product.usecase.ts
|           |-- list
|           |   |-- list.product.dto.ts
|           |   |-- list.product.integration.spec.ts
|           |   |-- list.product.unit.spec.ts
|           |   `-- list.product.usecase.ts
|           `-- update
|               |-- update.product.dto.ts
|               |-- update.product.integration.spec.ts
|               |-- update.product.unit.spec.ts
|               `-- update.product.usecase.ts
|-- tsconfig.json
`-- tslint.json
```



* **domain**: Contém as entidades, repositórios e objetos de valor que representam o núcleo do domínio da aplicação.
* **usecases**: Implementa os casos de uso da aplicação, orquestrando as operações do domínio.
* **infrastructure**: Inclui as implementações concretas, como controladores, acesso a dados e integrações externas.

## 🛠️ Tecnologias Utilizadas

* Node.js
* TypeScript
* Jest (para testes automatizados)
* TSLint

## 🚀 Como Executar o Projeto

1. Clone o repositório:

   ```
   git clone https://github.com/Arthur-Bamberg/clean-architecture-full-cycle-3.git
   ```



2. Instale as dependências:

   ```
   npm install
   ```



3. Execute os testes:

   ```
   npm test
   ```



## 🧪 Testes

Os testes automatizados são implementados utilizando o Jest, garantindo a confiabilidade e a manutenção do código. Para executá-los, utilize o comando:

```

npm test
```