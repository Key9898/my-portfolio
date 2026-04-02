# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
The format is based on [Keep a Changelog](https://keep a changelog.com/en/1.0.0/).

---

## [Unreleased] - 2026-04-01

### Global Animation Overhaul
- **Strict Scroll-Triggering**: Performed a comprehensive animation overhaul using **Framer Motion** with strict **scroll-triggered triggers** (`useInView`) for sequential arrival.
- `ShowcaseCard.tsx`: Standardized developer icons with professional **`FaUser`** (personal) and **`FaUsers`** (team) styles, using consistent slate coloring and tailored sizing (`size-5` for teams, `size-4` for personal) for visual balance.
- `GetInTouch.tsx`: Implemented **Premium UI Upgrade**:
  - `ContactInfo.tsx`: Added professional social links for GitHub and LinkedIn with **'Follow on Social'** refined title and hover animations.
  - `ContactForm.tsx`: Upgraded main form card with **Glassmorphism**, subtle **border-glow**, and `sky-600` focus theme.
  - `ContactForm.tsx`: Added an interactive **Success State** view with a checkmark entrance animation and a "Send another message" link.
- **Character-Perfect Copywriting Overhaul**:
    - `HeroSection.tsx`: Restored title to **"Crafting Digital Experiences"** and updated description.
    - `ContactInfo.tsx`: Restored title to **"Get in touch"** and implemented a compelling new description.
    - `Profile.tsx`: Upgraded Bio to **"Web Engineer"** (removing 'Frontend').
    - `projects.ts`: Added **"Why it matters"** benefit-driven leads to all 10 project descriptions.
- **UI/UX Fine-Tuning & High-Fidelity Polish**:
    - **UI Integrity Fix**: Resolved Expertise Radar card clipping on mobile/tablet via adding `pb-4` padding to Capabilities section.
    - **Boundary Continuity Fix**: Resolved a 1px sub-pixel rendering gap between Capabilities and Showcase on Mobile/Tablet via `-mt-px` overlap.
    - **Final Vertical Gap Standardization**: Standardized all section gaps to exactly **20 units (Mobile)** and **28 units (Desktop)**.
    - **Image Loading Strategy Optimization**: Updated Header Logo to `loading="eager"` and Showcase project images to `loading="lazy"`.
    - **CLS Prevention**: Added explicit `width` and `height` to Hero and ShowcaseCard images.
    - **Accessibility Upgrade**: Added `aria-label` support to all Tech Stack icons.
    - **Typography Standard**: Replaced all triple dots (`...`) with the proper ellipsis character (`…`).
    - **Balanced Layouts**: Implemented `text-pretty` in Hero and Profile bio sections.
    - **Transition Optimization**: Replaced generic `transition-all` with specific compositor-friendly properties.
- `HeroSection.tsx`: Optimized **Scroll Indicator** placement:
    - Precise alignment under the word **"professional"** (for Desktop).
    - Perfectly **centered** horizontally (for Mobile).
    - Anchored at **`bottom-8`** for high-fidelity appearance.
  - `Showcase.tsx`: Viewport-triggered headers, tabs, and project cards with accurate thresholds.
  - `ContactForm.tsx`: Strictly sequential fields reveal triggered only upon viewport arrival.
  - `SocialAccount.tsx`: Modernized with `framer-motion` and strictly scroll-triggered visibility (after 300px).
  - `Profile.tsx`: Upgraded the side drawer with fluid `AnimatePresence` motions.

### UI/UX Refinements
- `HeroSection.tsx`: Optimized **HeroSection** for perfect full-viewport (`100dvh`) coverage and precise relocation of the **Scroll Indicator** (under 'professional' on Desktop, centered on Mobile).
- `Header.tsx`: Fixed logo distortion issue and improved sticky alignment.
- `Showcase` Section: Complete UI/UX overhaul (Section Header, 3rd-column Grid, and Load More button).
  - Modernized `ShowcaseTabs` with project counts and accurate category filtering.
- `TechnicalRadarChart.tsx`: Replaced Pie Chart with a professional Radar Chart using Shadcn UI.
- `Footer.tsx`: Reduced vertical padding to `py-4` for a balanced, ultra-compact layout.

### Project Standards
- `PROJECT_RULES.md`: Established **`framer-motion`** as the mandatory standard for all animations.
- Integrated **Shadcn UI** library and configured **path aliases** (`@/`) for scalable architecture.
- Verified all interactive states across 320px to 1440px viewports.

---

---

## [Phase 5] - 2026-03-26

### Fixed
- `src/components/Profile/Profile.tsx` — invalid Tailwind class `lg:h-70` → `lg:h-[17.5rem]`
- `src/components/HeroSection/HeroSection.tsx` — typo `sm:max-x-xl` → `sm:max-w-xl`

---

## [Phase 4] - 2026-03-26

### Added
- SEO meta tags in `index.html`: description, keywords, author, robots, Open Graph, Twitter Card
- Lazy loading: `Profile` and `Showcase` components loaded via `React.lazy()` + `<Suspense>`
- Bundle splitting in `vite.config.ts`: react, headlessui, heroicons, recharts, react-icons chunks

### Changed
- `src/App.tsx` — lazy imports for Profile and Showcase
- `vite.config.ts` — added `build.rollupOptions.output.manualChunks`; changed `defineConfig` import to `vitest/config`
- `tsconfig.app.json` — excluded `src/test` from app build to prevent global type conflicts
- `index.html` — SEO meta tags added

---

## [Phase 2] - 2026-03-26

### Added
- Vitest + @testing-library/react testing setup
- `src/test/setup.ts` — jsdom mocks for IntersectionObserver, requestAnimationFrame, matchMedia, scrollTo
- `src/test/useSmoothScroll.test.ts` — 4 tests for useSmoothScroll hook
- `src/test/useEvent.test.ts` — 3 tests for useEvent hook
- `src/test/ContactForm.test.tsx` — 4 tests for ContactForm component
- `src/test/Notification.test.tsx` — 2 tests for Notification component
- `"test"` and `"test:run"` npm scripts in package.json

### Changed
- `vite.config.ts` — added vitest test configuration
- `tsconfig.app.json` — added `"vitest/globals"` to types
- `package.json` — added test scripts and devDependencies

---

## [Phase 1.2] - 2026-03-26

### Added
- `src/utils/analytics.ts` — GA4 analytics: `initAnalytics()`, `trackProjectClick()`, `trackContactFormSubmit()`

### Changed
- `src/main.tsx` — calls `initAnalytics()` before createRoot
- `src/components/Showcase/ShowcaseCard.tsx` — calls `trackProjectClick(post.title)` on project link click
- `src/components/GetInTouch/ContactForm.tsx` — calls `trackContactFormSubmit()` on successful form submit

---

## [Phase 1.1] - 2026-03-26

### Added
- `src/contexts/ThemeContext.tsx` — ThemeProvider with localStorage + system preference detection
- `src/hooks/useTheme.ts` — useTheme hook consuming ThemeContext
- Flash-prevention inline script in `index.html` `<head>`
- Dark mode toggle button in Header (SunIcon / MoonIcon from @heroicons)

### Changed
- `src/index.css` — added `@variant dark (&:where(.dark, .dark *))` for Tailwind 4 dark mode
- `src/main.tsx` — wrapped App with ThemeProvider
- All component files — light-mode base classes + `dark:` variants applied

### Files Modified (dark mode)
- `src/components/Header/Header.tsx`
- `src/components/HeroSection/HeroSection.tsx`
- `src/components/Capabilities/LanguagesPieChart.tsx` (inline styles via useTheme)
- `src/components/Showcase/ShowcaseCard.tsx`
- `src/components/Profile/Profile.tsx`
- `src/components/Notification/Notification.tsx`
- `src/components/GetInTouch/ContactForm.tsx`
- `src/components/Footer/Footer.tsx`
- `src/components/ScrollToTopButton/ScrollToTopButton.tsx`
- `src/components/SocialAccount/SocialAccount.tsx`

---

## [Phase 0] - 2026-03-26

### Fixed
- Replaced invalid Tailwind class `bottom-26` with `bottom-[6.5rem]` in ScrollToTopButton and SocialAccount

### Added
- `src/hooks/useSmoothScroll.ts` — extracted shared scrollToSection logic into reusable hook
- `src/utils/events.ts` — centralized all custom event names as `APP_EVENTS` constants with typed `dispatchAppEvent` helper
- `src/hooks/useEvent.ts` — reusable hook for attaching/detaching window event listeners

### Changed
- `src/components/Header/Header.tsx` — uses `useSmoothScroll`, `useEvent`, `APP_EVENTS`, `dispatchAppEvent`
- `src/components/HeroSection/HeroSection.tsx` — uses `useSmoothScroll`
- `src/components/Profile/Profile.tsx` — uses `useEvent`, `APP_EVENTS`, `dispatchAppEvent`
- `src/components/Notification/Notification.tsx` — uses `useEvent`, `APP_EVENTS`
- `src/components/GetInTouch/ContactForm.tsx` — uses `APP_EVENTS`, `dispatchAppEvent`

### Files Modified
- `src/components/ScrollToTopButton/ScrollToTopButton.tsx` — fixed bottom-26
- `src/components/SocialAccount/SocialAccount.tsx` — fixed bottom-26
- `src/components/Header/Header.tsx` — event bus + smooth scroll hook
- `src/components/HeroSection/HeroSection.tsx` — smooth scroll hook
- `src/components/Profile/Profile.tsx` — event bus
- `src/components/Notification/Notification.tsx` — event bus
- `src/components/GetInTouch/ContactForm.tsx` — event bus

---

## [0.0.0] - 2025-10-XX

### Added

- Initial project setup with React 19, TypeScript, Vite, Tailwind CSS 4
- Hero Section with responsive images
- Capabilities Section with Languages Pie Chart
- Showcase Section (10 projects with filtering)
- Profile Section
- Contact Form (Formspree integration)
- Social Media Links
- Scroll to Top Button
- Notification System
- Responsive Design
- Deployed on Vercel

---

## Template for New Entries

```markdown
## [Version] - YYYY-MM-DD

### Added

- New features

### Changed

- Changes to existing features

### Fixed

- Bug fixes

### Removed

- Removed features

### Files Modified

- `path/to/file1.tsx` - Description of change
- `path/to/file2.ts` - Description of change

### Breaking Changes

- Description of any breaking changes (if applicable)
```

---

## How to Update

After completing ANY task, add an entry to this file:

1. Add date and task description
2. List all files modified
3. Note any breaking changes
4. Keep entries concise but informative
