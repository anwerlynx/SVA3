# Valley Higher Institutes - University Website

## Overview
The Valley Higher Institutes project is a professional Arabic university website designed to serve as a central portal for "معاهد الوادي العليا". It integrates two distinct institute sub-sites: the Management Institute (themed with green) and the Engineering Institute (themed with blue). Each institute maintains a full, dedicated website with specific pages tailored to its programs and services. The project's vision is to provide a comprehensive, modern, and accessible online presence that caters to prospective and current students, faculty, and stakeholders, showcasing the academic offerings and facilities of both institutes under a unified brand.

## User Preferences
I prefer the AI to focus on high-level architectural and design decisions rather than getting bogged down in minute implementation details. When making changes or suggestions, prioritize solutions that maintain the distinct thematic identities of the Management (green) and Engineering (blue) institutes. Ensure all new features are integrated seamlessly into the existing bilingual (Arabic/English, RTL) structure. I want iterative development, with clear communication about proposed changes before they are implemented, especially for major structural or design modifications. Do not remove or alter existing routes unless explicitly instructed.

## System Architecture
The project employs a client-server architecture. The frontend is built with **React 18**, **Vite**, and **TypeScript**, styled using **Tailwind CSS** and **shadcn/ui** components. Client-side routing is managed by **wouter**. Dynamic and engaging user experiences are achieved with **Framer Motion** for animations and **Swiper.js** for sliders. **Lucide React** provides a consistent icon set. The primary font is **Almarai (Arabic)**, complemented by Inter.

The backend is an **Express.js** server responsible for serving both API endpoints and static frontend files.

**Key Design Principles:**
- **Two-Institute Portal:** A central portal experience branching into two distinct institute websites, each with its own thematic color scheme (green for Management, blue for Engineering).
- **Bilingual Support (Arabic/English):** Full RTL support with content available in both languages across all pages.
- **Responsive Design:** Utilizes Tailwind CSS and shadcn/ui for adaptive layouts across various devices.
- **SEO Optimization:** `PageHead` component for dynamic title, description, and OG tags on all pages.
- **Modular Component-Based Structure:** Emphasizes reusable React components for UI elements and page sections.
- **Theming:** Centralized configuration for institute-specific navigation and footer elements to maintain consistent branding.
- **Unified Navigation:** A comprehensive portal navigation structure with organized dropdown menus, dynamically linking to various central and institute-specific pages.

**Core Features Implemented:**
- Dynamic hero sections with slideshows.
- Animated counters and scroll-triggered animations.
- Comprehensive news listings with detail pages, filtering, and pagination.
- Media galleries with categorization and lightbox functionality.
- Dedicated pages for admissions, student affairs, quality assurance, committees, and library services.
- Institute-specific department pages with detailed information.
- Contact forms and newsletter subscription with backend integration.
- Full-site search functionality via a modal interface.
- Consistent footer with extensive sitemap links.

## Recent Changes
- 2026-02-20: Redesigned Community page with bilingual support, standard hero, breadcrumbs, stats counters, activity cards, upcoming events
- 2026-02-20: Redesigned Research page with bilingual support, standard hero, breadcrumbs, stats counters, research areas, publications, conferences
- 2026-02-20: Enhanced Faculty page with breadcrumbs and animated stats section (120+ members, 45+ PhD holders, 85+ publications, 6 departments)
- 2026-02-20: Enhanced Services page with services overview grid (4 quick link cards) and fixed section background alternation
- 2026-02-20: Enhanced Board of Directors, Partners, Chairman's Word, Home pages with stats counters and quick links
- 2026-02-20: Redesigned Students page with bilingual support, standard hero, breadcrumbs, stats counters, admission steps, fees, scholarships, FAQ
- 2026-02-20: Redesigned Library page with bilingual support, hero search, breadcrumbs, stats counters, filterable resources, library info, service links

## External Dependencies
- **React**: Frontend UI library.
- **Vite**: Frontend build tool.
- **TypeScript**: Superset of JavaScript for type safety.
- **Tailwind CSS**: Utility-first CSS framework.
- **shadcn/ui**: Reusable UI components.
- **Framer Motion**: Animation library.
- **Swiper.js**: Touch slider library.
- **Lucide React**: Icon library.
- **wouter**: Client-side routing library for React.
- **Express.js**: Backend web framework for Node.js.
- **Almarai**: Arabic web font.
- **Inter**: Complementary web font.