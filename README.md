<p align="center">
    <img src="src/assets/logo.png" alt="HSR Technology Logo" width="200" />
</p>

# HSR Technology - Corporate Website Frontend

This repository contains the frontend code for the HSR Technology corporate website. It is a modern, responsive, multi-page web application built with React and Vite, designed to showcase the company's services, products, and information.

## Features

  * **Multi-Page Navigation**: Fully routed application using `react-router-dom` to navigate between pages without full reloads.
  * **Component-Based Structure**: Organized into logical components for maintainability and reusability.
  * **Responsive Design**: CSS styles adapt for optimal viewing on desktop, tablet, and mobile devices.
  * **Consistent UI/UX**: A unified dark-mode theme with a consistent gradient color palette (`#0a0f1f` background, blue/purple/pink accents) is applied across all pages.
  * **Glassmorphism Effect**: A modern, blurred-glass effect is used for the standalone Login page.

### Pages Included

  * **Home**: Landing page with a hero section, service overviews, client testimonials, and CTA banners.
  * **About Us**: Company story and mission.
  * **Services**: A grid detailing the company's service offerings.
  * **Products**: A grid showcasing company products, including a "Coming Soon" state.
  * **Contact Us**: A multi-section page with contact details, a web form, and a map location.
  * **Login**: A standalone page with a "glass" UI for user authentication.

## Tech Stack

  * **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
  * **[Vite](https://vitejs.dev/)**: A modern frontend build tool that provides a fast development experience.
  * **[React Router](https://reactrouter.com/)**: For declarative, client-side routing.
  * **CSS3**: Custom CSS for all styling, using Flexbox and CSS Grid for layouts.

## Project Setup

### Prerequisites

  * Node.js (v18.x or higher recommended)
  * npm (or yarn)

### Installation

1.  Clone the repository:

    ```bash
    git clone https://your-repository-url/Hsrtech.git
    cd Hsrtech
    ```

2.  Install the project dependencies:

    ```bash
    npm install
    ```

## Available Scripts

In the project directory, you can run the following commands:

### `npm run dev`

Starts the development server.
Open [http://localhost:5173](https://www.google.com/search?q=http://localhost:5173) (or the port specified in your console) to view it in your browser. The page will hot-reload as you make edits.

### `npm run build`

Bundles the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`

Lints the project files using ESLint to find and fix problems in your JavaScript code.

### `npm run preview`

Serves the production build from the `dist` folder locally. This is a way to test the final app *after* running `npm run build`.

## Project Structure

```
Hsrtech/
├── public/
│   └── (static assets)
├── src/
│   ├── assets/
│   │   ├── bc.jpg         (Background image)
│   │   └── logo.png       (Site logo)
│   ├── components/
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Layout.jsx     (Shared layout with Navbar)
│   │   ├── Login.jsx
│   │   ├── Login.css
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Products.jsx
│   │   ├── Products.css
│   │   ├── Services.jsx
│   │   └── Services.css
│   ├── App.jsx            (Main router configuration)
│   ├── App.css
│   ├── index.css          (Global styles)
│   └── main.jsx           (React entry point, router setup)
├── .gitignore
├── eslint.config.js
├── index.html           (Vite entry HTML)
├── package.json
└── vite.config.js
```