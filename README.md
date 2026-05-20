# ParvInfoSoft: Premium Next.js & GSAP Creative Tech Ecosystem

ParvInfoSoft is a modern Next.js 14 web application designed as a luxury cinematic agency portfolio and IT consultancy. Combining elite-level motion design with robust, scalable software architecture, this project delivers an immersive Awwwards-grade experience featuring high-performance animations, fluid typography, and intelligent interactive systems.


---

## 💎 Cinematic Motion & Interaction Engine

This platform utilizes **GSAP (GreenSock Animation Platform)** and **ScrollTrigger** coupled with **Lenis Smooth Scroll** to establish a high-fidelity scroll timeline and interactive interface:

### 1. Ultra-Smooth Inertia scrolling
- Initialized via **Lenis Scroll** and synced with the GSAP ticker.
- Ensures zero scroll-jank across all modern devices and displays, syncing dynamic timelines exactly to the browser refresh rate.

### 2. Scroll Velocity Skew (Space Warping)
- Elements decorated with the `.scroll-skew` class (such as portfolio items and services) dynamically skew/tilt (up to ±6 degrees) relative to the active vertical scroll velocity.
- The warp factor smoothly resets to `0deg` using a power-based damping curve as scrolling slows down.

### 3. Dynamic GSAP Custom Cursor
- Features a sub-pixel mouse-tracking cursor utilizing `gsap.quickTo` for instantaneous responsive tracking.
- **Inversion Blend Mode**: Automatically expands and inverts colors (`mix-blend-mode: difference`) over standard interactive components (links, buttons, text inputs).
- **Interactive Action Badges**: Morphs dynamically into a circular text badge displaying tags like `VIEW`, `DISCOVER`, or `FOUNDER` when hovering over elements tagged with `data-cursor`.
- Managed via a dynamic `MutationObserver` to automatically re-bind mouse listeners to dynamically added DOM elements.

### 4. 3D Parallax & Spotlight Glow Grids
- **3D Card Tilting**: Project cards dynamically calculate cursor coordinates relative to their bounding box on mouse move, tilting with 3D perspective while translating background gradients in the opposite direction for a "window-depth" parallax feel.
- **Spotlight Glows**: Services cards track the cursor tip to render a hardware-accelerated radial spotlight glow following the cursor.

### 5. Animated Film Grain
- A subtle, full-screen grainy noise texture overlay (`opacity: 0.015`) runs on a fixed layer, adding an analog film / matte texture to the deep charcoal dark mode.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, React 18, React Server Components)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Native CSS Custom Properties
- **Motion**: [GSAP 3](https://gsap.com/) & [ScrollTrigger](https://gsap.com/scrolltrigger/)
- **Smooth Scroll**: [Lenis](https://github.com/darkroomengineering/lenis)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Transitions**: [Framer Motion](https://www.framer.com/motion/)
- **Fonts**: Sora, Inter, JetBrains Mono, General Sans

---

## 📁 Project Structure

```
├── public/                 # Static assets (images, preloader elements)
├── src/
│   ├── app/                # App router pages, routes, metadata, and schemas
│   │   ├── layout.tsx      # Global layout, Custom Cursor, Preloader, SmoothScroll injection
│   │   └── page.tsx        # Main landing page assembling interactive sections
│   ├── components/         # Highly-optimized client interactive components
│   │   ├── CustomCursor.tsx        # GSAP sub-pixel cursor and badge morphing
│   │   ├── SmoothScroll.tsx        # Lenis smooth-scroll & velocity scroll-skew trigger
│   │   ├── Portfolio.tsx           # 3D parallax project showcase cards
│   │   ├── Services.tsx            # Mouse spotlight-tracking service grids
│   │   ├── Navbar.tsx              # Magnetic layout triggers & navigation
│   │   ├── MeetFounder.tsx         # GSAP ScrollTrigger "Exploded View" assembly
│   │   ├── CinematicStoryScroll.tsx# GSAP-pinned horizontal flowing storytelling ticker
│   │   └── Preloader.tsx           # Boot loader with custom progress counter & TextDecode
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js (v18.x or later)** and **npm** installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Kaushaltiwari27/ParvWebiste.git
   cd ParvWebiste
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

To create an optimized production build:
```bash
npm run build
npm run start
```

---

## 🛡️ License

This project is proprietary. All rights reserved. Created by ParvInfoSoft.
