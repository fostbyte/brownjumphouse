# Modern Brown Bouncies - Party Rental Business Website

## Overview

Modern Brown Bouncies is a full-stack web application for a party rental business specializing in bounce house rentals in Sun City Center, FL. The application features a professional business website with a contact form system that allows customers to request quotes for party equipment rentals. The system includes both a customer-facing website and backend infrastructure to manage contact requests and business operations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built using React with TypeScript and follows a component-based architecture. The application uses Vite as the build tool and development server, providing fast hot module replacement and optimized builds. The UI is built with shadcn/ui components and styled using Tailwind CSS with custom color variables for consistent branding.

**Key Frontend Decisions:**
- **React Router Alternative**: Uses Wouter for lightweight client-side routing instead of React Router, reducing bundle size while maintaining essential routing functionality
- **State Management**: Leverages TanStack React Query for server state management, eliminating the need for complex global state solutions like Redux
- **Styling Strategy**: Combines Tailwind CSS utility classes with CSS custom properties for theming, allowing for easy brand customization
- **Component Library**: Uses shadcn/ui for consistent, accessible UI components that can be customized while maintaining design system coherence

### Backend Architecture
The backend is built with Express.js and follows a modular architecture pattern. The server handles API routes for contact form submissions and provides static file serving for the built frontend application.

**Key Backend Decisions:**
- **Storage Abstraction**: Implements an `IStorage` interface with in-memory storage (`MemStorage`) for development, designed to be easily swapped with database implementations
- **Error Handling**: Uses centralized error handling middleware to provide consistent API responses and proper HTTP status codes
- **Request Logging**: Implements custom middleware for API request logging with response time tracking and JSON response capture
- **Development Integration**: Integrates Vite middleware in development mode for seamless hot reloading

### Data Storage Solutions
Currently uses in-memory storage for development with a well-defined interface that can be easily extended to support persistent databases. The schema is defined using Drizzle ORM with PostgreSQL dialect, indicating planned database integration.

**Key Storage Decisions:**
- **Database Preparation**: Drizzle ORM schema is configured for PostgreSQL with proper table definitions for users and contact requests
- **Development Flexibility**: In-memory storage allows for rapid development and testing without database setup requirements
- **Type Safety**: Uses Zod schemas for runtime validation that integrate with TypeScript types and database schemas

### Authentication and Authorization
The current implementation includes user schema definitions but does not yet implement authentication middleware. The architecture is prepared for user authentication with proper schema validation.

### Form Handling and Validation
Implements comprehensive form handling using React Hook Form with Zod validation schemas. The contact form captures customer information including personal details, event information, and special requirements.

**Key Form Decisions:**
- **Validation Strategy**: Uses Zod schemas shared between frontend and backend for consistent validation rules
- **User Experience**: Implements optimistic updates with proper loading states and error handling
- **Data Collection**: Captures essential business information including first-time customer tracking for marketing purposes

### Build and Deployment
The application uses a modern build pipeline that supports both development and production environments with different optimizations for each.

**Key Build Decisions:**
- **Development Mode**: Vite development server with Express API integration for seamless full-stack development
- **Production Build**: Separate build processes for frontend (Vite) and backend (esbuild) with optimized output
- **Asset Management**: Proper static file serving with support for client-side routing in production

## External Dependencies

### Core Framework Dependencies
- **React 18**: Modern React with hooks and concurrent features for optimal user experience
- **Express.js**: Minimal and flexible Node.js web application framework for the backend API
- **TypeScript**: Full TypeScript support across frontend and backend for type safety and better developer experience

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development with custom design system integration
- **shadcn/ui**: High-quality React component library built on Radix UI primitives for accessibility and customization
- **Radix UI**: Headless UI components for complex interactions like dialogs, dropdowns, and form controls
- **Lucide React**: Icon library providing consistent and customizable SVG icons

### Data Management
- **TanStack React Query**: Powerful data synchronization library for server state management with caching and background updates
- **React Hook Form**: Performant forms library with minimal re-renders and excellent TypeScript support
- **Zod**: TypeScript-first schema validation with static type inference

### Database and ORM
- **Drizzle ORM**: Lightweight TypeScript ORM with excellent performance and type safety
- **@neondatabase/serverless**: Serverless PostgreSQL driver optimized for edge environments

### Development Tools
- **Vite**: Next-generation frontend build tool with fast HMR and optimized builds
- **esbuild**: Fast JavaScript bundler for backend builds
- **PostCSS**: CSS processing tool for Tailwind CSS compilation