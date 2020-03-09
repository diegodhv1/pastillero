# Pastiller Electronico - Backend Node js

Tener en cuenta para ejecutar el proyecto

1. Installar node -> https://nodejs.org/en/download/
2. Installar git -> https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Instalaci%C3%B3n-de-Git
3. Instalar mongodb -> https://docs.mongodb.com/manual/administration/install-community/
4. Crear base de datos "pastillero" en mongodb
5. Agregar las siguientes colecciones

Pacientes

``
[
  {
    "nombre": "diego",
    "edad": "25",
    "sexo": "M"
  },
  {
    "nombre": "Mauricio",
    "edad": "30",
    "sexo": "M"
  },
  {
    "nombre": "Gariel",
    "edad": "31",
    "sexo": "M"
  }
]
``

Medicamentos

``[
  {
    "nombre": "Losartán"
  },
  {
    "nombre": "Dolex"
  },
  {
    "nombre": "Acetaminofén"
  }
]
``

Para ejecutar el proyecto seguir los siguientes pasos:

1. Clonar -> https://github.com/diegodhv1/pastillero.git
2. Ir a la raiz del proyecto y ejecutar el comando "npm install" para instalar dependencias
3. Ejecutar mongodb
4. Crear la base de datos del proyecto "pastillero"
4. Ejecutar comando -> npm run dev
5. Usar el navegador o postman para probar la url - ejemplo: "http://localhost:3000/api/pacientes"

:tada::tada::tada::tada:

