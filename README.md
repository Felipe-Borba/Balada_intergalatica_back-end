# Balada Intergalática

Esse projeto foi proposto para ser desenvolvido em uma semana. Para ver a descrição completa do desafio acesse:
[balada_intergalactica.pdf](https://github.com/Felipe-Borba/Balada_intergalatica_back-end/blob/main/balada_intergalactica.pdf)

O código do front-end pode ser acessado em: [Balada_intergalatica_front-end](https://github.com/Felipe-Borba/Balada_intergalatica_front-end)

## Authors

- [@Felipe-Borba](https://www.github.com/Felipe-Borba)

## API Reference

#### Cadastar um alien

```http
  POST /alien
```

| Body               | Type     | Description                                         |
| :----------------- | :------- | :-------------------------------------------------- |
| `nome`             | `string` | **Required**. Nome do alien                         |
| `dataDeNascimento` | `string` | **Required**. Data de nascimento em relação a terra |

#### Obter lista de alien

```http
  GET /alien
```

#### Buscar por um alien

```http
  GET /alien/${id}
```

| Parameter | Type      | Description               |
| :-------- | :-------- | :------------------------ |
| `id`      | `integer` | **Required**. Id do alien |

#### Atualizar um alien

```http
  PUT /alien/${id}
```

| Body               | Type      | Description                                         |
| :----------------- | :-------- | :-------------------------------------------------- |
| `id`               | `integer` | **Required**. Id do alien                           |
| `nome`             | `string`  | **Required**. Nome do alien                         |
| `dataDeNascimento` | `string`  | **Required**. Data de nascimento em relação a terra |
| `banido`           | `boolean` | **Optional**. flag de status banido                 |

#### Deletar um alien

```http
  DEL /alien/${id}
```

| Parameter | Type      | Description               |
| :-------- | :-------- | :------------------------ |
| `id`      | `integer` | **Required**. Id do alien |

#### Cadastar um registro (check in)

```http
  POST /register
```

| Body       | Type            | Description                                         |
| :--------- | :-------------- | :-------------------------------------------------- |
| `alien_id` | `integer`       | **Required**. Id do alien                           |
| `festa_id` | `integer`       | **Required**. Id da festa                           |
| `objetos`  | `array[string]` | **Optional**. Contendo um array de objetos do alien |

#### Obter lista de registro/backlog

```http
  GET /register
```

| Query Params | Type      | Description                                                       |
| :----------- | :-------- | :---------------------------------------------------------------- |
| `backlog`    | `boolean` | **Optional**. caso true retorna o backclog do registro das festas |

#### Deletar um registro (check out)

```http
  DEL /register/${id}
```

| Parameter | Type      | Description                  |
| :-------- | :-------- | :--------------------------- |
| `id`      | `integer` | **Required**. Id do registro |

#### Deletar um backlog

```http
  DEL /register/backlog/${id}
```

| Parameter | Type      | Description                 |
| :-------- | :-------- | :-------------------------- |
| `id`      | `integer` | **Required**. Id do backlog |

#### Cadastar uma balada

```http
  POST /party
```

| Body             | Type            | Description                             |
| :--------------- | :-------------- | :-------------------------------------- |
| `nome`           | `string`        | **Required**. Nome do balada            |
| `itensProibidos` | `array[string]` | **Optional**. Contem os itens proibidos |

#### Obter lista das baladas

```http
  GET /party
```

#### Buscar por uma balada

```http
  GET /party/${id}
```

| Parameter | Type      | Description                |
| :-------- | :-------- | :------------------------- |
| `id`      | `integer` | **Required**. Id da balada |

#### Atualizar uma balada

```http
  PUT /party/${id}
```

| Body             | Type            | Description                             |
| :--------------- | :-------------- | :-------------------------------------- |
| `id`             | `integer`       | **Required**. Id da balada              |
| `nome`           | `string`        | **Required**. Nome da balada            |
| `itensProibidos` | `array[string]` | **optional**. contem os itens proibidos |

#### Deletar um alien

```http
  DEL /party/${id}
```

| Parameter | Type      | Description               |
| :-------- | :-------- | :------------------------ |
| `id`      | `integer` | **Required**. Id do alien |

## Installation

Passo 1: crie uma conta e faça o loguin em
https://customer.elephantsql.com/login

Passo 2: Click no botão chamado "create New Instance"
(canto superior direito)

Passo 3: Escolha um nome para a nova instância (qualquer um),
pode deixar o plano free, a tag é opcional e logo em baixo
click em "Select Region", "Review" e "Create Instance"

Passo 4: Entre na instância que você a cabou de criar, na
aba "details", copie a URL que aparecerá para você,
ela será usada como variável de ambiente.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`URL`

## Run Locally

Clone the project

```bash
  git clone https://github.com/Felipe-Borba/Balada_intergalatica_back-end
```

Go to the project directory

```bash
  cd Balada_intergalatica_back-end
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Feedback

Fique a vontade de entrar em contato: felipe.borba0109@gmail.com
