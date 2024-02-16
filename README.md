# Vende+

Uma plataforma totalmente automatizada para gerenciar suas vendas online.

# Integrantes - Grupo 30

- Matheus Tanaka
- Atilla Lima Guerrera
- Franciel Leandro Rosa Ferreira
- Luis Miguel Marques
- Jesse Macedo Castro

# Como executar o projeto

É necessário que você tenha [Node](https://nodejs.org/en) instalado em seu computador, caso contrário, não será possível executar o projeto.

O projeto foi desenvolvido em um único repositório com a seguinte estrutura:

- Front-end - Pasta Web.
- Back-end - Pasta Server.

É recomendado utilizar duas guias do terminal, uma para executar o front-end (Web) e outra guia para executar o back-end (Server).

### Clonando o repositório

```shell
# Clonando o repositório
$ git clone https://github.com/matheustanaka/VendeMais
```

### Inciando com o Front-End

```shell
# Entrando na pasta do projeto
$ cd VendeMais

# Acessando o diretório de Front-End
$ cd web

# Instalando Dependências
$ npm install

# Executando o Front-End
$ npm run dev

# Rota da aplicação
http://localhost:5173/
```

### Inciando com o Back-End

```shell
# Entrando na pasta do projeto
$ cd VendeMais

# Acessando o diretório de Front-End
$ cd server

# Instalando Dependências
$ npm install

# Executando o Front-End
$ npm run dev

# Rota da aplicação
http://localhost:3000/
```

# Tecnologias Utilizadas

Optamos por utilizar Node.js no back-end pela facilidade de desenvolver APIs e por ser um runtime do [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Introduction), o que facilitaria com na hora de integrar o Front-end da aplicação com o Back-end. A escolha pelo [MongoDB](https://www.mongodb.com/) como banco de dados, foi pelo suporte que ele fornece ao [Node.js](https://nodejs.org/en) e ao [Express.js](https://expressjs.com/pt-br/), fornecendo recursos adicionais para facilitar no desenvolvimento. Durante o desenvolvimento, gostariamos de ter a funcionalidade de Login com o Google, desta forma, escolhemos [Firebase](https://firebase.google.com/?hl=pt-br) que fornece diversas formas de autenticação e uma documentação completa para frazer integração com Node.js e React.js.

O Front-End da aplicação foi desenvolvido com [React.js](https://pt-br.react.dev/), uma biblioteca famosa de Javascript, onde suporta o JSX que permite que você escreva código JavaScript que se assemelha a marcação HTML. Em relação a estilização, optamos por utilizar o CSS Sass, que basicamente introduz conceitos como variáveis, mixins, funções e aninhamento seletor, tornando o código CSS mais modular, reutilizável e fácil de manter.

### Front-End

- [React.js](https://pt-br.react.dev/)
- [Sass](https://sass-lang.com/)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Introduction)

### Back-End

- [Node.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com/pt-br/)
- [MongoDB](https://www.mongodb.com/)
- [Firebase](https://firebase.google.com/?hl=pt-br)


# TO-DO: 
- Descobrir porque o k8s não estava aceitando os volumes mounts que estavam nos yamls.
- Fazer o tunnel do minikube pra minha máquina local 
- Executar os servicos que foram expostos
