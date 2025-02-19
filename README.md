## Requisitos

- Tener JavaScript package manager (pnpm, npm, o yarn - preferible pnpm)
- Tener Node.js versión 20.9.0 o superior
- Cualquier tipo de base de datos (preferible MongoDB)

## Instalación

- Abrí la consola y accedí a la carpeta donde crearía el proyecto
- Luego ingrese el siguiente comando: npx create-payload-app
- Me pidió ingresar el nombre del proyecto: front-payload
- Elegir la plantilla del proyecto: blank // para iniciar el proyecto con solo un registrar usuario y subir archivos multimedia
- Pregunta el tipo de base de datos que usaras: PostgresSQL
- Luego la conexión con tu base de datos: postgres:// <usuario>:<contraseña>@127.0.0.1:5432/<nombre DataBase>
- Después elegir el lengua del proyecto: Javascript
- Des pues de esperar a la instalación del proyecto y sus dependencia arranque con primero la construcción del proyecto con el siguiente comando: npm run build
- Después de eso iniciamos el proyecto: npm run star
- Al iniciar el proyecto e ingresar por el url que nos muestra el terminal nos muestra la ventana de bienvenida
- Entramos en el primer botón que nos aparece y nos pide registrar nuestro primer usuario
- Luego de eso tenemos acceso a las 2 interfaces que viene de prueba, el registrar usuario y archivos multimedia

## Attributes

- **Database**: ciberseguridad
- **Schema**: payload // se puede cambiar en payload.config.ts, si no especificas el schema sera por defecto el public
- **Storage Adapter**: localDisk

## Objetivo

- crear un añadir curso que guarde imagenes y accesos seguros de url's

## Instalar

- Instalar drizzle para generar y manejar la base de datos
  npm install @payloadcms/db-postgres drizzle-orm
