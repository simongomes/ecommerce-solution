# eCommerce Solution

This is a comprehensive **eCommerce platform** built with **React**, **Redux**, and **TypeScript**, following modern development standards and clean architecture principles. The application is designed to scale and offers features like product listings, cart functionality, and a seamless checkout experience.

## Features

- **Product Catalog**: Displays products with descriptions, images, prices, and ratings.
- **Cart Functionality**: Users can add, update, and remove items from the cart.
- **Checkout Flow**: Complete checkout process.
- **Related Products**: Dynamic product recommendations based on category.
- **Responsive Design**: Optimized for both mobile and desktop.
- **State Management**: Utilizes Redux for global state handling.
- **Testing**: Unit tests for components and state management using Vitest.

## Tech Stack

- **React** (v18+)
- **Redux** (Basic redux store setup)
- **TypeScript**
- **Vite** (for fast development builds)
- **Ant Design** (UI Components)
- **Vitest** (for unit testing)

## Project Setup and Architecture

This project follows a modular and feature-based structure:

- **Modular Design**: Each feature, such as products or cart, is encapsulated within its own module.
- **Redux for State Management**: Centralized state management using Redux allows for scalable and predictable state management.
- **React Components**: Components are broken into small, reusable parts, with shared components located in the `components/` directory.
- **Vite for Development**: Vite offers faster builds, HMR (Hot Module Replacement), and a lean setup for modern front-end frameworks.
- **Testing**: Unit tests for all components and Redux logic are located in `src/tests/`.

### Folder Structure

```
ecommerce-solution/
├── public/
├── src/
│   ├── components/         # Shared UI components
│   ├── modules/            # Feature modules (Product, Cart, etc.)
│   ├── store/              # Redux store, reducers, actions, and thunks
│   ├── styles/             # Global styles
│   ├── tests/              # Unit and integration tests
│   ├── utils/              # Utility functions
│   ├── App.tsx             # Main App component
│   └── index.tsx           # React entry point
|-- package.json            # Project dependencies and scripts
└── vite.config.ts          # Vite configuration
```

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/simongomes/ecommerce-solution.git
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## Testing

Run unit tests with **Vitest**:

```bash
npm run test
```

Tests are stored in the `src/tests/` directory and ensure the integrity of components and state logic.

## Contributing

Contribution will be allowed for company employees (developers and engineers).

## License

This project licensed will be determined by company requirement.
