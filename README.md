# INTRUCTIONS:

## DEPENDENCIAS A INSTALAR:
- @nestjs/core - El núcleo de NestJS.
  
  npm install @nestjs/core

- @nestjs/common - Contiene elementos comunes y esenciales de NestJS.
  
  npm install @nestjs/common

- @nestjs/platform-express - Adaptador de Express para NestJS.
  
  npm install @nestjs/platform-express

- rxjs - Biblioteca para programación reactiva utilizando Observables.
  
  npm install rxjs

- @nestjs/swagger - Módulo para la generación de documentación de API con Swagger.
  
  npm install @nestjs/swagger swagger-ui-express

- @nestjs/typeorm - Integración de TypeORM con NestJS para la manipulación de bases de datos.
  
  npm install @nestjs/typeorm typeorm

- pg - Cliente PostgreSQL para Node.js (necesario si estás utilizando PostgreSQL).
  
  npm install pg

- class-validator - Permite el uso de decoradores para validar datos entrantes.
  
  npm install class-validator

- class-transformer - Permite transformar objetos de una clase a otra y manipular objetos.
  
  npm install class-transformer

- jest - Framework de pruebas para JavaScript.
  
  npm install jest @nestjs/testing ts-jest --save-dev

- supertest - Utilidad para probar HTTP (útil para pruebas e2e).
  
  npm install supertest --save-dev

- reflect-metadata - Biblioteca necesaria para el funcionamiento de los decoradores de TypeScript.
  
  npm install reflect-metadata

- typescript - Superset de JavaScript que añade tipos.
  
  npm install typescript

1. Ir al archivo "src\app.module.ts" dentro ubicar la informacion de la base de datos a utilizar (debe ser una base de datos postgresSQL):

  type: 'postgres' (no modificar)
  host: 'localhost' (modificar por host de la base de datos, usa el nombre del servicio si usas docker-compose)
  port: 5432 (modificar por puerto de PostgreSQL)
  username: 'postgres' (modificar por usuario de la base de datos)
  password: '123' (modificar por ontraseña de postgresSQL)
  database: 'NOMBRE_BASE_DE_DATOS' (modificar por el nombre a la base de datos creada)
  entities: [Task] (no modificar)
  synchronize: true (no modificar)

2. Acceder a la documentacion de swagger

- Correr NestJS: npm run start
- Ingresar a la dirreción donde se esta corriendo el framework y el puerto
  - http://[DIRRECION]:[PORT]/api/docs

- Ejemplo: http://localhost:3000/api/docs

PD: Ingresar a este archivo para ver la docuemntacion en formato PDF:
- 

3. Iniciar pruebas unitarias, haciendo uso de npm.

- Asegurarse de tener todas las dependencias 
- Correr el comando:
  npm run test

# TODO TASKS:

## Requisitos Funcionales:

### 1. CRUD de Tareas:

- [X] Crear tareas.
- [X] Leer/listar tareas. 
- [X] Actualizar tareas. 
- [X] Eliminar tareas.

### 2. Modelo de Datos de Tareas:

- [X] ID (único) 
- [X] Título (50 caracteres) 
- [X] Descripción (200 caracteres) 
- [X] Estado (pendiente, en progreso, completada) 

## Requisitos Técnicos:

1. [X] API RESTful: Debe seguir los principios REST y responder con los códigos de estado HTTP apropiados.
2. [X] Validación: Implementar validación de entrada para asegurarse de que los datos 
recibidos son correctos antes de procesarlos - insertarlos en la base de datos.
3. [X] Manejo de Errores: Implementar un manejo de errores adecuado que capture y devuelva respuestas útiles en caso de errores.
4. [X] Persistencia de Datos: Conectar la API a una base de datos PostgreSQL utilizando el ORM TypeORM.
5. [X] Seguridad: Proteger la API contra inyecciones SQL.
6. [X] Pruebas Unitarias: Desarrollar pruebas unitarias para cada funcionalidad, asegurando que los componentes funcionen como se espera.
7. [X] Documentación: Documentar la API utilizando Swagger.

# NEST DESCRIPTION

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```
$ npm install
```

## Running the app

```
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
