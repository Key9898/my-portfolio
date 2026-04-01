# Portfolio Project Plan

## Project Overview

Personal portfolio website for Wunna Aung - Frontend Developer & WordPress Developer. Built with React 19, TypeScript, Vite, and Tailwind CSS 4.

**Live URL:** Deployed on Vercel  
**Started:** October 2025

---

## Quality Standards (MANDATORY)

### Responsive Design Requirements

- **ALL devices:** Desktop, Laptop, Tablet, Mobile
- **ALL sizes:** 320px to 2560px+ viewports
- **Breakpoints:** `sm:640px`, `md:768px`, `lg:1024px`, `xl:1280px`, `2xl:1536px`
- **Testing:** Must test on all breakpoints before deployment

### UI/UX Standards

- **Standard:** Follow industry best practices
- **Clean:** No clutter, clear visual hierarchy
- **Simplify:** Intuitive navigation, minimal cognitive load
- **Pro:** Professional appearance, polished interactions

### Code Structure Standards

- **Modular Architecture:** Each component in its own folder
- **Separation of Concerns:** UI components vs Smart hooks
- **DRY Principle:** No duplicated code
- **TypeScript Strict:** Full type safety

---

## Technology Stack

| Category     | Technology                                       |
| ------------ | ------------------------------------------------ |
| Framework    | React 19.1.1                                     |
| Language     | TypeScript 5.9                                   |
| Build Tool   | Vite 7.1.7                                       |
| Styling      | Tailwind CSS 4.1.16                              |
| UI Libraries | @headlessui/react, @heroicons/react, react-icons |
| Charts       | recharts                                         |
| Contact      | Formspree                                        |
| Deployment   | Vercel                                           |

---

## Current Features

- [x] Hero Section with responsive images
- [x] Capabilities Section (Languages Pie Chart)
- [x] Showcase Section (10 projects with filtering)
- [x] Profile Section
- [x] Contact Form (Formspree integration)
- [x] Social Media Links
- [x] Scroll to Top Button
- [x] Notification System
- [x] Responsive Design

---

## Phase 0: Code Quality Fixes (Priority: CRITICAL)

### 0.1 Fix Invalid Tailwind Classes

**Status:** Pending  
**Priority:** Critical  
**Impact:** UI Consistency, Build Warnings

**Issues Found:**

- `bottom-26` is not a valid Tailwind class (used in ScrollToTopButton, SocialAccount)

**Tasks:**

- [ ] Replace `bottom-26` with valid Tailwind class (e.g., `bottom-24` or custom value)
- [ ] Verify all components use valid Tailwind classes
- [ ] Run build to confirm no warnings

**Files to Modify:**

- `src/components/ScrollToTopButton/ScrollToTopButton.tsx`
- `src/components/SocialAccount/SocialAccount.tsx`

**Success Criteria:**

- No invalid class warnings
- Consistent positioning across all breakpoints

---

### 0.2 Extract Duplicated Logic to Hooks

**Status:** Pending  
**Priority:** Critical  
**Impact:** Code Maintainability, DRY Principle

**Issues Found:**

- `scrollToSection` function duplicated in Header.tsx and HeroSection.tsx

**Tasks:**

- [ ] Create `src/hooks/useSmoothScroll.ts` hook
- [ ] Refactor Header.tsx to use the hook
- [ ] Refactor HeroSection.tsx to use the hook
- [ ] Remove duplicated code

**Files to Create:**

- `src/hooks/useSmoothScroll.ts`

**Files to Modify:**

- `src/components/Header/Header.tsx`
- `src/components/HeroSection/HeroSection.tsx`

**Success Criteria:**

- Single source of truth for smooth scroll logic
- All scroll functionality works correctly

---

### 0.3 Create Central Event Bus

**Status:** Pending  
**Priority:** High  
**Impact:** Code Organization, Maintainability

**Issues Found:**

- Custom events (`nav:setActiveSection`, `notify:show`, `profile:open`) scattered across components
- No centralized event management

**Tasks:**

- [ ] Create `src/utils/events.ts` for centralized event constants
- [ ] Create `src/hooks/useEvent.ts` hook for event handling
- [ ] Refactor all components to use centralized events

**Files to Create:**

- `src/utils/events.ts`
- `src/hooks/useEvent.ts`

**Files to Modify:**

- `src/components/Header/Header.tsx`
- `src/components/Profile/Profile.tsx`
- `src/components/Notification/Notification.tsx`
- `src/components/GetInTouch/ContactForm.tsx`

**Success Criteria:**

- All event names defined in one place
- Type-safe event handling
- Easy to add new events

---

## Phase 1: Core Enhancements (Priority: HIGH)

### 1.1 Dark Mode Implementation

**Status:** Pending  
**Priority:** High  
**Impact:** User Experience, Accessibility

**Tasks:**

- [ ] Create ThemeContext with React Context API
- [ ] Implement useTheme hook with localStorage persistence
- [ ] Add dark mode toggle button in Header
- [ ] Update Tailwind CSS configuration for dark mode
- [ ] Apply dark: variants across all components
- [ ] Test all pages in both themes
- [ ] Ensure smooth transition animations

**Files to Create:**

- `src/contexts/ThemeContext.tsx`
- `src/hooks/useTheme.ts`

**Files to Modify:**

- `src/index.css` - Add dark mode base styles
- `src/components/Header/Header.tsx` - Add toggle button
- All component files - Add dark: variants

**Success Criteria:**

- Toggle works smoothly with animation
- Theme persists on page reload
- All components properly styled in both modes
- System preference detection (optional)

---

### 1.2 Analytics Integration

**Status:** Pending  
**Priority:** High  
**Impact:** Business Intelligence, User Insights

**Recommendation:** Google Analytics 4 (GA4)

**Why GA4 for Portfolio:**

- Free and industry standard
- Detailed user behavior insights
- Real-time analytics
- Integration with Google Search Console
- LinkedIn/Resume credibility

**Tasks:**

- [ ] Create GA4 property and measurement ID
- [ ] Install react-ga4 or @next/third-parties/google
- [ ] Add GA script to index.html or main.tsx
- [ ] Track page views automatically
- [ ] Add custom events (project clicks, contact form submissions)
- [ ] Create privacy policy page/section (GDPR compliance)
- [ ] Test analytics in GA4 dashboard

**Files to Create/Modify:**

- `src/utils/analytics.ts` - Analytics utility
- `src/App.tsx` - Initialize GA
- `src/components/Showcase/ShowcaseCard.tsx` - Track project clicks
- `src/components/GetInTouch/ContactForm.tsx` - Track form submissions

**Success Criteria:**

- Page views tracked correctly
- Custom events firing
- Real-time data visible in GA4

---

## Phase 2: Quality Assurance (Priority: MEDIUM)

### 2.1 Testing Setup

**Status:** Pending  
**Priority:** Medium  
**Impact:** Code Quality, Maintainability

**Recommendation:** Vitest + React Testing Library

**Why Vitest:**

- Native Vite integration (fast)
- Jest-compatible API
- Built-in code coverage
- Watch mode for development
- ESM-first design

**Tasks:**

- [ ] Install Vitest and @testing-library/react
- [ ] Configure Vitest in vite.config.ts
- [ ] Create test setup file
- [ ] Write unit tests for utility functions
- [ ] Write component tests for key components
- [ ] Add test scripts to package.json
- [ ] Set up CI/CD test automation

**Test Categories:**

1. **Unit Tests:**
   - Contact form validation
   - Project data structure
   - Theme toggle logic

2. **Component Tests:**
   - ContactForm submission
   - ShowcaseCard rendering
   - Header navigation
   - Theme toggle functionality

3. **Integration Tests:**
   - Form submission flow
   - Project filtering
   - Theme persistence

**Files to Create:**

- `src/test/setup.ts`
- `src/components/__tests__/` directory
- `vitest.config.ts` (if needed)

**Success Criteria:**

- All tests passing
- > 70% code coverage on critical components
- Tests run in CI/CD pipeline

---

## Phase 3: Backend Considerations (Priority: LOW)

### 3.1 Contact Form Backend

**Status:** Pending  
**Priority:** Low  
**Impact:** Data Ownership, Features

**Current State:** Formspree (Free tier)

**Recommendation:** Keep Formspree for now

**Why Formspree is Sufficient:**

- No database maintenance needed
- Email notifications work well
- Free tier adequate for portfolio traffic
- Spam protection included
- Easy to upgrade if needed

**Future Considerations (if needed):**

- Custom backend with Node.js/Express
- Database for message storage
- Admin dashboard for message management
- Auto-reply emails

**Tasks (Future):**

- [ ] Evaluate Formspree limitations
- [ ] Consider Supabase for backend-as-a-service
- [ ] Implement message storage if needed

---

## Phase 4: SEO & Performance (Priority: MEDIUM)

### 4.1 SEO Enhancements

**Status:** Pending  
**Priority:** Medium

**Tasks:**

- [ ] Add meta descriptions
- [ ] Add Open Graph tags
- [ ] Add Twitter Card tags
- [ ] Create sitemap.xml
- [ ] Add robots.txt
- [ ] Add structured data (JSON-LD)
- [ ] Optimize images with alt tags

### 4.2 Performance Optimization

**Status:** Pending  
**Priority:** Medium

**Tasks:**

- [ ] Implement lazy loading for images (already done on some)
- [ ] Add loading skeletons
- [ ] Optimize bundle size
- [ ] Add service worker for caching (PWA)

---

## Phase 5: Responsive Design Audit (Priority: HIGH)

### 5.1 Cross-Device Testing

**Status:** In Progress
**Priority:** High
**Impact:** User Experience, Professionalism

**Progress Update (2026-04-01):**

- Completed deep scan of all viewports (320px, 768px, 1440px).
- Identified and fixed vertical spacing issues on mobile/tablet.
- Confirmed Dark Mode adaptation across all breakpoints.

**Tasks:**

- [x] Test on mobile (320px - 640px)
- [x] Test on tablet (640px - 1024px)
- [x] Test on desktop (1024px - 1920px)
- [x] Test on large screens (1920px+)
- [x] Fix any responsive issues found (Improved vertical spacing for mobile)

**Components to Test:**

- Header (mobile menu, sticky behavior)
- HeroSection (image positioning, text sizing)
- Capabilities (grid layout, chart responsiveness)
- Showcase (card layout, pagination)
- Profile (drawer behavior)
- GetInTouch (form layout)
- SocialAccount (positioning)
- ScrollToTopButton (positioning)

**Success Criteria:**

- No horizontal scroll on any device
- All text readable on all sizes
- All interactive elements accessible
- Images properly sized and positioned

---

## Implementation Priority Order

| Order | Task                              | Priority | Status      |
| ----- | --------------------------------- | -------- | ----------- |
| 1     | Fix Invalid Tailwind Classes      | Critical | Completed   |
| 2     | Extract Duplicated Logic to Hooks | Critical | Completed   |
| 3     | Create Central Event Bus          | High     | Completed   |
| 4     | Responsive Design Audit           | High     | In Progress |
| 5     | Dark Mode                         | High     | Completed   |
| 6     | Analytics (GA4)                   | High     | Completed   |
| 7     | Testing Setup                     | Medium   | Completed   |
| 8     | SEO Enhancements                  | Medium   | Completed   |
| 9     | Performance                       | Medium   | Completed   |
| 10    | Backend (Future)                  | Low      | Pending     |

---

## Next Recommended Action

**Project Status: Production Ready** ✅

**Completed Today (2026-04-01):**

1. Created highly accurate and professional `public/OGImage/og-image.jpg` (1200×630px) for Open Graph.
2. Fixed Header vertical alignment (DOM reorder) and navigation spacing.
3. Reduced Footer vertical padding to `py-4` for a compact look.
4. Deep Scan analysis — all functions and logic verified complete
5. Notification.tsx naming fix
6. Project Structure verification — all rules followed
7. .gitignore updated

**Remaining Minor Tasks:**

1. Improve text contrast in Light Mode for Hero Section (mobile)

---

## Notes

- All changes should maintain existing functionality
- Test on mobile, tablet, and desktop viewports
- Ensure backward compatibility with existing projects data
- Keep bundle size optimized
- Document any new environment variables needed

---

## Changelog

| Date       | Change                                                                      |
| 2026-04-01 | Fixed Header alignment/spacing and reduced Footer padding (py-4)            |
| 2026-04-01 | Created professional Open Graph image (`public/OGImage/og-image.jpg`)       |
| 2026-04-01 | Deep Scan completed — all functions and logic verified complete and working |
| 2026-04-01 | Fixed Notification.tsx component naming (Example → Notification)            |
| 2026-04-01 | Verified Project Structure follows all Project Rules                        |
| 2026-04-01 | Updated .gitignore with .claude/, .env files, coverage/                     |
| 2026-04-01 | Updated Phase 5 status to In Progress, marked all others as Completed       |
| 2026-04-01 | Improved vertical spacing for mobile/tablet sections                        |
| 2026-03-26 | Initial project plan created                                                |
| 2026-03-26 | Added Phase 0: Code Quality Fixes                                           |
| 2026-03-26 | Added Quality Standards section                                             |
| 2026-03-26 | Added Phase 5: Responsive Design Audit                                      |
| 2026-03-26 | Updated priority order                                                      |
