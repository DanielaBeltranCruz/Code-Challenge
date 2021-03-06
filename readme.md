# 馃挜 Code Challenge 

Consulta [Code Challenge](https://github.com/LaunchX-InnovaccionVirtual/MissionNodeJS/blob/main/semanas/semana_4/5_code_challenge.md) para ver a detalle en que consiste el proyecto.

鉁旓笍 **Requerimientos del proyecto**

1. Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.
2. Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificaci贸n `haveCertification`.
3. Habilitar un endpoint para consultar todos los estudiantes que tengan `credits` mayor a 500.

## Dependencias usadas 

馃幆 **Node.js**

Proyecto creado en Node.js versi贸n 16.14.2.

Creaci贸n del proyecto con el comando `npm init` para generar el archivo *package.json*.

Puedes consultar: <https://nodejs.org/es/download/>

馃幆 **Jest - Pruebas unitarias**

El proyecto cuenta con una carpeta llamada `test`, en la cual se encuentran scripts referentes a pruebas unitarias para comprobar el funcionamiento del c贸digo. 

Para ejecutar las pruebas se instal贸 `jest` versi贸n 26.0.0.

Comando para la instalaci贸n de la dependencia jest: 
+ `npm install jest@26.0.0 --save`
  
Configuraci贸n en el package.json para ejecutar los scripts de pruebas: 
+ `"test": "node ./node_modules/jest/bin/jest"`

Comando para ejecutar los scripts de pruebas una vez instalado jest: 
+ `npm test "ruta/direcci贸n del script"`

Puedes consultar: <https://jestjs.io/docs/getting-started>

馃幆 **GitHub Actions - Pruebas automatizadas**

Este proyecto maneja GitHub Actions para ejecutar pruebas automatizadas.

Dentro de la carpeta `.github`, se encuentra otra carpeta llamada `workflows` que contiene el archivo `test.yml`, el cual permite la automatizaci贸n de las pruebas cada que se realiza un `git push` al repositorio remoto.

馃幆 **Express - API**

Para la creaci贸n de la API, se instal贸 Express.

Comando para instalar Express:
+ `npm install express --save`

Configuraci贸n en el package.json para ejecutar el servidor:
+  `"server": "node ./lib/server.js"`

Comando para ejecutar el servidor automatizado:
+ `npm run server`

Puedes consultar: <https://expressjs.com/es/starter/installing.html>

馃幆 **ESLint**

Permite revisar la sintaxis del c贸digo y darle estilo mediante reglas automatizadas.

Comando para instalar Linter:
+ `npm install eslint --save-dev`

Comando para configurar Linter:
+ `npm init @eslint/config`
  
Comando para buscar las inconsistencias de escritura:
+ `npm run linter`

Comando para arreglar todos los errores detectados:
+ `npm run linter-fix`

Configuraci贸n en el package.json para ejecutar Linter:
+  `"linter": "node ./node_modules/eslint/bin/eslint.js"`
+  `"linter-fix": "node ./node_modules/eslint/bin/eslint.js . --fix"`

Consulta [.eslintrc.js](https://github.com/DanielaBeltranCruz/Code-Challenge/blob/master/.eslintrc.js) para ver las reglas usadas en el proyecto. 

Puedes consultar: <https://eslint.org/docs/user-guide/getting-started>

## Dise帽o del proyecto

El proyecto esta estructurado de la siguiente manera:
+ .github/workflows - Esta carpeta contiene un archivo `.yml`que permite el manejo de pruebas automatizadas usando GitHub Actions.
+ lib - Dentro de esta carpeta se encuentran tres carpetas m谩s que contienen los scripts necesarios para dar funcionalidad a cada endpoint requerido.
+ test - Esta carpeta contiene los archivos de pruebas de cada script de la carpeta anterior.
+ .eslintrc.js - Este archivo contiene las reglas a seguir para corregir la sintaxis.
+ .gitignore - Este archivo permite ignorar la carpeta `node_modules` que se crea cuando se instala alguna dependencia y la cual no debe ser versionada. 
+ package-lock.json - Este archivo se crea y se va actualizando cada que se instala una dependencia nueva al proyecto.
+ package.json - Este archivo contiene la informaci贸n referente a las dependencias instaladas as铆 como tambi茅n las configuraciones de las dependencias.
+ visualpartnerts.json - Este archivo contiene la base de datos a utilizar en formato JSON.

#### Diagrama de funcionalidad de la API

```mermaid
flowchart TD
    A[JSON] --> B[Reader]
    B --> C[StudentService]
    C --> D[StudentController]
    D --> E[Server]
    E --> F[API]
```
#### Diagramas del dise帽o de las clases y sus m茅todos correspondientes

```mermaid
 classDiagram
     class StudentController{
          + static getAllStudents()
          + static getEmails()
          + static getCredits()
      }
      class StudentService{
          + static getStudents()
          + static getEmailsWithCertification(students)
          + static getCredits(students)
      }
      class Reader{
          + static static readJsonFile(path)
      }
```

## Explicaci贸n de la API

Para la construcci贸n de la API de este proyecto, se maneja la carpeta `lib` que contiene las siguientes carpetas: `controllers`, `services` y `utils`; y un script llamado `server.js`.

+ Carpeta **`utils`** contiene un archivo llamado `Reader.js` el cual permite la lectura del archivo `visualpartners.json` para obtener datos.
+ Carpeta **`services`** contiene el archivo `StudentService.js` que permite exportar la clase `StudentService`, la cual contiene tres m茅todos que nos permiten obtener la informaci贸n para los endpoints.
+ Carpeta **`controllers`** contiene el archivo `StudentController.js` que permite exportar la clase `StudentController`, la cual contiene tres m茅todos que permiten conectar a la clase del archivo `StudentService.js` para enviar esa informaci贸n a la API cada que sea requerida, es decir, es el enlace para las consultas de los endpoints.
+ Archivo **`server.js`** permite conectar con el archivo `StudentController.js` cada vez que se haga una solicitud sobre alguna consulta. Para realizar las peticiones se utiliz贸 el m茅todo GET de HTTP.

### 馃搷 驴C贸mo consultarla?

| Endpoint | Request | Response |
|---|---|---|
| `"/"` | `http://localhost:3000/` | Mensaje "Code Challenge Api, Welcome!" |
| `"/v1/students"` | `http://localhost:3000/v1/students` | Regresa todos los estudiantes |
| `"/v1/students/emails"` | `http://localhost:3000/v1/students/emails` | Regresa una lista con los emails de los estudiantes que tienen certificaci贸n |
| `"/v1/students/credits"` | `http://localhost:3000/v1/students/credits` | Regresa una lista de los estudiantes que tengan cr茅ditos mayor a 500 |

Para consultar los endpoints es necesario habilitar el servidor usando el comando `npm run server` en la consola de la terminal. Habiendo hecho lo anterior, se abre el navegador y se escribe la url <http://localhost:3000/>, esta ruta permitir谩 acceder a la informaci贸n consultada de acuerdo a los endpoints.

Para deshabilitar el servidor, es necesario ubicarse en la consola de la terminal y presionar `ctrl + C`, despu茅s presionar `S` y dar enter.

### Ejemplos

1. Endpoint para consultar todos los estudiantes con todos sus campos.
   
![Imagen](https://github.com/DanielaBeltranCruz/Code-Challenge/blob/master/images/endpoint_01.PNG)

2. Endpoint para consultar los emails de todos los estudiantes que tengan certificaci贸n `haveCertification`.

![Imagen](https://github.com/DanielaBeltranCruz/Code-Challenge/blob/master/images/endpoint_02.PNG)

3. Endpoint para consultar todos los estudiantes que tengan `credits` mayor a 500.

![Imagen](https://github.com/DanielaBeltranCruz/Code-Challenge/blob/master/images/endpoint_03.PNG)


