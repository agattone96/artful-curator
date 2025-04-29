# 🎨 Artful Curator

_A fully AI-powered SaaS platform that transforms bulk-uploaded images into museum-quality artwork descriptions, with instant export options for artists, galleries, and collectors._

---

## 🚀 Live Demo
Coming Soon

---

## 📚 Overview

Artful Curator is an AI-enhanced image processing SaaS that allows users to:
- Upload multiple artworks/images at once
- Generate **curated, gallery-level descriptions** automatically via AI
- Edit and refine descriptions inside a live dashboard
- Export collections in **CSV, JSON, or XLSX** formats for use in catalogs, websites, or inventory systems
- Manage user authentication, subscriptions, and bulk file operations easily

---

## 🛠️ Tech Stack

| Technology      | Purpose                               |
| :-------------- | :------------------------------------ |
| **Next.js**     | Frontend Framework (React-based)      |
| **Firebase**    | Authentication, Firestore, Storage    |
| **Framer Motion** | UI Animations & Transitions        |
| **Docker**      | Full app containerization             |
| **Cypress / Jest** | Automated Testing (Unit, E2E)      |

---

## 🎯 Core Features

- 🔒 **Authentication**: Email + Password sign-up/login
- 📸 **Bulk Image Upload**: Drag-and-drop or multi-select uploader
- 🤖 **AI Descriptions**: Vision models generating professional artwork summaries
- 📊 **Export Options**: Download all data in CSV, JSON, or XLSX
- 🔄 **Real-Time Dashboard**: See status updates live as images process
- 🔥 **Retry/Regenerate**: Fix failed AI generations on-demand
- 💎 **Paid Subscription Integration**: Stripe billing system (future upgrade ready)
- 📱 **Mobile-First Design**: Fully responsive and fast
- 🐳 **Docker-Ready**: Production builds deploy anywhere

---

## 📂 Project Structure

```bash
├── src/
│   ├── components/       # UI Components
│   ├── hooks/             # React Hooks (Auth, Upload)
│   ├── services/          # Firebase & AI Services
│   └── pages/             # Next.js Pages
├── public/                # Static Assets
├── functions/             # Firebase Functions (serverless backend)
├── tests/                 # Unit, Integration, E2E Tests
├── Dockerfile             # Production Dockerfile
├── docker-compose.yml     # Local Development Stack
└── README.md              # Project Documentation
