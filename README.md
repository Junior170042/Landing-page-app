# 📱 Next-Gen 3D Ecommerce Landing Page

A modern, high-conversion landing page designed with a "cute premium" aesthetic, featuring immersive 3D-style animations and a fully functional (simulated) shopping cart system.

![Portfolio Preview](public/preview-placeholder.png) *(Recommended: Replace with a screenshot of your beautiful redesign)*

## ✨ Design Philosophy

The redesign centers on a **"Cute & Premium"** aesthetic, blending soft pastel tones with sophisticated glassmorphism.

- **Color Palette**: A curated mix of Lavender (`#a78bfa`), Mint (`#34d399`), and Rose (`#fb7185`) to evoke a sense of modern playfulness and high-end quality.
- **Glassmorphism**: Extensive use of backdrop-blur and translucent borders to create depth and a tiered information hierarchy.
- **Typography**: Paired **'Outfit'** (for a geometric, modern tech feel) with **'Montserrat'** for classic, readable body text.
- **3D Interactive Experience**: Leverages parallax effects and floating decorative elements to create a sense of three-dimensional space without the overhead of heavy 3D assets.

## 🛠️ Tech Stack & Tools

- **Core**: [React 19](https://react.dev/) & [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Custom Design System)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (Complex transitions, staggered entries, and 3D parallax)
- **Icons**: [Lucide React](https://lucide.dev/) (Clean, consistent iconography)
- **State Management**: React Context API (Cart functionality)

## 🚀 Key Features

### 1. Immersive Hero Section
- Dynamic parallax scrolling.
- Floating tech-badges with micro-animations.
- High-quality entrance transitions that "wow" the user immediately.

### 2. Custom Shopping Cart System
- **Global Cart State**: Managed via `CartContext` to allow adding products from any section.
- **Sliding Cart Drawer**: A glassmorphic overlay to manage quantities and review totals.
- **Interactive Badges**: Real-time counter updates on the NavBar.

### 3. Dynamic Carousel & Grids
- **Custom Carousel**: Built from scratch with Framer Motion (removing bulky library dependencies) for light-weight, smooth performance.
- **Staggered Product Displays**: Products "float" into view as the user scrolls, creating a premium discovery experience.

### 4. Robust Responsiveness
- Optimized for everything from small mobile screens to large desktop monitors.
- **Smart Logic**: Custom handling for the project's unique Tailwind breakpoint configuration.

## 🏁 Getting Started

1. **Clone the repository**
2. **Install dependencies**: `npm install`
3. **Run development server**: `npm run dev`
4. **Build for production**: `npm run build`

---

*This project was redesigned to demonstrate the bridge between high-end UI design and functional frontend engineering.*
