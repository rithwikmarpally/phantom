## Phantom — Contract-Based Elite Developer Landing Page

Premium, conversion-focused landing page for a contract-based elite software developer. Built with the Next.js App Router, strict TypeScript, Tailwind v4, and Framer Motion. Contact is powered by a Server Action with inline validation and a strong success state.

### Stack
- Next.js 16 (App Router) with React 19 and React Compiler
- Tailwind CSS v4 with custom dark theme
- Framer Motion for subtle premium animations
- Lucide icons
- Server Actions for the contact form

### Getting Started
```bash
npm install
npm run dev
# lint before shipping
npm run lint
# production build
npm run build
```
Visit http://localhost:3000 to view the site.

### Key Sections
- Hero with dual CTAs and animated background
- Proof of capability (tech surfaces + delivery metrics)
- Outcome-focused services with conversion CTAs
- Why clients choose me (communication, speed, scale, business-first)
- Selected work with problem / solution / result and stacks
- Scarcity & availability notice
- Contact form with server-side handling and success messaging

### Notes
- Open Graph image lives at /public/og.svg and is referenced in app/layout.tsx.
- The contact action logs submissions server-side; wire to your email/CRM as needed.
