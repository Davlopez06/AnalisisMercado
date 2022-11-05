
# Analisis de mercado


## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Adonis.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.

## Comenzando

__IMPORTANTE:__ Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

- __Node__: 12.18.3 o mayor
- __NPM__: 6.14.16 o mayor

Para verificar que versión tienen instalada:

```bash
node -v
npm -v
```


## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `front`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```env
## Por defecto de adonis: 
PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=9u7tFfROkmpfnzAKx89dQqCqvyphthtE
DRIVE_DISK=local

## Para conectar la base de datos postgres
DB_CONNECTION=pg
PG_HOST=El host de su base de datos 
PG_PORT=El puerto de su base de datos 
PG_USER=El usuario de su base de datos 
PG_PASSWORD=La contraseña de su base de datos 
PG_DB_NAME=El nombre de su base de datos 
```

El contenido de `client` fue creado usando: Create React App.

## Enunciado

La idea general es crear una aplicación en la cual se puedan ver los distintos Datos:

- Listar los datos
- Crear nuevos datos
- Eliminar datos
- Editar datos



#### Tecnologías necesarias

- [ ] React
- [ ] Redux
- [ ] Node
- [ ] Adonis
- [ ] Postgres


#### Para su uso

  -Debe realizar npm i en la carpeta front y api
  -Para correr el front debe usar el comando `npm start`
  -Para correr la api debe usar el comando `node ace serve --watch`

  ## Importante
  -La ruta /create de la api debe ser llamada unicamente una vez
  -La informacion por defecto viene vacia 