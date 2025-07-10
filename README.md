# React + Vite + Tailwind CSS Project Setup

This project initializes a modern frontend stack using **React**, **Vite**, and **Tailwind CSS**.

---

## 📁 Folder Structure

This setup is assumed to be inside the `frontend/` directory.

---

## 🚀 Installation Steps

### 1. Navigate to the Project Directory
```bash
cd frontend
```

### 2. Create a Vite + React Project
```bash
npm create vite@latest . -- --template react
```

### 3. Install All Dependencies
```bash
npm install
```

---

## 🎨 Install & Configure Tailwind CSS

### 4. Install Tailwind CSS, PostCSS, and the Vite Plugin
```bash
npm install tailwindcss @tailwindcss/vite
```

### 5. Update Vite Configuration

Edit `vite.config.js` to include Tailwind plugin:
```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
});
```

### 6. Import Tailwind Directives

Add the following to both `src/index.css` and optionally `src/App.css`:
```css
@import "tailwindcss";
```

---

## 🧪 Development

### 7. Start the Dev Server
```bash
npm run dev
```

Your app will be running at: [http://localhost:5173](http://localhost:5173) (or another port if 5173 is in use)

---

## ✅ Tailwind Usage Example

Ensure Tailwind styles are imported in `src/main.jsx`:
```js
import './index.css';
```

Now you can use Tailwind classes directly in JSX:

```jsx
function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  );
}

export default App;
```


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
