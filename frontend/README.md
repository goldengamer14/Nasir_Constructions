# Nasir Constructions - React TypeScript Project

Modern construction company website built with React, TypeScript, Vite, Refine Core, and Shadcn UI.

## 🚀 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Refine Core** - Headless framework for routing
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Styling
- **Shadcn UI** - Component primitives
- **Lucide React** - Icons

## 📦 Installation

```bash
# Install dependencies
npm install

# Add missing dependency
npm install tailwindcss-animate
```

## 🛠️ Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/             # Shadcn UI components
│   ├── Header.tsx      # Logo & conveyor belt
│   ├── ImageCarousel.tsx
│   └── Navbar.tsx
├── pages/              # Page components
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ServicesPage.tsx
│   └── OtherPages.tsx
├── styles/             # Global styles
├── types/              # TypeScript types
├── utils/              # Utility functions
├── App.tsx             # Main app with routing
└── main.tsx            # Entry point
```

## 🎨 Key Features

✅ **Proper Routing** - React Router v6 with Refine Core
✅ **TypeScript** - Full type safety
✅ **Responsive Design** - Mobile-first Tailwind CSS
✅ **Smooth Carousel** - Sliding animations with pause on hover
✅ **Component Architecture** - Reusable, maintainable components
✅ **Form Validation** - Contact form with validation
✅ **Modern UI** - Shadcn components with custom styling

## 🔄 Migration from Vanilla JS

### What Changed:

1. **Display Tricks → Proper Routing**
   - Before: `display: none/block` toggle
   - After: React Router with actual route navigation

2. **Naming Conventions**
   - HTML/CSS: `kebab-case` (e.g., `home-imgs-wrapper`)
   - TypeScript: `camelCase` (e.g., `homeImgsWrapper`)
   - Components: `PascalCase` (e.g., `ImageCarousel`)

3. **State Management**
   - Before: DOM manipulation
   - After: React state hooks (`useState`, `useCallback`)

4. **Component Structure**
   - Modular, reusable components
   - Props for customization
   - TypeScript interfaces for type safety

## 🎯 Custom Naming Convention

Following your preferred style:

```typescript
// HTML/CSS (kebab-case)
<div id="home-imgs-wrapper" className="home-imgs-wrapper">
  <div id="home-imgs" className="home-imgs-track">

// TypeScript (camelCase matching kebab-case)
const img = {
  homeImgsWrapper: document.getElementById("home-imgs-wrapper"),
  homeImgs: document.getElementById("home-imgs"),
  homeImgElements: Array.from(...)
}
```

## 📱 Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🎨 Color Scheme

```css
--brand-primary: #1d7a1d
--brand-secondary: #28b128
--brand-dark: #1e851e
```

## 🚦 Running the Project

1. Place your images in `public/imgs/` folder
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`
4. Open browser at `http://localhost:5173`

## 📝 Notes

- Form validation is basic - extend as needed
- Add actual project images to `/public/imgs/`
- API integration can be added via Refine data providers
- Extend with authentication if needed

## 🤝 Contributing

Feel free to customize components, add new pages, or enhance functionality!
