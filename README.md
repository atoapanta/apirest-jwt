# API RESTful de Tareas (Tasks)

Esta API proporciona operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una colección de tareas. Además, cuenta con un sistema de autenticación JWT para validar el registro y login de usuarios. La API recibe un token de acceso en la cabecera "x-access-token" para poder transaccionar.

## Tecnologías y Dependencias

- Node.js
- Express.js
- Babel ()
- Sequelize (con el adaptador de base de datos MySQL)
- Cors (para permitir solicitudes cruzadas)
- Helmet (para mejorar la seguridad del encabezado HTTP)
- Bcrypt.js (para el hash de contraseñas)
- Csurf (para proteger contra ataques CSRF)
- Dotenv (para la gestión de variables de entorno)
- JWT (Tokens de acceso JSON)
- Morgan (para el registro de solicitudes HTTP)

## Configuración

1. Clona este repositorio o descarga el código fuente.
2. Ejecuta `npm install` para instalar las dependencias.
3. Configura tu conexión a la base de datos MySQL crea un archivo `.env` en la raíz del proyecto, actualiza los variables por tus datos.
4. Ejecuta `npm run build` para transpilar el codigo.
5. Ejecuta `npm start` para correr el sistema en el port 7000.

## PRODUCTION : - https://api-atoapanta.vercel.app/v1/api

## DEVELOPMENT : - http://localhost:7000/api/v1

### ENDPOINTS

# REGISTRO DE USUARIO

- URL: /user/register
  - Método: POST
  - Cuerpo de la solicitud: { "email": "email_de_usuario", "password": "contraseña" }
  - Respuesta: { "message": "Successful registration!" }

# LOGIN DE USUARIO

- URL: /user/login
- Método: POST
- Cuerpo de la solicitud: { "email": "email_de_usuario", "password": "contraseña" }
- Respuesta: { "accessToken": "token_de_acceso" }

# OBTENER TODAS LAS TAREAS

- URL: /tasks
- Método: GET
- Cabecera de la solicitud: { "x-access-token": "token_de_acceso" }
- Respuesta: { "tasks": [ { idTask:'4p5VUbmHvZX56JYgpqWXHi',
  title:'Primera tarea 1',
  description:'Descripcion primera tarea',
  assigned:'2',
  appointment:'2023-10-17',
  priority:'1',
  status:'false',
  createdAt:'2023-10-17 13:23:05',
  updatedAt:'2023-10-17 13:23:05',
  user.email:'alexander@gmail.com', }, {},{} ] }

# OBTENER UNA TAREA POR ID

- URL: /task/:id
- Método: GET
- Cabecera de la solicitud: { "x-access-token": "token_de_acceso" }
- Respuesta: { idTask:'4p5VUbmHvZX56JYgpqWXHi',
  title:'Primera tarea 1',
  description:'Descripcion primera tarea',
  assigned:'2',
  appointment:'2023-10-17',
  priority:'1',
  status:'false',
  createdAt:'2023-10-17 13:23:05',
  updatedAt:'2023-10-17 13:23:05',
  user.email:'alexander@gmail.com' }

# AGREGAR UNA NUEVA TAREA

- URL: /task
- Método: POST
- Cabecera de la solicitud: { "x-access-token": "token_de_acceso" }
- Cuerpo de la solicitud: {
  'title':'Primera tarea 1',
  'description':'Descripcion primera tarea',
  'assigned':'2',
  'appointment':'2023-10-17',
  'priority':'1',
  'status':'false' }
- Respuesta: {"message": "Registered task completed!" }

# ACTUALIZAR UNA TAREA EXISTENTE

- URL: /task/:id
- Método: PUT
- Cabecera de la solicitud: { "x-access-token": "token_de_acceso" }
- Cuerpo de la solicitud: { "title": "Tarea 3 actualizada", "description": "Descripción de la tarea 3 actualizada" }
- Respuesta: { "message": "Task update complete!" }

# ELIMINAR UNA TAREA EXISTENTE

- URL: /task/:id
- Método: DELETE
- Cabecera de la solicitud: { "x-access-token": "token_de_acceso" }
  Respuesta: { "message": "Task delete!" }
