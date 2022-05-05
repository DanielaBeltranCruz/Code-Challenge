# 💥 Code Challenge

✔️ **Requerimientos del proyecto**

1. Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.
2. Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificación `haveCertification`.
3. Habilitar un endpoint para consultar todos los estudiantes que tengan `credits` mayor a 500.

## Dependencias usadas 

**Node.js**

Proyecto creado en Node.js versión 16.14.2.

Creación del proyecto con el comando `npm init` para generar el archivo *package.json*.

**Jest - Pruebas unitarias**

El proyecto cuenta con una carpeta llamada `test`, en la cual se encuentran scripts referentes a pruebas unitarias para comprobar el funcionamiento del código. 

Para ejecutar las pruebas se instaló `jest` versión 26.0.0.

Comando para la instalación de la dependencia jest: 
+ `npm install jest@26.0.0 --save`
  
Configuración en el package.json para ejecutar los scripts de pruebas: 
+ `"test": "node ./node_modules/jest/bin/jest"`

Comando para ejecutar los scripts de pruebas una vez instalado jest: 
+ `npm test "ruta/dirección del script"`

Puedes consultar: <https://jestjs.io/docs/getting-started>

**GitHub Actions - Pruebas automatizadas**

Este proyecto maneja GitHub Actions para ejecutar pruebas automatizadas.

Dentro de la carpeta `.github`, se encuentra otra carpeta llamada `workflows` que contiene el archivo `test.yml`, el cual permite la automatización de las pruebas cada que se realiza un `git push` al repositorio remoto.

**Express - API**

Para la creación de la API, se instaló Express.

Comando para instalar Express:
+ `npm install express --save`

Configuración en el package.json para ejecutar el servidor:
+  `"server": "node ./lib/server.js"`

Comando para ejecutar el servidor automatizado:
+ `npm run server`

Puedes consultar: <https://expressjs.com/es/starter/installing.html>

**ESLinter**

Permite revisar la sintaxis del código y darle estilo meediante reglas automatizadas.

Comando para instalar Linter:
+ `npm install eslint --save-dev`

Comando para configurar Linter:
+ `npm init @eslint/config
  
Comando para buscar las inconsistencias de escritura:
+ `npm run linter`

Comando para arreglar todos los errores detectados:
+ `npm run linter-fix`

Configuración en el package.json para ejecutar Linter:
+  `"linter": "node ./node_modules/eslint/bin/eslint.js"`
+  `"linter-fix": "node ./node_modules/eslint/bin/eslint.js . --fix"`

Consulta [.eslintrc.js](https://github.com/DanielaBeltranCruz/Code-Challenge/blob/master/.eslintrc.js) para ver las reglas usadas en el proyecto. 

Puedes consultar: <https://eslint.org/docs/user-guide/getting-started>

## Diseño del proyecto

## Explicación de la API

¿Cómo consultarla?
Formato al que va a responder
Ejemplos