# 🍳 DevSnack — Recipe & Snack Finder

## Overview
DevSnack is a web app that helps users quickly find meal or snack ideas using ingredients they already have.  
It’s built with **React, TailwindCSS, and Vite**, following professional workflows from design → development → testing → deployment.

This project is part of my portfolio to demonstrate:
- API integration & search/filter UX
- State management & persistence (favorites)
- Responsive + accessible UI design
- Professional Git/GitHub workflows

---

## Features (Planned)
- 🔍 **Search & Filter Recipes** by name or ingredient
- 📖 **Recipe Details** (ingredients, steps, image)
- ⭐ **Favorites** page (persistent with localStorage)
- ⚡ **Responsive & Fast** (Lighthouse ≥ 90)
- ♿ **Accessible** (keyboard nav, contrast, ARIA basics)
- 🚨 Clear **loading, empty, and error states**

---

## Tech Stack
- [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- LocalStorage for persistence
- Deployed on [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/)

---

## Project Status
🚧 **In Progress — Day 1 (Design Phase)**  
- [x] Requirements gathered  
- [x] Wireframes in Figma (`/design`)  
- [ ] Development setup (Day 2)  
- [ ] Core features (Day 3–5)  
- [ ] QA + Deployment (Day 6–7)  

---

## Folder Structure (Planned)
devsnack/
├── public/ # Static assets
├── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Page-level components
│ ├── hooks/ # Custom React hooks
│ ├── lib/ # Utilities/helpers
│ ├── assets/ # Images/icons
│ └── types/ # TypeScript types (from Project 2 onward)
├── docs/ # Docs, screenshots, diagrams
├── design/ # Wireframes & style guide exports
└── README.md

yaml
Copy code

---

## Definition of Done (DoD) for v1.0
- Functional: search, detail, favorites working
- Non-functional: responsive, accessible, performant
- Lighthouse ≥ 90 on mobile
- Deployed live (Vercel/Netlify)
- README with screenshots + Loom walkthrough
- Tagged release `v1.0.0`

---

## License
MIT License