# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

KerHope is a React application built with TypeScript, Vite, and Tailwind CSS. This is a minimal React + TypeScript + Vite template setup with Hot Module Replacement (HMR) and modern tooling.

## Development Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (runs TypeScript compilation then Vite build)
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview production build locally

## Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7.x
- **Styling**: Tailwind CSS 4.x with Vite plugin
- **Linting**: ESLint 9.x with TypeScript ESLint
- **Type Checking**: TypeScript 5.8.x

## Project Structure

```
src/
  ├── main.tsx          # Application entry point
  ├── App.tsx           # Main App component
  ├── App.css           # Component-specific styles
  ├── index.css         # Global styles and CSS reset
  ├── vite-env.d.ts     # Vite environment types
  └── assets/           # Static assets (images, icons)
public/                 # Static public assets
```

## Build Configuration

- **Vite Config**: Uses React plugin and Tailwind CSS Vite plugin
- **TypeScript**: Project references setup with separate configs for app and Node.js tools
- **ESLint**: Configured with TypeScript ESLint, React Hooks, and React Refresh plugins

## Development Notes

- Application uses React 19 with StrictMode enabled
- Hot Module Replacement is configured for fast development iteration
- ESLint is configured with modern flat config format
- Tailwind CSS is integrated via Vite plugin for optimal performance
- TypeScript strict mode enabled with separate configs for different environments