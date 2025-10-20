# Brayan Mlawa - Portfolio Website

A modern, responsive portfolio website showcasing the work and skills of Brayan Mlawa, a Full-Stack Web & Web3 Developer from Tanzania.

## 🚀 Features

- **Modern UI/UX**: Built with React, TypeScript, and Tailwind CSS for a sleek, professional design
- **Dark Theme**: Elegant dark mode interface with smooth animations
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Interactive Sections**:
  - Hero section with animated typing effect
  - About section
  - Skills showcase
  - Project portfolio
  - Testimonials
  - Blog section
  - Achievements
  - Contact form with EmailJS integration
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **Component Library**: Built with shadcn/ui for consistent, accessible components
- **Form Validation**: React Hook Form with Zod schema validation
- **Routing**: React Router for seamless navigation

## 🛠️ Tech Stack

### Frontend
- **React 18.3** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Component library
- **Radix UI** - Accessible component primitives

### Key Libraries
- **Framer Motion** - Animations
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **React Router DOM** - Routing
- **TanStack Query** - Data fetching
- **EmailJS** - Email integration
- **Lucide React** - Icons
- **React Type Animation** - Typing effects
- **Recharts** - Data visualization

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sidewalk
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Set up environment variables** (if needed for EmailJS)
   Create a `.env` file in the root directory with your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## 🚀 Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## 🏗️ Build

### Production Build
```bash
npm run build
```

### Development Build
```bash
npm run build:dev
```

## 🧹 Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## 📁 Project Structure

```
sidewalk/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and media files
│   ├── components/     # React components
│   │   ├── sections/   # Page sections (Hero, About, Skills, etc.)
│   │   └── ui/         # shadcn/ui components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── pages/          # Page components
│   │   ├── Index.tsx   # Main portfolio page
│   │   └── NotFound.tsx # 404 page
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tailwind.config.ts  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
```

## 🎨 Customization

### Updating Content
- **Personal Info**: Edit `index.html` for meta tags and title
- **Hero Section**: Modify `src/components/sections/Hero.tsx`
- **Skills**: Update `src/components/sections/Skills.tsx`
- **Projects**: Edit `src/components/sections/Projects.tsx`
- **Contact**: Configure `src/components/sections/Contact.tsx`

### Styling
- Global styles: `src/index.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Use Tailwind utility classes

### Adding New Sections
1. Create a new component in `src/components/sections/`
2. Import and add it to `src/pages/Index.tsx`

## 🌐 Deployment

The project can be deployed to any static hosting service:

- **Vercel**: `vercel deploy`
- **Netlify**: Connect your Git repository
- **GitHub Pages**: Build and deploy the `dist` folder
- **Custom Server**: Upload the `dist` folder after building

## 📄 License

This project is private and proprietary.

## 👤 Author

**Brayan Mlawa**
- Full-Stack Web & Web3 Developer
- Location: Tanzania
- Specialties: React, Next.js, Python, Django, Solidity, Blockchain Development

## 🤝 Contributing

This is a personal portfolio project. For suggestions or issues, please contact the author directly.

---
