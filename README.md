# Portfolio Website

A modern, responsive portfolio site built with Next.js (App Router), TypeScript, and Tailwind CSS v4, with a token-driven design system (light + dark themes).

## 🚀 Features

- **Modern Design**: Clean and professional design with dark mode support
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js for optimal performance
- **TypeScript**: Type-safe development with TypeScript
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Component-Based**: Modular components for easy maintenance
- **SEO Optimized**: Built-in SEO features with Next.js

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Custom React components
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
portfolio-site/
├── app/                       # Next.js App Router routes
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Tailwind v4 theme + base styles
│   └── tokens/               # Design token reference page
├── src/
│   ├── components/           # Reusable components
│   ├── design-tokens/        # Generated TS token map
│   ├── lib/                  # App data/config
│   └── styles/               # Generated CSS variables
├── design-tokens/             # Token source of truth + exports
│   ├── tokens.light.json      # Light theme token source
│   ├── tokens.dark.json       # Dark theme token source (overrides)
│   └── dtcg/                  # DTCG exports (interoperability)
├── public/                    # Static assets
├── package.json              # Dependencies and scripts
└── README.md                # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Personal Information

1. Update your name in `src/components/Header.tsx`
2. Modify the hero section in `app/page.tsx`
3. Update the about section with your information
4. Edit project data in `src/lib/projects.ts`

### Styling

- Global theme + utilities live in `app/globals.css`
- Tokens are generated into `src/styles/theme.css` (`@theme { ... }` + `.dark { ... }`)

### Adding Projects

To add new projects, edit `src/lib/projects.ts`:

```typescript
{
  id: 4,
  title: "Your Project Name",
  description: "Project description",
  technologies: ["React", "Node.js", "MongoDB"],
  gradientFrom: "from-red-400",
  gradientTo: "to-orange-500",
  liveUrl: "https://your-project.com",
  sourceUrl: "https://github.com/yourusername/project"
}
```

## 🎨 Design Tokens (Light + Dark)

### Sources of truth
- `design-tokens/tokens.light.json`: light theme token values (full set)
- `design-tokens/tokens.dark.json`: dark theme overrides (only tokens that change)

### Generated outputs (do not edit by hand)
- `src/styles/theme.css`: `@theme { ... }` tokens + `.dark { ... }` overrides
- `src/design-tokens/tokens.ts`: flattened token map used by the `/tokens` page

### Token reference page
- Visit `/tokens` while developing to see rendered tokens for both themes.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

Dark mode is class-based (`.dark` on `<html>`). A small inline script in `app/layout.tsx` sets it from `localStorage` or the system preference.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - TypeScript `tsc --noEmit` (no build output)
- `npm run tokens:gen` - Generate CSS/TS from `design-tokens/tokens.*.json`
- `npm run tokens:pull` - Pull light tokens from Figma variable defs into `design-tokens/tokens.light.json`
- `npm run tokens:sync` - `tokens:pull` then `tokens:gen`
- `npm run tokens:dtcg` - Export DTCG token files (light + dark) to `design-tokens/dtcg/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)

## 🔁 DTCG Export (Interoperability)

This repo can export tokens in the W3C DTCG format for use with external tooling.

- **Outputs**:
  - `design-tokens/dtcg/tokens.light.json`
  - `design-tokens/dtcg/tokens.dark.json`
- **Command**: `npm run tokens:dtcg`
