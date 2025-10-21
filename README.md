Cards and Cards 🃏

API REST para la gestión y creación de cartas

Descripción general

Este proyecto implementa una API REST desarrollada con NestJS y Prisma ORM, que permite gestionar una base de datos de cartas.
Incluye operaciones básicas de creación, lectura, actualización y eliminación (CRUD) sobre los registros almacenados en una base de datos SQLite.

Tecnologías utilizadas

Node.js

NestJS (Framework backend)

Prisma ORM (Manejo de base de datos)

SQLite (Base de datos local por defecto)

TypeScript

Estructura principal
cards-and-cards/
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── src_cards/
│   ├── cards/
│   │   ├── cards.controller.ts
│   │   ├── cards.service.ts
│   │   └── dto/
│   │       └── create-card.dto.ts
│   ├── app.module.ts
│   └── main.ts
│
├── .env
├── .gitignore
├── package.json
└── README.md

Endpoints principales
Método	Endpoint	    Descripción
GET     /cards	      Obtiene todas las cartas
GET	    /cards/:id	  Obtiene una carta por su ID
POST	  /cards	      Crea una nueva carta
PUT	    /cards/:id	  Modifica una carta existente
DELETE	/cards/:id	  Elimina una carta por ID

Ejemplo del body utilizando el endpoint de POST

{
  "name": "Guardián de Fuego",
  "description": "Una carta poderosa de tipo mágico.",
  "typeId": 1,
  "rarityId": 2,
  "regionId": 3,
  "magictypeId": 1,
  "power": 80,
  "defense": 65,
  "armor": 40,
  "health": 120
}

Instalacion y ejecución.
1.-Clonar el repositorio utilizando "git clone https://github.com/tu-usuario/cards-and-cards.git
cd cards-and-cards"
2.-Intalar dependencias de node.js "npm install"
3.-Configurar variables de entorno creando un archivo .env con el siguiente contenido: "DATABASE_URL="file:./dev.db"
4.-Ejecutar las migraciones de prisma "npx prisma migrate dev --name init"
5.-Iniciar servidor con npm run start:dev

El servidor quedará disponible en:
http://localhost:3000 listo para realizar pruebas con POSTMAN.


Autor: Álvaro Jiménez.


