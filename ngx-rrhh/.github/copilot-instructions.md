<!-- Use this file to provide workspace-specific custom instructions to Copilot. -->

# NGX-RRHH Development Instructions

## Project Overview
- **Project Type**: Angular 21 application with PrimeNG components
- **Purpose**: CRUD application for HR management
- **Architecture**: DevContainer + Docker Compose for full containerization

## Setup Checklist
- [x] DevContainer configuration
- [x] Docker Compose setup (frontend only)
- [x] Angular 21 project structure
- [x] PrimeNG component integration
- [x] CRUD component with form validation
- [x] API service layer
- [x] Employee model
- [x] Styling with SCSS

## Development Guidelines

### Running the Project
1. **DevContainer**: `Ctrl+Shift+P` → "Remote-Containers: Reopen in Container"
2. **Local**: `npm install && npm start`
3. **Docker Compose**: `docker-compose up -d`

### Code Structure
- Components: `src/app/components/`
- Services: `src/app/services/`
- Models: `src/app/models/`
- Styles: `.scss` files with BEM naming

### PrimeNG Components Used
- DataTable (p-table)
- Dialog (p-dialog)
- Button (p-button)
- Input components
- Dropdown
- Calendar
- Toast notifications
- Confirm dialog

### Frontend Architecture
- Standalone components
- Reactive forms with FormBuilder
- Observable patterns with RxJS
- Typed HTTP client
- Path aliases: @app, @components, @services, @assets

## Backend Integration

### Expected API URL
- Base: `http://localhost:3001/api`

### Required Endpoints
- `GET /api/employees` - List all
- `GET /api/employees/:id` - Get single
- `POST /api/employees` - Create
- `PUT /api/employees/:id` - Update
- `DELETE /api/employees/:id` - Delete

### Response Format
```json
{
  "success": boolean,
  "message": string,
  "data": any
}
```

## Ports
- **Frontend**: 4200
- **Backend API**: 3001 (running in external project)

## Testing

```bash
# Run tests
npm test

# Run linting
npm run lint

# Build for production
npm run build
```

## Important Notes

1. **DevContainer**: Automatically installs dependencies on container creation
2. **Docker**: Frontend service configured in docker-compose.yml
3. **Styling**: Global and component-level SCSS with PrimeNG theme integration
4. **Forms**: Reactive forms with built-in validation
5. **Error Handling**: Toast notifications for user feedback
6. **Backend**: Connects to external API on port 3001

## Next Development Steps

1. Connect with backend API running on port 3001
2. Add authentication/authorization
3. Implement search and filters
4. Add data export functionality
5. Create advanced reporting
6. Implement role-based access control

## Useful Commands

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build production
npm run build

# Watch mode
npm run watch

# Tests
npm test

# Linting
npm run lint

# Docker commands
docker-compose up -d      # Start all services
docker-compose down       # Stop all services
docker-compose logs -f    # View logs
```

## VSCode Settings (Included in DevContainer)

- Prettier formatting enabled
- ESLint auto-fix on save
- Angular language support
- TypeScript support
- Docker extension

---

For questions or issues, refer to the README.md file.
