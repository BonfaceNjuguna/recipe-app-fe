# Lions Recipe App

A React + TypeScript + Vite application using Firebase authentication and Tailwind CSS.

## Features

- Google authentication with Firebase
- Protected routes and user profile
- Tailwind CSS for styling
- Environment variables for sensitive configuration

## Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/your-username/recipe-app-fe.git
cd recipe-app-fe
```

### 2. Install dependencies

```sh
npm install
```

### 3. Set up environment variables

Create a `.env` file in the project root with your Firebase credentials:

```
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
VITE_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

**Note:**  
`.env` is included in `.gitignore` and will not be committed to version control.

### 4. Run the development server

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

## Scripts

- `npm run dev` – Start the development server
- `npm run build` – Build for production
- `npm run preview` – Preview the production build
- `npm run lint` – Run ESLint

## Technologies Used

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## Linting and Formatting

This project uses ESLint with recommended rules for React and TypeScript.  
See [`eslint.config.js`](eslint.config.js) for configuration details.

## License

MIT