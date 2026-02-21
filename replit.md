Project Overview

Valley Higher Institutes (معاهد الوادي العليا) هو نظام ويب جامعي متكامل يعمل كبوابة مركزية تضم موقعين أكاديميين مستقلين تحت علامة مؤسسية موحدة:

🟢 Management Institute (العلوم الإدارية) – هوية خضراء

🔵 Engineering Institute (الهندسة والتكنولوجيا) – هوية زرقاء

المنصة مصممة كنظام Portal هرمي:

Main Campus Portal
   ├── Management Institute Website
   └── Engineering Institute Website


كل معهد يمتلك:

صفحات مستقلة

هيكل ملاحي مستقل

أقسام أكاديمية خاصة

صفحات قبول وخدمات خاصة

نظام أخبار مستقل

هوية بصرية خاصة به

مع الحفاظ على:

علامة مؤسسية موحدة

نظام تنقل عام

دعم لغتين كامل

تجربة استخدام متناسقة

User & Product Vision

المشروع ليس مجرد موقع عرض معلومات، بل:

منصة مؤسسية متكاملة

جاهزة للتوسع

قابلة للربط بأي Backend متقدم

تدعم إدارة محتوى مستقبلية

مهيأة للإنتاج (Production-Oriented)

التركيز المعماري:

وضوح الفصل بين المعهدين

الحفاظ على الهوية اللونية لكل معهد

دعم RTL كامل

استقرار الثيم الداكن

منع أي Dead Links

ضمان عمق هيكلي حقيقي (Archive → Detail)

System Architecture
1️⃣ Frontend Architecture
Core Stack

React 18

Vite

TypeScript

Tailwind CSS

shadcn/ui

Framer Motion

Swiper.js

Lucide React

wouter (Routing)

Architectural Pattern

المشروع يتبع:

Component-Based Architecture

Modular Page Structure

Config-Driven Navigation

Thematic Segmentation

Portal Structure
🌐 Public Main Portal

Home

About

Board

Vision & Mission

Chairman Word

Welcome Message

Partners

Central Admission

Quality

Committees

Library

News

Media Gallery

Contact

Sitemap

🟢 Management Institute

Route Base:

/institute/management


Sections:

About

Departments

Faculty

Admission

Student Services

Training

Activities

News

Quality

Library

Contact

Theme:

Green Accent

Soft Gradients

Formal Academic Tone

🔵 Engineering Institute

Route Base:

/institute/engineering


Sections:

About

Departments

Faculty

Admission

Student Services

Training

Research

Labs

News

Quality

Library

Contact

Theme:

Blue Industrial Accent

Stronger Contrast

Technical Feel

Routing Architecture

Client-side routing via wouter

Dynamic Routes:

/news/:id

/institute/*/department/:slug

/faculty/:id

Hierarchical Navigation

Breadcrumb-ready structure

No route is removed without explicit instruction.

Theming & Branding System
Dual Institute Theming
Institute       Primary Color   Tone
Management      Green   Financial / Administrative
Engineering     Blue    Technical / Industrial

Each institute:

Custom hero styling

Color-based badges

Section accents

Themed CTA buttons

Distinct gradients

Dark Mode

Tailwind dark: strategy

Fully supported across:

Public

Institutes

Admin

No visual collapse

Shadows reduced in dark

Borders enhanced in dark

Typography

Arabic: Almarai

English: Inter

Consistent scale

Controlled hierarchy

Bilingual System

Full Arabic (RTL)

Full English (LTR)

Dynamic <html dir>

Dropdown alignment RTL-aware

Layout respects logical spacing

No hard layout break on language switch

Content strategy:

UI text managed via translations.ts

Structural text bilingual

Some long content embedded conditionally (future CMS candidate)

UX System
Implemented

Standard Hero Template

Breadcrumb-ready layout

Scroll-triggered animations

Animated stats counters

Filterable grids

Paginated news

Media lightbox

Search modal

ScrollToTop

BackToTop

Toast notifications

Structural Philosophy

Every archive must lead to detail.

Every card must have depth.

No decorative dead elements.

Backend Architecture
Express.js Server

Responsibilities:

REST API

Static frontend serving

Form handling

Newsletter handling

Media upload endpoints

Admin authentication (JWT-based, pending hardening)

API Domains

/api/news

/api/faculty

/api/departments

/api/library

/api/research

/api/events

/api/activities

/api/users

/api/settings

/api/pages

Current State:

Backend fully wired to frontend for all major content types.

API endpoints serve: news, faculty, departments, events, library, research, media, FAQs, activities, announcements, contact, newsletter.

Admin CRUD modules mostly complete.

Admin System

Located under:

/admin


Functional:

Dashboard

Analytics

News Manager (CRUD)

Faculty Manager (CRUD)

Departments Manager (CRUD)

Media Manager

Users Manager

SEO Settings

Site Settings

Events Manager (CRUD)

Library Manager (CRUD)

Research Manager (CRUD)

Activities Manager (CRUD)

Pages CMS Manager (CRUD)

Announcements Manager (CRUD)

FAQs Manager (CRUD)

Courses Manager (CRUD)

Homepage Manager (Settings-based hero, stats, announcements control)

Student Affairs Manager (Admissions, scholarships, links to FAQs/Announcements)

Academic System Manager (Calendar, semester events, links to Courses/Departments)

System Health Manager (Real-time system monitoring, database status, API health, performance metrics)

Contact Messages Manager (View, read, delete contact form submissions)

Newsletter Manager (View subscribers, export CSV)

Placeholder Modules:

(None remaining - all admin modules are now fully implemented)

SEO Architecture

PageHead per page

Dynamic meta

OG tags

Server-side sitemap.xml (65+ routes)

robots.txt endpoint

Clean routes

Semantic HTML

Security

bcrypt password hashing

JWT token authentication

Rate limiting on login endpoint

Security headers (X-Content-Type-Options, X-Frame-Options, etc.)

Mock tokens restricted to development only

Performance

React.lazy + Suspense for all pages (except Home)

Cache-Control headers for API, static assets, HTML

Image error fallbacks across dynamic content

Design Principles

No structural duplication.

No theme inconsistency.

No broken RTL.

No route without depth.

No placeholder without planned execution.

No backend bypass before security hardening.

Current Maturity

Frontend UI/UX: ~95% complete
Backend Capability: ~95% scaffolded
Data Binding: ~95% utilized (Home hero/stats, Services FAQ, CentralAdmission FAQ, Community, AcademicCalendar, GraduationParties, AvailableJobs all wired to APIs)
Admin Modules: 100% implemented (no placeholders remaining)
Production Readiness: Security hardened, cache headers set, deployment configured

Strategic Direction

Next logical phases:

1️⃣ Full production deployment and testing
2️⃣ Wire remaining static content to CMS
3️⃣ Advanced features (user portal, online applications)

Architectural Identity

This is not:

A startup landing page

A SaaS dashboard

A template theme

This is:

A multi-portal academic institutional ecosystem.