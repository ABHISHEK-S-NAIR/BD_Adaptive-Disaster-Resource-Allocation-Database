# Adaptive Disaster Resource Allocation Platform

A full-stack emergency response command center that tracks real-time resource availability, matches demand using priority rules, automates volunteer deployment, and enforces low-stock alerts. The backend is built with Node.js/Express and PostgreSQL, while the frontend uses React with data visualisations powered by Recharts.

## Features

- **Disaster Operations Dashboard** with live KPIs, readiness charts, and low-stock alerts.
- **CRUD flows for resources, demand requests, transports, dispatches, and volunteers** including trigger-driven behaviours (low stock alerts, auto severity escalation, volunteer availability sync).
- **Stored functions & procedures** such as `allocate_resource`, `assign_volunteer`, and `count_pending_requests`, surfaced via REST endpoints and interactive UI forms.
- **Analytics workspace** showing aggregated metrics, joins, and nested queries (bar/line charts + raw tables).
- **Access management** GUI to create roles, provision users, and manage privileges stored in PostgreSQL.

## Project Structure

```
client/         # React frontend (Vite)
server/         # Express API layer
  sql/          # PostgreSQL schema, functions, and seed data
```

## Prerequisites

- Node.js 18+
- PostgreSQL 14+

## Database Setup

```powershell
# inside server/sql
psql -U <username> -h <host> -p <port> -f schema.sql
psql -U <username> -h <host> -p <port> -f functions.sql
psql -U <username> -h <host> -p <port> -f seed.sql
```

Set the connection string in `server/.env` (copy `.env.example`).

## Install & Run

```powershell
# API
cd server
npm install
npm run dev

# Frontend (in new terminal)
cd ../client
npm install
npm run dev
```

The Vite dev server (5173) proxies `/api` to the Express API at port 4000.

## Testing Workflows

- **Low-stock alert trigger:** Reduce `quantity_available` to 5 or lower via the Resources form to log an alert and surface it on the dashboard.
- **Severity escalation trigger:** Add ≥3 high-priority requests for a disaster; severity upgrades to Critical automatically.
- **Volunteer auto-assignment:** Use the Volunteer page to request a skill-specific assignment and observe availability status changes.
- **Allocation procedure:** Allocate resources through the GUI to execute `allocate_resource`, adjust stock, and write to `allocation_log`.

## Next Steps

- Configure production-ready auth for the access management module.
- Add automated tests (Jest + React Testing Library / Supertest).
- Containerise services via Docker Compose for streamlined deployments.
