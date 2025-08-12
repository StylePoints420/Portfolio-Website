# Portfolio Website

**Welcome to my portfolio!** :wave:

## How to use this Project

1. Clone the project

```bash
git clone https://github.com/StylePoints420/Portfolio-Website.git
```

2. Install dependencies

```bash
npm i
```

3. Use in development

```bash
npm run dev
```

4. Use in production

```bash
npm run build
npm run serve
```

## Tech Stack

- **React**
- **Typescript**
- **Tanstack Router**
- **Tailwind CSS**

## UI Libraries

- **shadcn/ui** - [A modern and flexible UI components](https://ui.shadcn.com/).
- **Aceternity UI** - Check their website [here](https://ui.aceternity.com/).
- **Magic UI** - Check their website [here](https://magicui.design/).

## Pictures

- **404 Page Image** – [Pixabay](https://pixabay.com/illustrations/warning-error-error-code-mistake-8908707/)

## Project Structure

```bash
src
├── assets
├── components
│   ├── mobile-view-drawer.tsx
│   ├── navbar.tsx
│   ├── nav-links.tsx
│   ├── sections
│   │   ├── education
│   │   │   ├── carousel-component.tsx
│   │   │   └── education-card.tsx
│   │   ├── experience
│   │   │   └── experience-section.tsx
│   │   ├── footer
│   │   │   └── footer-section.tsx
│   │   ├── home
│   │   │   └── hero.tsx
│   │   ├── projects
│   │   │   ├── project-card-content.tsx
│   │   │   ├── project-carousel.tsx
│   │   │   └── project-section.tsx
│   │   └── skills
│   │       ├── skills-section.tsx
│   │       └── tech-stack.tsx
│   └── ui
│       ├── animated-tooltip.tsx
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── border-beam.tsx
│       ├── box-reveal.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       ├── colourful-text.tsx
│       ├── deck.tsx
│       ├── dialog.tsx
│       ├── dot-pattern.tsx
│       ├── dropdown-menu.tsx
│       ├── floating-dock.tsx
│       ├── grid-pattern.tsx
│       ├── hero-video-dialog.tsx
│       ├── img-zoom.tsx
│       ├── input.tsx
│       ├── iphone15-mock.tsx
│       ├── label.tsx
│       ├── lens.tsx
│       ├── navigation-menu.tsx
│       ├── number-ticker.tsx
│       ├── popover.tsx
│       ├── ripple-button.tsx
│       ├── safari-mock.tsx
│       ├── sheet.tsx
│       ├── sparkles.tsx
│       ├── switch.tsx
│       ├── tabs.tsx
│       ├── timeline.tsx
│       ├── tooltip.tsx
│       └── typewriter-effect.tsx
├── constants
│   └── projects
│       └── techStackItems.ts
├── hooks
│   └── use-mobile.ts
├── layouts
├── lib
│   └── utils.ts
├── main.tsx
├── pages
│   └── not-found-page.tsx
├── reportWebVitals.ts
├── routes
│   ├── index.tsx
│   ├── projects.tsx
│   └── __root.tsx
├── routeTree.gen.ts
├── styles.css
├── tests
│   ├── getJSONData.test.ts
│   └── imagePathArray.test.ts
├── themes
│   ├── mode-toggle.tsx
│   └── theme-provider.tsx
├── types
│   └── types.ts
└── utils
    ├── getJSONData.ts
    └── imagePathArray.ts
```

```bash
public/
├── images
│   ├── 404page.png
│   ├── erp_system-mobile.jpg
│   ├── ERP_System.png
│   ├── ncst1.jpg
│   ├── ncst2.jpg
│   ├── ncst3.jpg
│   ├── olrms1.jpg
│   ├── olrms2.jpg
│   ├── olrms3.jpg
│   ├── pcu1.png
│   ├── pcu2.jpg
│   ├── pcu3.jpg
│   └── projects
│       ├── gryn-wasabi
│       │   ├── admin
│       │   │   ├── chat-history-dark.png
│       │   │   ├── chat-history.png
│       │   │   ├── customer-stats-dark.png
│       │   │   ├── customer-stats.png
│       │   │   ├── dashboard2-dark.png
│       │   │   ├── dashboard2.png
│       │   │   ├── dashboard-dark.png
│       │   │   ├── dashboard.png
│       │   │   ├── orders-dark.png
│       │   │   ├── orders.png
│       │   │   ├── payroll-dark.png
│       │   │   ├── payroll.png
│       │   │   ├── products-dark.png
│       │   │   ├── products.png
│       │   │   ├── sales-management-dark.png
│       │   │   └── sales-management.png
│       │   ├── cart.png
│       │   ├── chat-history.png
│       │   ├── checkout.png
│       │   ├── delivery-tracking.png
│       │   ├── gryn-wasabi-demo.png
│       │   ├── order-history.png
│       │   ├── payment-success.png
│       │   └── track-order.png
│       └── shigoto-vault
│           ├── projects-route
│           │   ├── add-manual-dark.png
│           │   ├── add-manual.png
│           │   ├── add-manual-step2-dark.png
│           │   ├── add-manual-step2.png
│           │   ├── add-manual-step3-dark.png
│           │   ├── add-manual-step3.png
│           │   ├── import-links-dark.png
│           │   ├── import-links.png
│           │   ├── job-applications-dark.png
│           │   └── job-applications.png
│           ├── shigoto-vault-dark.png
│           ├── shigoto-vault-mobile-dark.jpg
│           ├── shigoto-vault-mobile.jpg
│           └── shigoto-vault.png
├── json
│   ├── education-details.json
│   ├── project-details.json
│   └── skill-details.json
├── manifest.json
├── robots.txt
└── turtle-icon.svg
```

Structure Reference from [bulletproof-react](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md)

---

Thanks for visiting my portfolio!
