# Lagom Marketing OS → Next.js Migration Plan

## Context Analysis (Required)
Goal
- Migrate the current Vite + React static app into a fully functional Next.js app.
- Preserve the existing UI and routes while enabling server capabilities for Gemini AI calls.
- Use only Next.js, Tailwind CSS, TypeScript, and React for the core stack.

Current Behavior
- Single-page app built with Vite.
- Client-side routing via `react-router-dom` with `HashRouter`.
- Tailwind CSS loaded via CDN in `index.html` with custom global CSS in `<style>`.
- Gemini AI calls happen in the browser through `services/geminiService.ts` using `process.env.API_KEY` injected at build time.
- UI is organized as React components under `components/` with static data in the component files.

Expected Behavior
- File-based routing using Next.js.
- Shared app shell (sidebar + header) across routes.
- Tailwind compiled via PostCSS with a `globals.css` file and proper configuration.
- Gemini AI calls moved to server-side (API routes or server actions) to keep the API key secret.

Constraints
- Only use Next.js, Tailwind CSS, TypeScript, and React for the core stack.
- Keep changes minimal and reversible.
- Maintain visual parity with the existing UI.

## Inventory Snapshot
Key routes (from `AppRoute`)
- `/` → Dashboard
- `/campaigns` → Campaigns
- `/ai-studio` → AI Studio
- `/analytics` → Analytics
- `/tools` → Marketing Tools
- `/projects` → Projects Tracker
- `/help` → Help Center
- `/settings` → Settings

Key dependencies in use
- `lucide-react` for icons
- `recharts` for charts
- `@google/genai` for Gemini API access

Note
- If “only Next.js + Tailwind + TypeScript + React” means no extra libraries, we should decide whether to replace `lucide-react`, `recharts`, and `@google/genai` with custom SVGs, simple chart components, and direct fetch calls.

## Proposed Next.js Structure
Proposed directory layout
- `app/`
- `app/(app)/layout.tsx` shared sidebar + header layout
- `app/(app)/page.tsx` dashboard page
- `app/(app)/campaigns/page.tsx`
- `app/(app)/ai-studio/page.tsx`
- `app/(app)/analytics/page.tsx`
- `app/(app)/tools/page.tsx`
- `app/(app)/projects/page.tsx`
- `app/(app)/help/page.tsx`
- `app/(app)/settings/page.tsx`
- `app/api/ai/strategy/route.ts`
- `app/api/ai/copy/route.ts`
- `app/globals.css`
- `components/` (existing UI components moved or reused)
- `lib/` (types, helpers, server-only Gemini client)

Routing table
| Path | Component |
| --- | --- |
| `/` | `components/Dashboard.tsx` |
| `/campaigns` | `components/Campaigns.tsx` |
| `/ai-studio` | `components/AIStudio.tsx` |
| `/analytics` | `components/Analytics.tsx` |
| `/tools` | `components/MarketingTools.tsx` |
| `/projects` | `components/ProjectsTracker.tsx` |
| `/help` | `components/HelpCenter.tsx` |
| `/settings` | `components/Settings.tsx` |

## Migration Steps
1. Scaffold Next.js + Tailwind + TypeScript.
2. Move global styles from `index.html` into `app/globals.css` and define `.glass` and `.gradient-text` in `@layer components`.
3. Create `app/(app)/layout.tsx` with the sidebar and header so it persists across routes.
4. Convert each route into a `page.tsx` file that renders the corresponding component.
5. Replace `react-router-dom` usage with Next.js `Link` and `usePathname` for active nav styling in the sidebar.
6. Mark UI components that use hooks or browser APIs with `'use client'`.
7. Move Gemini logic to server-side.
8. Update environment variables to use `GEMINI_API_KEY` in `.env.local` and read it only on the server.
9. Remove Vite-specific files and scripts, and update `package.json` for Next.js.
10. Verify dev server, build, and route navigation.

## Gemini AI Server Plan
- Create server-only helpers in `lib/gemini.ts` or directly in `app/api/ai/*/route.ts`.
- Use `@google/genai` on the server only and never in client components.
- Update `AIStudio` to call `fetch('/api/ai/strategy')` or a server action.

## Tailwind + Global Styles
- Move font definition to Next.js, preferably via `next/font/google` with `Inter`.
- Set body background, text color, and scrollbar styles in `app/globals.css`.
- Ensure the `glass` and `gradient-text` classes exist as custom utilities or component layer classes.

## Known Migration Risks
- `recharts` may require `dynamic(() => import(...), { ssr: false })` to avoid SSR issues.
- `navigator.clipboard` and other browser APIs require client components.
- The AI client should never be bundled to the client; API routes enforce this.

## Acceptance Checks
- All routes render correctly without client-side routing errors.
- Sidebar active state works based on URL pathname.
- Gemini generation works without exposing API keys in the browser.
- Styling matches the current UI and uses Tailwind instead of the CDN.

## Decisions Confirmed
- `lucide-react`, `recharts`, and `@google/genai` are allowed.
- Use the Next.js App Router.
- Use an Apple-like system font stack via Tailwind `font-sans`.
