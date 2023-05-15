# PostConnect
<p>Resultado de prueba técnica para desarrollador fullstack Source Meridiam</p>

## Intrucciones
<p>Antes de ejecutar el proyecto es importante tener una base de datos mysql llamada 'post_connect_db'</p>

<p>Una vez el repositio esté clonado, primero se debe ejecutar la api. Para esto primero hay que ejecutar los siguientes comandos dentro de la carpeta llamanada 'PostConnect-api'</p>

```bash
# Crear el ambiente
$ python -m venv venv
# Ejecutar el ambiente
$ .\env\Scripts\activate
# Instalar paquetes
$ pip install
```

<p>Antes de ejecutar el proyecto hay que revisar la configuración de la base de datos. La configuración se encuentra en la ruta 'PostConnect-api/config/database.py'</p>
<p>Luego de revisar la configuración se puede ejecutar la aplicación, para esto se ejecuta el siguiente comando</p>

```bash
$ uvicorn main:app
```
<p>Esto hará que la aplicación se ejecute en la sigiente ruta: 'localhost:8000'. La documentación de esta se podrá ver en 'localhost:8000/docs'</p>

<p>Para ejecutar el front del proyecto, dentro de la carpeta 'PostConnect-front' se deben ejecutar los siguientes comandos</p>

```bash
# Instalar todos los paquetes
$ npm install
# Ejecutar la aplicación
$ npm run start
```

<p>La aplicación se ejecutará en la siguiente ruta: 'localhost:3000/login'</p>