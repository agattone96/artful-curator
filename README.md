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
