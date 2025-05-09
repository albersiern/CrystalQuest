# Crystal Quest

A puzzle adventure game inspired by The Witness, featuring interactive puzzles and labyrinths. Built with React, Phaser, and Capacitor for cross-platform deployment.

## Technology Stack

- **React**: Frontend framework
- **TypeScript**: Type-safe JavaScript
- **Phaser**: Game engine for interactive puzzles
- **Three.js**: 3D graphics rendering
- **Capacitor**: Native app wrapper for mobile deployment
- **Vite**: Fast build tool and development server
- **React Router**: Navigation between game sections
- **Howler.js**: Audio library
- **TweenJS**: Animation library
- **Ammo.js**: Physics engine
- **Draco**: 3D compression library

## Development

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser to `http://localhost:3000`

### Building for Web

```bash
npm run build
```

### Building for Mobile

#### Android

```bash
npm run build
npx cap add android
npx cap sync android
npx cap open android
```

#### iOS

```bash
npm run build
npx cap add ios
npx cap sync ios
npx cap open ios
```

## Project Structure

- `/src/components`: React components
- `/src/game`: Phaser game files
  - `/src/game/scenes`: Game scenes
  - `/src/game/config.ts`: Phaser configuration
- `/public/assets`: Game assets (images, audio, etc.)

## Features

- Interactive puzzles similar to The Witness
- Complex labyrinths with unique challenges
- Seamless integration between React UI and Phaser game
- Mobile-ready with Capacitor
