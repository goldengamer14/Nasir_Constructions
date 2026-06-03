# Al Nasir Group Of India — Project Context File
# For AI-assisted development handoff

---

## 1. PROJECT OVERVIEW

**Business:** Al Nasir Group Of India
**Type:** Construction & Real Estate company website
**Tagline:** "Nirman Se Vishwas Tak" / "Strong Construction, Your Unbreakable Trust"
**Operating Area:** Buldhana & Akola districts, Maharashtra, India
**Owner:** Nasir Khan

**Languages used on-site:** Marathi, Hindi, English (mixed — don't translate or change)


---

## 2. TECH STACK

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 5 |
| Routing | React Router v6 + `@refinedev/react-router-v6` |
| State/Resource | `@refinedev/core` (for resource definitions only, no data provider) |
| Styling | Tailwind CSS v3 |
| UI Components | Shadcn UI (manually copied into `/src/components/ui/`) |
| Icons | Lucide React |
| Path Alias | `@` → `./src` |

**Key dependencies from package.json:**
```json
{
  "@refinedev/core": "^4.47.1",
  "@refinedev/react-router-v6": "^4.5.5",
  "react-router-dom": "^6.20.0",
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.0.0",
  "tailwind-merge": "^2.1.0",
  "lucide-react": "^0.294.0"
}
```

**Shadcn UI components installed:**
`button`, `card`, `input`, `label`, `radio-group`, `select`, `textarea`

---

## 3. FOLDER STRUCTURE

```
frontend/
├── public/
│   └── imgs/
│       ├── Logo.jpg              ← Company logo (circular avatar in header)
│       ├── Nasir_Khan.jpg        ← Owner photo (circular avatar in header)
│       ├── Certificate.jpg       ← Company certificate
│       ├── Certificate_2.jpg     ← Company certificate 2
│       ├── A1.jpg                ← Conveyor belt image
│       ├── A2.jpg                ← Conveyor belt image
│       ├── A3.jpg                ← Conveyor belt image
│       ├── Progress.jpeg         ← Used in Current Project page
│       ├── Construction.jpeg     ← Used in Future Project page
│       └── Site_Progress.jpeg    ← Used in carousel
└── src/
    ├── components/
    │   ├── ui/                   ← Shadcn UI components (button, card, input, etc.)
    │   ├── refine-ui/
    │   │   └── theme/
    │   │       └── theme-provider.tsx   ← ThemeProvider (adds/removes 'dark' on <html>)
    │   ├── Header.tsx            ← Logo + auto-scrolling image conveyor belt + Nasir photo
    │   ├── Navbar.tsx            ← Fixed top navbar with mobile hamburger
    │   ├── ImageCarousel.tsx     ← Manual slideshow with autoplay (3s), nav arrows, dots
    │   ├── ContactForm.tsx       ← Contact form with conditional buy/sell dropdowns
    │   └── BuyPageExtra.tsx      ← (legacy — replaced by ContactForm conditional logic)
    ├── constants/
    │   ├── services.ts           ← All 8 services with id, icon, title, description, details
    │   └── images.ts             ← All image paths (primaryImages, conveyorImages, carouselImages)
    ├── pages/
    │   ├── HomePage.tsx
    │   ├── AboutPage.tsx
    │   ├── ServicesPage.tsx
    │   ├── ServiceDetailPage.tsx ← Dynamic page for each service at /services/:serviceId
    │   └── OtherPages.tsx        ← ProjectsDonePage, CurrentProjectPage, FutureProjectPage, ContactPage
    ├── types/
    │   └── index.ts              ← UserFormData, NavItem, CarouselImage, ServiceOption
    └── App.tsx                   ← Routes + Layout + ThemeProvider + Refine
```

---

## 4. ROUTING

All routes defined in `App.tsx`, nested under a `<Layout>` that renders `<Navbar>` + `<Outlet>`:

```
/                       → HomePage
/about                  → AboutPage
/services               → ServicesPage (grid of all service cards)
/services/:serviceId    → ServiceDetailPage (dynamic, based on services.ts id)
/projects-done          → ProjectsDonePage
/current-project        → CurrentProjectPage
/future-project         → FutureProjectPage
/contact                → ContactPage
```

`serviceId` values are the `id` field in `services.ts`:
`new-construction`, `building-repair`, `interior-exterior-design`, `demolition`, `consultation`, `buy-property`, `sell-property`, `layout-development`

---

## 5. THEME SYSTEM

**ThemeProvider** wraps the entire app, toggling a `dark` class on `<html>`.

**CRITICAL CSS RULE:**
Tailwind reads CSS variables as HSL without a wrapper:
```css
/* ✅ CORRECT */
--background: 0 0% 100%;

/* ❌ WRONG — breaks Tailwind */
--background: rgb(231, 229, 228);
--background: hsl(0, 0%, 100%);
```

**However**, the actual `globals.css` has TWO sets of variables:
1. Lines 6–47: HSL format (standard Shadcn) — for Tailwind utility classes
2. Lines after `/* Custom Styles */`: **RGB format** from TweakCN — this is the **visually active theme** using `@theme inline` mapping

The `@theme inline` block at the bottom maps all `--color-*` to the `var(--*)` references, so the RGB-format TweakCN variables ARE what Tailwind sees at runtime (via the `@theme inline` bridge).

**Light mode palette (TweakCN):**
- Background: `rgb(231, 229, 228)` — warm off-white
- Card: `rgb(245, 245, 244)` — light stone
- Primary: `rgb(99, 102, 241)` — indigo
- Border: `rgb(214, 211, 209)`

**Dark mode palette (TweakCN):**
- Background: `rgb(30, 27, 24)` — very dark warm brown
- Card: `rgb(44, 40, 37)` — dark stone
- Primary: `rgb(129, 140, 248)` — light indigo
- Border: `rgb(58, 54, 51)`

**Font:** `Plus Jakarta Sans` (sans), `Lora` (serif), `Roboto Mono` (mono)
**Border radius:** `--radius: 1.25rem` (large, rounded feel)

**Theme toggle** is in the Navbar (exact implementation up to dev — button calls `setTheme("dark"/"light"/"system")`).

---

## 6. KEY COMPONENTS

### Header (`components/Header.tsx`)
- Full-width strip at top of HomePage
- Left: Logo circular image (110px)
- Center: Auto-scrolling conveyor belt of site images (CSS animation `animate-scroll-left`)
- Right: Nasir Khan circular image (110px)
- **Known issue:** Uses `bg-gray-900` (hardcoded) — should be `bg-card border border-border`

### Navbar (`components/Navbar.tsx`)
- Fixed, `z-50`, blur backdrop
- Active route highlighted with `bg-primary text-primary-foreground`
- Mobile: hamburger menu with slide-down panel
- Uses `nav-item-hover` custom CSS class for hover effect (scale + border shadow)

### ImageCarousel (`components/ImageCarousel.tsx`)
- Auto-plays every 3s, pauses on hover (broken — hover logic uses dataset hack, not state)
- Slide animation: `translateX` with cubic-bezier spring easing
- Nav arrows + dot indicators
- Portrait aspect ratio `3/4`
- Uses `brand-primary`, `brand-secondary`, `brand-dark` colors — these may need to be defined in tailwind.config.js

### ContactForm (`components/ContactForm.tsx`)
- Accepts optional `defaultRequirement?: string` prop (service id)
- On mount/prop change: auto-selects that service in the radio group
- **Conditional extra fields:**
  - When `requirement === "buy-property"`: shows 5 dropdowns (property type, budget, location, size, timeframe)
  - When `requirement === "sell-property"`: shows 4 dropdowns + textarea (type, age, condition, expected price, notes)
- Email split into username + domain selector (with custom domain option)
- Phone split into country code + number
- All services listed as RadioGroup items

### ServiceDetailPage (`pages/ServiceDetailPage.tsx`)
- Reads `:serviceId` from URL params
- Looks up service in `services.ts` by `id` — redirects to `/services` if not found
- Renders: Hero card → "What We Offer" + "Why Choose Us" (2-col grid) → Process timeline (if `details.process` exists) → ContactForm (pre-selected)

---

## 7. SERVICES DATA (`constants/services.ts`)

Each service has:
```typescript
interface Service {
  id: string;           // URL slug
  icon: string;         // Emoji
  title: string;
  description: string;  // In Marathi/Hindi
  details?: {
    offers?: string[];
    benefits?: string[];
    process?: Array<{ title: string; description: string }>;
  };
}
```

Current services (8):
| id | icon | title |
|---|---|---|
| `new-construction` | 🏗️ | New Building Construction |
| `building-repair` | 🔧 | Old Building Repairing |
| `interior-exterior-design` | 🎭 | Interior & Exterior Designing |
| `demolition` | 💥 | Old Building Demolition |
| `consultation` | 🔍 | Consultation |
| `buy-property` | 🛒 | Buy |
| `sell-property` | 🏷️ | Sell |
| `layout-development` | 📐 | Layout Development |

---

## 8. IMAGES (`constants/images.ts`)

Images are served from `/public/imgs/` (local) or Cloudinary (migration in progress).

```typescript
primaryImages = {
  logo:  { src: "/imgs/Logo.jpg",       alt: "Al Nasir Logo" },
  nasir: { src: "/imgs/Nasir_Khan.jpg", alt: "Nasir Khan" },
}

conveyorImages = [
  // Images that scroll in the Header conveyor belt
  { src: "/imgs/A1.jpg", alt: "..." },
  { src: "/imgs/A2.jpg", alt: "..." },
  { src: "/imgs/A3.jpg", alt: "..." },
  // ...duplicated for seamless loop
]

carouselImages = [
  // Images shown in the ImageCarousel on HomePage
  { src: "/imgs/Site_Progress.jpeg", alt: "..." },
  // etc.
]
```

**Cloudinary migration:** Images can be bulk-uploaded via Cloudinary dashboard and URLs replaced in `images.ts`. Format:
```
https://res.cloudinary.com/{cloud-name}/image/upload/{filename}
```

---

## 9. TYPES (`types/index.ts`)

```typescript
interface UserFormData {
  email: string;
  emailDomain: string;        // "@gmail.com" | "@yahoo.com" | "@outlook.com" | "@custom.com"
  customDomain?: string;
  phoneCountry: string;       // default "91"
  phoneNumber: string;
  address: string;
  city: string;
  state: string;
  requirement: string;        // service id

  // Buy property extras
  propertyType?: string;
  budgetRange?: string;
  propertyLocation?: string;
  propertySize?: string;
  timeframe?: string;

  // Sell property extras
  sellPropertyType?: string;
  sellPropertyAge?: string;
  sellExpectedPrice?: string;
  sellPropertyCondition?: string;
  additionalNotes?: string;
}

interface NavItem {
  key: string;
  label: string;
  path: string;
}

interface CarouselImage {
  src: string;
  alt: string;
}

type ServiceOption = string; // service id
```

---

## 10. KNOWN ISSUES & PENDING TASKS

### Bugs
1. **Header hardcoded color** — `bg-gray-900` in `Header.tsx` line 8. Should be `bg-card border border-border` for proper theming.
2. **Carousel hover pause broken** — uses `dataset` hack instead of React state. Should use `useState(isPaused)` and `useEffect` with conditional interval.
3. **OtherPages.tsx uses hardcoded colors** — `text-gray-800`, `bg-gray-100`, `bg-white`, `text-gray-600`. Needs to use `text-foreground`, `bg-muted`, `bg-card`, `text-muted-foreground`.
4. **`brand-primary`, `brand-secondary`, `brand-dark`** — referenced in ImageCarousel but may not be defined in `tailwind.config.js`. Needs checking.
5. **ContactForm form submission** — currently only `console.log` + `alert`. No backend integration yet.

### Pending Features
1. **ProjectsDonePage** — Placeholder currently. Needs a photo gallery of completed projects (images TBD).
2. **ContactPage** — Static placeholder (phone/email/address). Should use themed cards, and eventually a real contact form.
3. **CurrentProjectPage / FutureProjectPage** — Currently show single images. Could become proper galleries.
4. **Cloudinary migration** — Replace all `/imgs/*.jpg` paths in `images.ts` with Cloudinary URLs once uploaded.
5. **Form backend** — ContactForm `handleSubmit` needs to POST to an email service (e.g., EmailJS, Formspree, or custom backend).
6. **`designing` service** — Present in the last version of services.ts but may have been dropped. Verify if it should be re-added as the 9th service.
7. **SEO / meta tags** — No `<title>` or `<meta>` customization per page yet.
8. **Scroll-to-top on navigation** — React Router doesn't auto-scroll to top on route change. Needs a `<ScrollRestoration>` or manual `useEffect`.

---

## 11. STYLING CONVENTIONS

- **Never use hardcoded Tailwind colors** (`bg-gray-*`, `text-gray-*`, `bg-white`) in new code. Always use semantic theme variables (`bg-card`, `text-foreground`, `text-muted-foreground`, `bg-muted`, `border-border`).
- **Hover pattern:** `hover:shadow-md hover:-translate-y-1 transition-all duration-300` on cards.
- **Active nav link:** `bg-primary text-primary-foreground`.
- **Service cards:** `cursor-pointer group` class, icon scales with `group-hover:scale-110`.
- **Border radius:** Use `rounded-[var(--radius)]` or `rounded-[var(--radius-md)]` — NOT hardcoded `rounded-xl`.
- **Gradients on hero/accent cards:** `bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900` (intentional, not themed).

---

## 12. WHAT THE OWNER WANTS (INTENTIONS)

- A clean, professional website for a local construction firm targeting Buldhana & Akola region clients
- Multilingual content (Marathi, Hindi, English) — do not translate or remove any regional text
- Light/dark theme toggle (already implemented, visually working)
- Service cards on homepage should be clickable and lead to individual service detail pages
- Each service detail page has its own contact form pre-filled for that service
- Buy/Sell property pages have extra dropdown fields to capture lead details
- Eventually: backend form submission to send inquiries by email or WhatsApp
- Images will be hosted on Cloudinary (upload pending)
- Simple, mobile-first responsive design — nothing overly complex
- The site should feel trustworthy and local, not corporate/generic