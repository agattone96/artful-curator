<<<<<<< HEAD

## Running with Docker

This project provides a multi-service Docker setup for local development and deployment. The configuration uses multiple Dockerfiles and a `docker-compose.yml` to orchestrate the build and run process for the main app and its supporting services.

### Project-Specific Docker Requirements
- **Node.js Version:** All Node-based services use `node:22.13.1-slim` (set via `ARG NODE_VERSION=22.13.1` in Dockerfiles).
- **Production Builds:** The main app is built with React and served via Nginx (`nginx:alpine`).
- **Non-root User:** All containers run as a non-root user for security.
- **Deterministic Installs:** Uses `npm ci` and Docker build cache for reproducible builds.

### Services and Exposed Ports
| Service Name                                 | Build Context                              | Exposed Port (Host:Container) |
|----------------------------------------------|--------------------------------------------|-------------------------------|
| js-artful-curator-functions                  | ./artful-curator/functions                 | 3001:3000                     |
| js-artful-curator-artful-curator-functions   | ./artful-curator/artful-curator/functions  | 3002:3000                     |
| js-artful-curator                           | ./artful-curator                          | 8080:80                       |
| js-artful-curator-artful-curator             | ./artful-curator/artful-curator            | 3003:3000                     |

All services are connected via the `artful-curator-net` Docker network.

### Environment Variables
- No required environment variables are specified in the Dockerfiles or `docker-compose.yml` by default.
- If you have environment-specific settings, you can create `.env` files in the respective service directories and uncomment the `env_file` lines in `docker-compose.yml`.

### Build and Run Instructions
1. **Clone the repository and navigate to the project root.**
2. **Build and start all services:**
   ```sh
   docker compose up --build
   ```
   This will build all images and start the containers as defined in `docker-compose.yml`.
3. **Access the main app:**
   - Open [http://localhost:8080](http://localhost:8080) in your browser (served by Nginx).
4. **Other services:**
   - Functions services are available on ports 3001, 3002, and 3003 (see table above).

### Special Configuration
- **Port Mapping:** Each service is mapped to a unique host port to avoid conflicts.
- **Optional .env Files:** If you need to set environment variables, create `.env` files in the appropriate directories and uncomment the `env_file` lines in `docker-compose.yml`.
- **Network:** All services are attached to a custom bridge network (`artful-curator-net`) for internal communication.

---

_This section was updated to reflect the current Docker-based setup for this project. For more details on individual services, refer to their respective directories and Dockerfiles._
=======
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
>>>>>>> 21bae0e

