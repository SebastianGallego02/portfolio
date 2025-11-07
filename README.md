##Este es un proyecto de [Next.js](https://nextjs.org/) con React y TypeScript, inspirado en el estilo visual de Hollow Knight.

## Tecnologías Utilizadas

- **Next.js 14** - Framework de React con App Router
- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS utilitario
- **Radix UI** - Componentes de interfaz accesibles
- **Framer Motion** - Animaciones fluidas
- **Lucide React** - Iconos
- **Sonner** - Notificaciones toast

## Características

- ✨ Diseño inspirado en Hollow Knight
- 🎨 Animaciones fluidas con Framer Motion
- 📱 Diseño responsivo
- 🌙 Tema oscuro
- 🎯 Navegación con flip cards
- 💫 Partículas flotantes
- 🎭 Ornamentos góticos

## Empezar

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio
2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```

### Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

### Construcción para Producción

Para construir el proyecto para producción:

```bash
npm run build
# o
yarn build
```

Los artefactos de construcción se almacenarán en el directorio `.next/`.

Para iniciar el servidor de producción:

```bash
npm start
# o
yarn start
```

## Estructura del Proyecto

```
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout raíz
│   └── page.tsx           # Página principal
├── components/            # Componentes reutilizables
│   ├── ui/               # Componentes de UI base
│   └── figma/            # Componentes específicos
├── public/               # Archivos estáticos
└── styles/               # Archivos de estilos adicionales
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter de ESLint