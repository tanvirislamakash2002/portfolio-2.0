
# Tanvir Islam Akash - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui. Showcasing my skills, projects, and experience as a MERN Stack Developer.

## 🚀 Live Demo

[View Live Portfolio](https://tanvir-islam-akash.vercel.app/)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
- [Contact](#contact)

## ✨ Features

- ⚡ **Next.js 15** with App Router for optimal performance
- 🎨 **shadcn/ui** components for beautiful, accessible UI
- 🌓 **Dark/Light mode** support
- 📱 **Fully responsive** design for all devices
- 🎭 **Smooth animations** with Framer Motion
- 📝 **Contact form** with TanStack Form validation
- 🖼️ **Optimized images** with Next.js Image component
- 🔍 **SEO friendly** with metadata
- ♿ **Accessibility** focused

## 🛠️ Tech Stack

### Core
- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui

### Animations & Interactions
- **Framer Motion** - Page transitions and scroll animations
- **AOS** - Scroll animations (select components)

### Form Handling
- **TanStack Form** - Form validation and state management
- **Sonner** - Toast notifications

### Icons
- **Lucide React** - Primary icon library
- **React Icons** - Additional social and tech icons

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📦 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tanvirislamakash2002/next-portfolio.git
cd next-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
next-portfolio/
├── app/
│   ├── components/        # Reusable UI components
│   ├── project-details/   # Dynamic project detail pages
│   ├── projects/          # Projects listing page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # shadcn/ui components
├── public/                # Static assets
│   ├── projectsData.json  # Projects data
│   └── images/           # Project images
├── lib/                   # Utility functions
└── package.json
```

## 🚀 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts development server |
| `npm run build` | Creates production build |
| `npm run start` | Runs production build |
| `npm run lint` | Runs ESLint for code quality |

## 🌐 Deployment

### Deploy to Vercel (Recommended)

#### Option 1: Without GitHub (Using Vercel CLI)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy from project root:
```bash
vercel
```

3. Follow the prompts and your site will be live!

#### Option 2: With GitHub

1. Push code to GitHub repository
2. Import project on [Vercel](https://vercel.com)
3. Vercel automatically detects Next.js and deploys

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add any environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production, add variables in Vercel dashboard:
- Go to Project Settings → Environment Variables
- Add each variable and redeploy

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- 📱 Mobile devices (320px - 768px)
- 📟 Tablets (768px - 1024px)
- 💻 Desktops (1024px - 1920px)
- 🖥️ Large screens (1920px+)

## 🎨 Customization

### Changing Content

1. **Projects:** Edit `public/projectsData.json`
2. **Skills:** Update arrays in `app/components/SkillsSection.tsx`
3. **Personal Info:** Update text in component files

### Styling

- **Colors:** Modify CSS variables in `app/globals.css`
- **Components:** Customize shadcn/ui components in `components/ui/`

## 📧 Contact

- **Email:** tanvirislamakash2002@gmail.com
- **LinkedIn:** [Tanvir Islam Akash](https://www.linkedin.com/in/tanvir-islam-akash2002)
- **GitHub:** [tanvirislamakash2002](https://github.com/tanvirislamakash2002)
- **Facebook:** [Tanvir Islam Akash](https://www.facebook.com/tanvirislamakash2002)

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ Star this repository if you find it helpful!


## For a Simpler README (Minimal Version):


# Tanvir Islam Akash - Portfolio

My personal portfolio website showcasing my work as a MERN Stack Developer.

## Tech Stack

- Next.js 16
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment

Deployed on Vercel:

```bash
npm install -g vercel
vercel
```

## Contact

- Email: tanvirislamakash2002@gmail.com
- LinkedIn: [Tanvir Islam Akash](https://www.linkedin.com/in/tanvir-islam-akash2002)
- GitHub: [tanvirislamakash2002](https://github.com/tanvirislamakash2002)

## Live Demo

[View Portfolio](https://tanvir-islam-akash.vercel.app/)


## Tips for Your README:

1. **Add screenshots** - Include images of your portfolio
2. **Update the live URL** - Replace with your actual Vercel URL after deployment
3. **Add badges** - Show build status, version, etc.
4. **Keep it updated** - Refresh content as your portfolio evolves

Would you like me to help you customize either version further?