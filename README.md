<h3 align="center">Node ORM</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Aplicação web backend desenvolvido em Node JS utilizando ORM Sequelize.
    <br>
</p>

## 📝 Conteúdo

- [Sobre](#about)
- [Uso](#usage)
- [Ferramentas](#built_using)
- [Autor](#authors)
- [Considerações finais](#acknowledgement)

---
## 🏁 Sobre <a name = "about"></a>

Sequelize é uma ORM para Node.js com suporte para Postgres, MySQL, MariaDB, SQLite e Microsoft SQL Server.


### Pré-requisitos

- De preferência o editor de códigos [Visual Studio Code](https://code.visualstudio.com/download). E interpretador JavaScript [NodeJS](https://nodejs.org/pt-br/download/) também instalado

### Instruções de uso

Primeiro de tudo abra um novo projeto no VSCode e no prompt de comando inicialize o gerenciador de pacotes para criar o arquivo `package.json.

```
npm init -y
```

ou se preferir

```
yarn init -y
```

### Inicializando o framework

A aplicação foi desenvolvida utilizando o micro framework express, então para inicia-lo digite o comando abaixo no prompt de comando referente ao diretório do projeto.

```
npm install express
```

ou se preferir

```
yarn add express
```

O comando irá criar a pasta node_modules, a qual deverá ser inclusa em um arquivo .gitignore

## 🎈 Uso <a name="usage"></a>

Agora vamos a instalação das depêndencias.

O primeiro passo é instalar o nodemon, que é uma depêndencia na maioria das vezes apenas usada em ambiente de desenvolvimento, que serve para monitorar mudanças no nosso código e automaticamente atualizar o servidor, então para isso digite o comando:

```
npm install nodemon -D
```

ou se preferir

```
yarn add nodemon -D
```

Agora o proximo passo seria instalar as depêndencias relacionadas ao [Sequelize v5](https://sequelize.org/v5/), para isso primeiro instale o Sequelize no projeto digitando o comando:

```
npm install sequelize
```

ou se preferir

```
yarn add sequelize
```

A sequir você deve instalar a depêndencia relacionada ao banco de dados o qual será usado no projeto, escolha a de sua preferência e digite um dos comandos abaixo:

```
npm install pg pg-hstore # Postgres
npm install mysql2
npm install mariadb
npm install sqlite3
npm install tedious # Microsoft SQL Server
```
ou se preferir

```
yarn add pg pg-hstore # Postgres
yarn add mysql2
yarn add mariadb
yarn add sqlite3
yarn add tedious # Microsoft SQL Server
```
Agora o proximo passo é instalar a depêndencia de CLI do Sequelize para que seja possivel acessar alguns comandos do mesmo, para isso digite:

```
npm install sequelize-cli -D
```

ou se preferir

```
yarn add sequelize-cli -D
```
E pronto você agora tem todas as depêndencias necessárias para iniciar um projeto utilizando express e Sequelize ORM.

### Instalação

Para inicializar o arquivo `package.json` e instalar todas as dependências digite os comandos abaixo

```
npm install
```

ou se preferir

```
yarn install
```

## ⛏️ Ferramentas <a name = "built_using"></a>

- [Node](https://nodejs.org/en/) - Javascript Runtime Environment.
- [Express](https://expressjs.com/pt-br/) - Framework Web.
- [Sequelize v5](https://sequelize.org/v5/) - SQL dialect ORM for Node.js

## ✍️ Autores <a name = "authors"></a>

- [@RafaelLeveske](https://github.com/RafaelLeveske)


## 🎉 Considerações finais <a name = "acknowledgement"></a>

- Esse projeto foi desenvolvido com o objetivo de estudo sobre a ORM Sequelize.
