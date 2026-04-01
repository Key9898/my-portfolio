# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased] - 2026-04-01

### Changed
- Increased vertical padding for all major sections (`Capabilities`, `Showcase`, `GetInTouch`) to improve mobile UI/UX.
- `Footer.tsx`: Reduced vertical padding to `py-4` for an ultra-compact and balanced layout.
- `Header.tsx`: Fixed vertical alignment in sticky mode (Logo -> Nav -> Toggle) and improved spacing between menu items and theme toggle.
- Overall UI/UX audit performed on 320px, 768px, and 1440px viewports.

### Fixed
- `src/components/Notification/Notification.tsx` — renamed component from `Example` to `Notification` for naming consistency.

### Added
- `.gitignore` — added `.claude/` (Claude IDE settings), `.env` and `.env.*` (environment variables), `coverage/` (test coverage reports).

### Documentation
- Created a professional, high-fidelity Open Graph image (`public/OGImage/og-image.jpg`) with photorealistic likeness.
- Performed Deep Scan analysis of all functions and logic — confirmed project is complete and working properly.
- Verified Project Structure follows all Project Rules — modular architecture, naming conventions, file organization all correct.

---

## [Unreleased]

### Fixed
- `tsconfig.node.json` — changed `target` and `lib` from `ES2023` to `ES2022` (TypeScript compatibility)
- `tsconfig.node.json` — added `forceConsistentCasingInFileNames: true` (cross-platform consistency)

### Added
- Icon Libraries section in Project Rules — HeroIcons for UI controls, ReactIcons for tech stack & social
- Animation Library section in Project Rules — `framer-motion` is now MANDATORY for all animations
- Project Rules file created (`.trae/rules/project_rules.md`)
- PROJECT_RULES.md added to `docs/` folder
- `.agents` and `.trae` folders added to `.gitignore`
- ESLint configuration with TypeScript, React Hooks, React Refresh, and a11y plugins
- Prettier configuration with Tailwind CSS plugin

### Removed
- Storybook (not needed for portfolio - no audience for component documentation)
- `react-is` dependency (only used by Storybook)

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
