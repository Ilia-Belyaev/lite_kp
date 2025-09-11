# 🎬 Lite-KP

**Lite-KP** is a simplified version of the popular Russian movie service _KinoPoisk_.  
This project features a clean UI, dynamic filtering, routing, and a custom portal component — all built as a personal initiative to demonstrate front-end development skills.

🔗 **Live Demo**: [https://your-vercel-link.vercel.app](https://your-vercel-link.vercel.app)

---

## ✨ Features

- 🔍 **Movie Search by Genre** — filter movies by selected genre using Ant Design components
- 🎠 **Genre Carousel** — interactive carousel with genres
- 🎞 **Paginated Movies List** — shows 12 movies by default, with a "Show More" button to load more
- 📄 **Movie Detail Page** — routing-based detailed view with tabs: _About_ and _Details_
- 👥 **Actors Modal (Portal)** — custom modal to display full list of cast members, rendered via portal
- 🔝 **Scroll-To-Top Button** — appears on scroll, powered by Ant Design
- 📩 **Footer** — includes author info and contact links

---

## 📷 Screenshots

### 🏠 Home Page

![Home Page Screenshot](./screenshots/home-page.png)

---

### 🎬 Movie Details Page

![Movie Details Screenshot](./screenshots/movie-details-page.png)

---

## 🧱 Tech Stack

- **React** + **TypeScript (types only)**
- **Redux Toolkit** for state management
- **React Router** for navigation
- **Ant Design (AntD)** UI components
- **Axios** for API calls
- **Vite** for bundling & development
- **Vitest** for testing (coming soon)
- External API from _KinoPoisk_

---

## 🚀 Getting Started

To run the project locally, follow these steps:

1. **Get your API token**  
   Visit [https://api.kinopoisk.dev/documentation](https://api.kinopoisk.dev/documentation) and sign up to get a personal API token.

2. **Clone the repository and install dependencies**

   ```bash
   git clone https://github.com/Ilia-Belyaev/lite-kp.git
   cd lite-kp
   npm install
   ```

3. **Create a `.env` file in the root folder**  
   Add your token in the following format:

   ```
   VITE_API_KEY=YOUR_TOKEN_HERE
   ```

4. **Start the development server**

   ```bash
   npm run start
   ```

---

Or, you can simply check out the **[Live Demo](https://your-vercel-link.vercel.app)**.
сп

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
├── hooks/            # Custom React hooks
├── images/           # Static images and assets
├── models/           # TypeScript types and models
├── pages/            # Full pages used in routing (e.g. HomePage, MoviePage)
├── screenshots/      # Screenshots for README/documentation
├── store/            # Redux Toolkit slices, selectors, and configuration
├── utilities/        # Helper functions for cleaner component logic
└── App.tsx           # Root component
```

---

### Future Plans

- Writing tests for components to improve reliability and maintainability.

## 👨‍💻 Author

- **Your Name**
- 📍 Moscow, Zelenograd
- 📧 ilya.belyaev.95@list.ru
- 🔗 [GitHub](https://github.com/Ilia-Belyaev)
- 💼 [LinkedIn](https://www.linkedin.com/in/ilya-belyaev-5ba55a1ab)
- 📱 +7 (999) 123-45-67

---

## 📄 License

This project is for personal and educational purposes only.  
API data belongs to their respective providers (e.g., KinoPoisk).
