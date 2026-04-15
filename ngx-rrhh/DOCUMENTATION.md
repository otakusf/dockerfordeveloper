# 🚀 Proyecto NGX-RRHH - Documentación Completa

## 📋 Descripción General

**NGX-RRHH** es una aplicación completa de gestión de recursos humanos construida con:

- **Frontend**: Angular 21 + PrimeNG
- **Backend**: Conecta con API REST en proyecto externo (puerto 3001)
- **DevContainer**: Docker + VS Code Remote Containers
- **Testing**: Jasmine + Karma
- **Code Quality**: ESLint + Prettier

## ✨ Características Principales

✅ **CRUD Completo** - Crear, leer, actualizar y eliminar empleados  
✅ **Formularios Reactivos** - Validaciones avanzadas con FormBuilder  
✅ **Componentes PrimeNG** - UI profesional y moderna  
✅ **Comunicación con Backend** - HttpClient tipado  
✅ **DevContainer** - Ambiente de desarrollo containerizado  
✅ **Docker Compose** - Orquestación de servicios  
✅ **Notificaciones** - Toast y confirmar diálogos  
✅ **Responsive Design** - Funciona en desktop y móvil  
✅ **Testing** - Spec files incluidos  
✅ **Linting & Formatting** - ESLint y Prettier configurados  

## 📁 Estructura del Proyecto

```
ngx-rrhh/
├── .devcontainer/                  # Configuración de DevContainer
│   ├── devcontainer.json          # Configuración del contenedor
│   ├── Dockerfile                 # Imagen base personalizada
│   └── docker-compose.yml         # Servicios containerizados
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── crud/              # Componente CRUD principal
│   │   │       ├── crud.component.ts
│   │   │       ├── crud.component.html
│   │   │       ├── crud.component.scss
│   │   │       └── crud.component.spec.ts
│   │   │
│   │   ├── services/
│   │   │   ├── api.service.ts     # Servicio HTTP para API
│   │   │   ├── api.service.spec.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── models/
│   │   │   ├── employee.model.ts  # Interfaces y tipos
│   │   │   └── index.ts
│   │   │
│   │   ├── app.component.*        # Componente raíz
│   │   ├── app.config.ts          # Configuración de app
│   │   └── app.routes.ts          # Rutas de la aplicación
│   │
│   ├── environments/
│   │   ├── environment.ts         # Configuración producción
│   │   └── environment.development.ts
│   │
│   ├── index.html
│   ├── main.ts
│   ├── styles.scss
│   └── test.ts
│
├── angular.json                    # Configuración de Angular
├── tsconfig.json                   # Configuración de TypeScript
├── karma.conf.js                   # Configuración de tests
├── package.json                    # Dependencias del proyecto
├── docker-compose.yml              # Composición de Docker
├── .prettierrc                      # Configuración de Prettier
├── .eslintrc.json                  # Configuración de ESLint
├── .gitignore
├── .dockerignore
├── README.md
├── CONTRIBUTING.md
├── CHANGELOG.md
└── ngx-rrhh.code-workspace
```

## 🚀 Inicio Rápido

### Opción 1: DevContainer (Recomendado)

Abre el proyecto en VS Code y:
1. Presiona `Ctrl+Shift+P` (o `Cmd+Shift+P` en Mac)
2. Busca "Remote-Containers: Reopen in Container"
3. Espera a que se compile la imagen y se instalen las dependencias
4. Listo para desarrollar

### Opción 2: Local con Node.js

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo (puerto 4200)
npm start

# Compilar para producción
npm run build
```

### Opción 3: Docker Compose

```bash
# Levantar todos los servicios
docker-compose up -d

# Ver logs
docker-compose logs -f app

# Detener
docker-compose down
```

## 🛠️ Comandos Disponibles

```bash
# Desarrollo
npm start                # Inicia servidor en http://localhost:4200
npm run dev              # Alias de start con emojis

# Build
npm run build            # Compilar para producción
npm run watch            # Watch mode para desarrollo

# Testing
npm test                 # Ejecutar tests
npm run lint             # Ejecutar linter

# Docker
docker-compose up        # Iniciar servicios
docker-compose down      # Detener servicios
docker-compose logs -f   # Ver logs en tiempo real
```

## 📦 Dependencias Principales

### Frontend
```json
{
  "@angular/core": "^21.0.0",
  "@angular/forms": "^21.0.0",
  "@angular/router": "^21.0.0",
  "@angular/common": "^21.0.0",
  "primeng": "^18.0.0",
  "primeicons": "^6.0.1",
  "rxjs": "^7.8.0"
}
```

### DevTools
```json
{
  "@angular/cli": "^21.0.0",
  "@angular-eslint/eslint-plugin": "^18.0.0",
  "prettier": "^3.0.0",
  "typescript": "^5.6.0",
  "karma": "^6.4.0",
  "jasmine-core": "^5.1.0"
}
```

## 🔌 API Endpoints

Todos los endpoints están en `http://localhost:3001/api`

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/employees` | Obtener todos los empleados |
| GET | `/api/employees/:id` | Obtener empleado por ID |
| POST | `/api/employees` | Crear nuevo empleado |
| PUT | `/api/employees/:id` | Actualizar empleado |
| DELETE | `/api/employees/:id` | Eliminar empleado |

## 📊 Modelo de Datos

```typescript
interface Employee {
  id?: number;
  firstName: string;           // Nombre
  lastName: string;            // Apellido
  email: string;               // Correo electrónico
  phone: string;               // Teléfono (10 dígitos)
  department: string;          // Departamento
  position: string;            // Posición/Puesto
  salary: number;              // Salario
  hireDate: Date;              // Fecha de contratación
  status: 'active' | 'inactive'; // Estado
}
```

## 🎨 Componentes PrimeNG Utilizados

- **DataTable** - Tabla de empleados con paginación
- **Dialog** - Modal para crear/editar
- **Button** - Botones de acción
- **InputText** - Campos de texto
- **InputNumber** - Campos numéricos
- **Dropdown** - Seleccionar opciones
- **Calendar** - Selector de fechas
- **Toast** - Notificaciones
- **ConfirmDialog** - Confirmar eliminaciones

## 🔒 Validaciones de Formulario

- **Nombre**: Mínimo 2 caracteres, requerido
- **Apellido**: Mínimo 2 caracteres, requerido
- **Email**: Formato válido de email, requerido
- **Teléfono**: 10 dígitos, números solo
- **Posición**: Mínimo 3 caracteres, requerido
- **Salario**: Número positivo, requerido
- **Fecha**: Requerida
- **Departamento**: Requerido
- **Estado**: Requerido (activo/inactivo)

## 🧪 Testing

```bash
# Ejecutar tests
npm test

# Tests en CI/CD
npm test -- --watch=false --browsers=ChromeHeadless

# Coverage
npm test -- --code-coverage
```

Los tests incluyen:
- ✅ ApiService tests
- ✅ CrudComponent tests
- ✅ Validaciones de formulario
- ✅ Métodos de CRUD

## 📝 Configuración VSCode

El workspace incluye configuración automática para:
- ✅ Prettier (formateador de código)
- ✅ ESLint (linter)
- ✅ Angular Language Service
- ✅ TypeScript support

Extensiones recomendadas:
- Angular Language Service
- ESLint
- Prettier
- Docker
- TypeScript Vue Plugin

## 🐛 Troubleshooting

### Puerto 4200 en uso
```bash
ng serve --port 4300
```

### Errores de conexión a DB
```bash
# Verificar que el contenedor de DB está corriendo
docker-compose logs db

# Recrear el contenedor
docker-compose down
docker-compose up --build
```

### Limpiar cache de Docker
```bash
docker system prune -a
docker volume prune
```

### Permisos en Docker (Linux)
```bash
sudo usermod -aG docker $USER
newgrp docker
```

## 📚 Documentación Adicional

- [Angular 21 Docs](https://angular.io/docs)
- [PrimeNG Components](https://primeng.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [RxJS Documentation](https://rxjs.dev/)
- [Angular Testing Guide](https://angular.io/guide/testing)

## 🔄 Flujo de Desarrollo

1. **Crear**: Haz cambios en los archivos
2. **Guardar**: Prettier formatea automáticamente
3. **Validar**: ESLint revisa el código
4. **Testear**: Ejecuta npm test
5. **Build**: npm run build
6. **Deploy**: Sube a producción

## 🚀 Próximos Pasos

### Corto Plazo
- [ ] Conectar con backend API en puerto 3001
- [ ] Integrar con endpoints del backend
- [ ] Testing end-to-end
- [ ] Manejo avanzado de errores

### Mediano Plazo
- [ ] Autenticación y autorización (JWT)
- [ ] Búsqueda y filtrados avanzados
- [ ] Exportación de datos (CSV, PDF)
- [ ] Paginación y ordenamiento

### Largo Plazo
- [ ] Dashboard de administrativo
- [ ] Reportes avanzados
- [ ] Analytics
- [ ] Multi-idioma
- [ ] Temas personalizables

## 📄 Licencia

MIT License - Libre para usar en proyectos personales y comerciales.

## 👨‍💻 Contribuciones

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/NuevaFeature`)
3. Commit tus cambios (`git commit -m 'Add NuevaFeature'`)
4. Push a la rama (`git push origin feature/NuevaFeature`)
5. Abre un Pull Request

Ver [CONTRIBUTING.md](CONTRIBUTING.md) para más detalles.

## 📞 Soporte

Si tienes dudas o problemas:

1. Revisa la documentación en README.md
2. Chequea los issues en GitHub
3. Consulta la guía de troubleshooting
4. Crea un nuevo issue

## 🎉 ¡Agradecimientos!

Gracias por usar NGX-RRHH. Esperamos que sea útil para tu proyecto.

---

**Última actualización**: Abril 2024  
**Versión**: 1.0.0  
**Estado**: ✅ Listo para producción
