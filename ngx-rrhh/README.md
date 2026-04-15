# NGX-RRHH - Sistema de Gestión de Recursos Humanos

Aplicación Angular 21 con PrimeNG para gestión de empleados, completamente containerizada con Docker y DevContainer.

## Descripción

Este proyecto proporciona una interfaz completa de CRUD (Create, Read, Update, Delete) para la gestión de empleados, con:

- **Frontend**: Angular 21 con PrimeNG
- **Backend**: API REST en proyecto externo
- **DevContainer**: Ambiente de desarrollo containerizado

## Características

✅ Gestión completa de empleados
✅ Formulario reactivo con validaciones
✅ Tabla interactiva con PrimeNG
✅ Operaciones CRUD conectadas a backend
✅ Diálogos de confirmación
✅ Notificaciones Toast
✅ Interfaz responsive
✅ Containerizado con Docker

## Requisitos

- Docker Desktop
- Docker Compose
- VS Code con extensión Remote - Containers
- Node.js 20+ (opcional si usa DevContainer)
- Backend corriendo en otro proyecto (puerto 3001)

## Instalación y Configuración

### Opción 1: Usando DevContainer (Recomendado)

1. Abre el proyecto en VS Code
2. Instala la extensión "Remote - Containers"
3. Presiona `Ctrl+Shift+P` y selecciona "Remote-Containers: Reopen in Container"
4. Espera a que se compile la imagen de Docker
5. Las dependencias se instalarán automáticamente

### Opción 2: Local con Node.js

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm start

# Compilar para producción
npm run build
```

### Opción 3: Docker Compose

```bash
# Levantar todos los servicios (frontend, backend, base de datos)
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener servicios
docker-compose down
```

## Uso

### Frontend

```bash
# Desarrollo
npm start
# Abre http://localhost:4200

# Build
npm run build

# Lint
npm run lint
```

## Configuración del Backend

El backend debe estar corriendo en otro proyecto en el puerto `3001` con los endpoints:

- `http://localhost:3001/api/employees` (GET, POST)
- `http://localhost:3001/api/employees/:id` (GET, PUT, DELETE)

Por defecto, la aplicación intenta conectar a `http://localhost:3001/api`.

## Estructura del Proyecto

```
ngx-rrhh/
├── .devcontainer/          # Configuración DevContainer
│   ├── devcontainer.json
│   ├── Dockerfile
│   └── docker-compose.yml
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── crud/       # Componente CRUD principal
│   │   ├── services/
│   │   │   └── api.service.ts
│   │   ├── models/
│   │   │   └── employee.model.ts
│   │   ├── app.component.*
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── angular.json
├── package.json
├── tsconfig.json
├── docker-compose.yml
├── .prettierrc
├── .eslintrc.json
├── .gitignore
└── README.md
```

## API Endpoints

```
GET    /api/employees           - Obtener todos los empleados
GET    /api/employees/:id       - Obtener empleado por ID
POST   /api/employees           - Crear nuevo empleado
PUT    /api/employees/:id       - Actualizar empleado
DELETE /api/employees/:id       - Eliminar empleado
```

## Modelo de Datos (Employee)

```typescript
interface Employee {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  position: string;
  salary: number;
  hireDate: Date;
  status: 'active' | 'inactive';
}
```

## Configuración de Desarrollo

### Variables de Entorno

Crear archivo `.env` en la raíz:

```env
API_URL=http://localhost:3001/api
NODE_ENV=development
```

## Extensiones Recomendadas

- Angular Language Service
- TypeScript Vue Plugin
- ESLint
- Prettier
- Docker
- Thunder Client (para testing de APIs)

## Troubleshooting

### Puerto 4200 ya está en uso
```bash
ng serve --port 4300
```

### Errores de permisos en Docker
```bash
sudo usermod -aG docker $USER
newgrp docker
```

### Limpiar cache de Docker
```bash
docker system prune -a
```

## Próximos Pasos

1. Integrar con backend API en puerto 3001
2. Implementar autenticación y JWT
3. Agregar más validaciones personalizadas
4. Implementar búsqueda y filtros avanzados
5. Agregar importación/exportación de datos
6. Implementar reportes y analytics
7. Agregar paginación y ordenamiento

## Licencia

MIT

## Autor

Creado para demostración de Angular 21 + PrimeNG + Docker

---

**Notas importantes:**

- Asegúrate de que el backend esté corriendo en puerto 3001
- El frontend Angular estará disponible en http://localhost:4200
- El backend debe retornar respuestas en formato: `{ success: boolean, message: string, data: any }`
