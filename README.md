# 🚀 Taller: Desarrollo con Docker y DevContainers

Este taller tiene como objetivo enseñar cómo crear **entornos de
desarrollo reproducibles** utilizando **Docker** y **DevContainers en
Visual Studio Code**.

Durante el taller trabajaremos con dos aplicaciones:

-   **Frontend:** Angular
-   **Backend:** Quarkus

Cada proyecto incluye su propio **DevContainer**, lo que permitirá a
todos los participantes trabajar en un entorno idéntico sin instalar
dependencias manualmente en su sistema operativo.

------------------------------------------------------------------------
 
# 📚 Contenido del Taller

1.  Introducción a Docker
2.  Uso de Docker para entornos de desarrollo
3.  Introducción a DevContainers
4.  Desarrollo con VS Code usando contenedores
5.  Ejecución de aplicaciones Angular y Quarkus dentro de DevContainers

------------------------------------------------------------------------

# ✅ Prerrequisitos

Antes de iniciar el taller, los participantes deben tener instalado lo
siguiente:

-   Docker
-   Visual Studio Code
-   Extensión Dev Containers para VS Code
-   Git

------------------------------------------------------------------------

# 1️⃣ Instalar Docker

Docker será utilizado para ejecutar los **DevContainers**.

## Ubuntu / Linux

Seguir el tutorial:

https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-22-04

Verificar instalación:

``` bash
docker --version
```

Opcional (evitar usar sudo):

``` bash
sudo usermod -aG docker $USER
```

Luego cerrar sesión y volver a ingresar.

------------------------------------------------------------------------

## Windows / macOS

Instalar **Docker Desktop** siguiendo el siguiente video:

https://www.youtube.com/watch?v=obALwLV-49U

Luego verificar:

``` bash
docker --version
```

------------------------------------------------------------------------

# 2️⃣ Instalar Visual Studio Code

Descargar desde:

https://code.visualstudio.com/

------------------------------------------------------------------------

# 3️⃣ Instalar extensión Dev Containers

Instalar la extensión oficial de Microsoft:

**Dev Containers**

Marketplace:

https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers

------------------------------------------------------------------------

# 4️⃣ Instalar Git

Verificar instalación:

``` bash
git --version
```

Descargar desde:

https://git-scm.com/downloads

------------------------------------------------------------------------

# 📥 Clonar el repositorio del taller

``` bash
git clone https://github.com/otakusf/dockerfordeveloper.git
```

Entrar al repositorio:

``` bash
cd dockerfordeveloper
```

------------------------------------------------------------------------

# 📁 Estructura del Proyecto

    taller-devcontainers
    │
    ├── ngx-rrhh
    │   └── .devcontainer
    │
    ├── ms-rrhh
    │   └── .devcontainer
    │
    └── README.md

Cada proyecto contiene su propio **DevContainer** configurado.

------------------------------------------------------------------------

# 🧑‍💻 Cómo iniciar el entorno de desarrollo

## 1. Abrir el proyecto en VS Code

Abrir cualquiera de las carpetas:

-   `ngx-rrhh - frontend`
-   `ms-rrhh  - backend`

------------------------------------------------------------------------

## 2. Abrir el DevContainer

VS Code detectará automáticamente la configuración.

Seleccionar:

**Reopen in Container**

O ejecutar:

    F1 → Dev Containers: Reopen in Container

------------------------------------------------------------------------

## 3. Construcción del contenedor

La primera vez VS Code:

-   descargará la imagen Docker
-   construirá el contenedor
-   instalará dependencias

Este proceso puede tardar algunos minutos.

------------------------------------------------------------------------

# ▶️ Ejecutar los proyectos

## Frontend Angular

Dentro del contenedor:

``` bash
npm install
npm start
```

Abrir en el navegador:

http://localhost:4200

------------------------------------------------------------------------

## Backend Quarkus

Dentro del contenedor:

``` bash
./mvnw quarkus:dev
ó
mvn quarkus:dev
```

Disponible en:

http://localhost:8080

------------------------------------------------------------------------

# ⭐ Ventajas de usar DevContainers

-   Entornos de desarrollo **reproducibles**
-   Configuración automática del proyecto
-   Eliminación del problema **"en mi máquina funciona"**
-   Integración directa con **Docker**
-   Fácil onboarding para nuevos desarrolladores

------------------------------------------------------------------------

# 🛠 Problemas comunes

## Docker no inicia

Verificar:

``` bash
docker ps
```

------------------------------------------------------------------------

## VS Code no detecta el DevContainer

Verificar que la extensión esté instalada:

**Dev Containers**

------------------------------------------------------------------------

# 📢 Recomendación antes del taller

Para evitar retrasos durante el taller:

-   Tener **Docker funcionando**
-   Tener **VS Code instalado**
-   Tener **Git instalado**
-   Haber **clonado el repositorio**
-   Abrir el proyecto en VS Code antes de iniciar

------------------------------------------------------------------------

# 👨‍💻 Autor

Taller de **Docker + DevContainers para desarrollo moderno**.
Ing. Freddy Santacruz
