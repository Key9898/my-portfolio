# Portfolio Project Rules

> **CRITICAL:** These rules MUST be followed for all development work on this project.

---

## 1. Quality Standards (MANDATORY)

### 1.1 Responsive Design Requirements

- **RULE:** ALL components MUST be responsive on ALL devices
- **RULE:** Test on ALL breakpoints before marking task complete
- **RULE:** No horizontal scroll on any device size

**Required Breakpoints:**
| Breakpoint | Min Width | Target Devices |
|------------|-----------|----------------|
| Default | 0px | Small mobile |
| `sm:` | 640px | Large mobile |
| `md:` | 768px | Tablet |
| `lg:` | 1024px | Laptop |
| `xl:` | 1280px | Desktop |
| `2xl:` | 1536px | Large screens |

**Testing Sizes:**
- Mobile: 320px, 375px, 414px, 480px
- Tablet: 768px, 834px, 1024px
- Desktop: 1280px, 1440px, 1920px, 2560px

### 1.2 UI/UX Standards

| Standard | Requirement |
|----------|-------------|
| **Standard** | Follow industry best practices |
| **Clean** | No clutter, clear visual hierarchy |
| **Simplify** | Intuitive navigation, minimal cognitive load |
| **Pro** | Professional appearance, polished interactions |

**UI/UX Rules:**
- Consistent spacing using Tailwind spacing scale
- Clear visual hierarchy (headings, sections, actions)
- Accessible color contrast (≥ 4.5:1 ratio)
- Smooth transitions and animations
- Clear call-to-action buttons
- Intuitive navigation flow

### 1.3 Code Structure Standards

| Standard | Requirement |
|----------|-------------|
| **Modular** | Each component in its own folder |
| **Separation** | UI components vs Smart hooks |
| **DRY** | No duplicated code |
| **TypeScript Strict** | Full type safety |

---

## 2. Code Preservation Rules (HIGHEST PRIORITY)

### 2.1 Do Not Touch Working Code

- **RULE:** When modifying existing features, ONLY touch the specific code being modified
- **RULE:** Never refactor, reformat, or "improve" working UI/UX, logic, or functions
- **RULE:** If something works correctly, leave it alone unless explicitly asked to change it
- **RULE:** Do not change variable names, function names, or structure of working code

### 2.2 Scope of Changes

- Only modify files directly related to the task
- Do not make "while I'm here" changes
- Preserve existing code style in the file being edited
- Keep changes minimal and focused

---

## 3. Documentation Requirements (MANDATORY)

### 3.1 Changelog Updates

- **RULE:** After completing ANY task, update `docs/CHANGELOG.md`
- **RULE:** Include: date, task description, files modified, and any breaking changes
- **RULE:** Use format specified in CHANGELOG.md template

### 3.2 Session Summary

- **RULE:** After each session, update `docs/LAST_SESSION_SUMMARY.md`
- **RULE:** Include: what was done, what's pending, any blockers, next steps
- **RULE:** This helps other agents understand project state

### 3.3 Project Plan Updates

- **RULE:** When adding NEW features not in Project Plan, update `docs/PROJECT_PLAN.md`
- **RULE:** Mark tasks as completed when done
- **RULE:** Add new tasks to appropriate phase

---

## 4. Project Structure (STRICT)

### 4.1 Directory Structure

```
src/
├── components/           # UI Components (Modular Architecture)
│   └── ComponentName/    # Each component in its own folder
│       └── ComponentName.tsx
├── hooks/                # Custom React hooks (Smart Logic)
│   └── useHookName.ts
├── utils/                # Utility functions & API calls
│   └── utilName.ts
├── contexts/             # React Context providers
│   └── ContextName.tsx
├── data/                 # Static data & types
│   └── dataName.ts
├── types/                # TypeScript type definitions (if needed)
│   └── typeName.ts
├── App.tsx               # Main application component
├── main.tsx              # Application entry point
└── index.css             # Global styles
```

### 4.2 Component Architecture (Modular Pattern)

#### Dumb Components (UI Only)

- Located in `src/components/ComponentName/ComponentName.tsx`
- Contains ONLY UI/JSX and presentation logic
- Receives props for data and callbacks
- No direct API calls or complex business logic

#### Smart Logic (Hooks)

- Located in `src/hooks/useHookName.ts`
- Contains state management, side effects, business logic
- Can be reused across multiple components
- Examples: `useModal.ts`, `useTheme.ts`, `useScrollSpy.ts`, `useSmoothScroll.ts`

#### Utils & Services

- Located in `src/utils/`
- API calls, helper functions, constants, event definitions
- Examples: `api.ts`, `analytics.ts`, `events.ts`

#### Contexts

- Located in `src/contexts/`
- React Context providers for global state
- Examples: `ThemeContext.tsx`

### 4.3 File Naming Conventions

| Type       | Pattern              | Example                  |
| ---------- | -------------------- | ------------------------ |
| Component  | PascalCase.tsx       | `Header.tsx`             |
| Hook       | camelCase.ts         | `useTheme.ts`            |
| Utility    | camelCase.ts         | `analytics.ts`           |
| Context    | PascalCase.tsx       | `ThemeContext.tsx`       |
| Data/Types | camelCase.ts         | `projects.ts`            |
| CSS Module | camelCase.module.css | `SocialMedia.module.css` |

---

## 5. Code Style Standards

### 5.1 TypeScript

- Strict mode enabled
- Use explicit types for props, state, and function returns
- Avoid `any` type - use `unknown` if type truly unknown
- Define interfaces/types in same file or adjacent `types.ts`

### 5.2 React

- Functional components only (no class components)
- Arrow functions for component exports: `export default function ComponentName()`
- Destructure props in function signature
- Use React hooks for state and side effects

### 5.3 Styling

- Tailwind CSS for all styling
- Use Tailwind utility classes (avoid custom CSS unless necessary)
- CSS Modules only for special cases (e.g., third-party overrides)
- Dark mode: use `dark:` variants
- **RULE:** Only use valid Tailwind classes (check Tailwind docs)

### 5.4 Comments

- **RULE:** Do NOT add comments unless explicitly asked
- Code should be self-documenting through clear naming
- JSDoc comments only for complex utility functions

---

## 6. Build & Test Commands

### 6.1 Development Commands

```bash
npm run dev       # Start development server
npm run build     # Production build (runs tsc + vite)
npm run lint      # ESLint check
npm run preview   # Preview production build
npm run format    # Format code with Prettier
npm run format:check  # Check formatting without writing
```

### 6.2 Testing Commands (After Vitest Setup)

```bash
npm run test              # Run all tests
npm run test:watch        # Watch mode
npm run test:coverage     # Coverage report
```

### 6.3 Before Committing

- **RULE:** Run `npm run build` to ensure no TypeScript errors
- **RULE:** Run `npm run lint` to check for linting issues
- **RULE:** Run `npm run format:check` to verify formatting
- **RULE:** Fix all errors before committing

---

## 7. Performance Guidelines (Vercel Best Practices)

### 7.1 Critical Rules (MUST Follow)

| Rule                           | Description                                          |
| ------------------------------ | ---------------------------------------------------- |
| `async-parallel`               | Use `Promise.all()` for independent async operations |
| `bundle-barrel-imports`        | Import directly from source, avoid barrel files      |
| `bundle-dynamic-imports`       | Use dynamic imports for heavy components             |
| `rerender-memo`                | Memoize expensive computations with `useMemo`        |
| `rerender-functional-setstate` | Use functional setState for stable callbacks         |

### 7.2 High Priority Rules

| Rule                     | Description                             |
| ------------------------ | --------------------------------------- |
| `rerender-dependencies`  | Use primitive dependencies in effects   |
| `rerender-derived-state` | Derive state during render, not effects |
| `client-event-listeners` | Clean up event listeners in useEffect   |
| `js-early-exit`          | Return early from functions             |

### 7.3 Bundle Optimization

- Lazy load images with `loading="lazy"`
- Use responsive images (srcSet when applicable)
- Defer non-critical third-party scripts
- Preload critical assets

---

## 8. Accessibility (a11y) Requirements

### 8.1 Mandatory a11y Rules

- All images MUST have meaningful `alt` text
- Interactive elements MUST be keyboard accessible
- Color contrast ratio MUST be ≥ 4.5:1
- Focus states MUST be visible
- Use semantic HTML elements
- ARIA labels for icon-only buttons

### 8.2 Screen Reader Support

- Use `sr-only` class for screen-reader-only content
- Add `aria-label` to buttons without visible text
- Use `aria-hidden="true"` for decorative elements

---

## 9. Dark Mode Implementation

### 9.1 Theme System

- Use React Context for theme state
- Persist theme preference in localStorage
- Detect system preference on first visit
- Smooth transitions between themes

### 9.2 Tailwind Usage

- Use `dark:` variants for all color-related classes
- Example: `bg-white dark:bg-gray-900`
- Ensure all components support both themes

---

## 10. Git Workflow

### 10.1 Commit Message Convention (Conventional Commits)

```
<type>(<scope>): <description>

[optional body]
[optional footer]
```

### 10.2 Commit Types

| Type       | Description                   |
| ---------- | ----------------------------- |
| `feat`     | New feature                   |
| `fix`      | Bug fix                       |
| `docs`     | Documentation only            |
| `style`    | Code style (formatting, etc.) |
| `refactor` | Code refactoring              |
| `perf`     | Performance improvement       |
| `test`     | Adding/updating tests         |
| `chore`    | Build process, dependencies   |

### 10.3 Examples

```
feat(dark-mode): add theme toggle component
fix(header): resolve mobile menu close issue
docs(readme): update installation instructions
```

---

## 11. Testing Strategy (Future - Vitest Setup)

### 11.1 What to Test

- Utility functions (unit tests)
- Custom hooks (hook tests)
- Component rendering (component tests)
- User interactions (integration tests)

### 11.2 Test File Location

- Unit tests: `src/utils/__tests__/utilName.test.ts`
- Component tests: `src/components/__tests__/ComponentName.test.tsx`
- Hook tests: `src/hooks/__tests__/useHookName.test.ts`

### 11.3 Mock Data Location

- For components: `src/components/__tests__/mocks/`
- For general testing: `src/tests/mocks/`

---

## 12. Event System

### 12.1 Centralized Events

- **RULE:** All custom events MUST be defined in `src/utils/events.ts`
- **RULE:** Use `useEvent` hook for event handling
- **RULE:** No inline event name strings in components

### 12.2 Event Naming Convention

- Format: `namespace:action`
- Examples: `nav:setActiveSection`, `notify:show`, `profile:open`

---

## 12. Animation Library (MANDATORY)

### 12.1 Framer Motion Required

- **RULE:** ALL animations MUST use `framer-motion` library
- **RULE:** NO CSS transitions/animations for complex animations
- **RULE:** NO custom animation implementations

### 12.2 Animation Patterns

| Pattern | Usage |
|---------|-------|
| `<motion.div>` | Animated container elements |
| `<motion.button>` | Animated buttons |
| `variants` | Complex animation sequences |
| `AnimatePresence` | Enter/exit animations |

### 12.3 Animation Guidelines

- Keep animations subtle and professional
- Duration: 0.2-0.5 seconds
- Common animations:
  - Fade: `opacity: [0, 1]`
  - Slide: `x/y: [offset, 0]`
  - Scale: `scale: [0.9, 1]`
  - Stagger: `staggerChildren: 0.1`

---

## 13. Icon Libraries (MANDATORY)

### 13.1 Two Libraries, Clear Purpose

| Library | Purpose | Icon Types |
|---------|---------|------------|
| `@heroicons/react` | UI Controls | Navigation, actions, controls |
| `react-icons` | Tech & Social | Tech stack, social media, brands |

### 13.2 HeroIcons Usage (UI Controls)

```tsx
// Outline icons (24x24) - Default for UI
import { Bars3Icon, XMarkIcon, SunIcon } from '@heroicons/react/24/outline'

// Solid icons (20x20) - Compact UI elements
import { ChevronLeftIcon } from '@heroicons/react/20/solid'

// Solid icons (16x16) - Very compact
import { ChevronRightIcon } from '@heroicons/react/16/solid'
```

**Use for:** Menu, close, arrows, chevrons, sun/moon, search, settings

### 13.3 ReactIcons Usage (Tech & Social)

```tsx
// Tech Stack - Simple Icons collection
import { SiReact, SiTypescript, SiTailwindcss, SiFirebase } from 'react-icons/si'

// Social Media - Font Awesome brands
import { FaGithub, FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa'

// Other brands - Game Icons, etc.
import { GiTeamIdea } from 'react-icons/gi'
```

**Use for:** Technology logos, social media links, brand icons

### 13.4 Icon Sizing Standard

| Size | HeroIcons | Tailwind Class |
|------|-----------|----------------|
| Small | 16px (16/solid) | `size-4` |
| Medium | 20px (20/solid) | `size-5` |
| Large | 24px (24/outline, 24/solid) | `size-6` |

### 13.5 Rules

- **RULE:** UI controls → ALWAYS use `@heroicons/react`
- **RULE:** Tech stack logos → ALWAYS use `react-icons/si` (Simple Icons)
- **RULE:** Social media → ALWAYS use `react-icons/fa` (Font Awesome)
- **RULE:** Use consistent sizing with Tailwind `size-*` classes
- **RULE:** Both libraries can be used in the same component

---

## 14. Portfolio-Specific Considerations

### 14.1 Testing Necessity

- Portfolio is a static showcase site
- Limited interactive features
- Testing priority: Contact form > Navigation > UI components
- Focus on E2E tests for critical user paths (optional)

### 14.2 Backend Requirements

- Contact form uses Formspree (no backend needed)
- No database required
- No authentication required
- Keep it simple and static

---

## 15. Quick Reference Checklist

### Before Starting Any Task

- [ ] Read this rules file
- [ ] Check `docs/PROJECT_PLAN.md` for task details
- [ ] Check `docs/LAST_SESSION_SUMMARY.md` for current state

### During Development

- [ ] Only modify code directly related to task
- [ ] Follow existing code style in file
- [ ] Do not refactor working code
- [ ] Follow component architecture patterns
- [ ] Test on all breakpoints (mobile, tablet, desktop)

### Before Committing

- [ ] Run `npm run build` - no errors
- [ ] Run `npm run lint` - no errors
- [ ] Run `npm run format:check` - no errors
- [ ] Test responsive design on all breakpoints
- [ ] Update `docs/CHANGELOG.md`
- [ ] Update `docs/LAST_SESSION_SUMMARY.md`
- [ ] Update `docs/PROJECT_PLAN.md` if new features added

---

## Changelog

| Date       | Change                                      |
| ---------- | ------------------------------------------- |
| 2026-03-26 | Added Icon Libraries section (HeroIcons + ReactIcons usage rules) |
| 2026-03-26 | Added Animation Library section (framer-motion mandatory) |
| 2026-03-26 | Added Quality Standards section (responsive, UI/UX, code structure) |
| 2026-03-26 | Added Event System section |
| 2026-03-26 | Added contexts folder to structure |
| 2026-03-26 | Removed Storybook section (removed from project) |
| 2026-03-26 | Moved to docs folder, added Prettier section |
| 2026-03-26 | Initial project rules created               |
