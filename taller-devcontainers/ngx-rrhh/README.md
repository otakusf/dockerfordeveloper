# Employee Form - Angular 21

Formulario de empleados con Angular 21 y servicio HTTP.

## Uso en Dev Container

1. Abre el proyecto en VS Code
2. Presiona `Ctrl+Shift+P` → "Dev Containers: Open Folder in Container"
3. Espera a que se instalen las dependencias
4. Ejecuta `npm start`
5. Abre http://localhost:4200

## Uso manual

```bash
cd ngx-rrhh
npm install
npm start
```

## Backend API

El formulario envía datos a `http://localhost:3000/api/empleados`

Ejemplo de respuesta esperada del backend:
```json
{
  "id": 1,
  "nombre": "Juan Pérez",
  "email": "juan@ejemplo.com",
  "puesto": "Desarrollador",
  "departamento": "TI",
  "telefono": "1234567890",
  "fechaIngreso": "2026-04-15"
}
```
