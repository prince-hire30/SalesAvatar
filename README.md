# Bharat Group · Sales Avatar CRM Portal

A full-stack, enterprise-grade CRM portal built for **Bharat Group**, replicating the reference Stitch design (`web application/stitch/projects/9613086492402635766/screens/e165d7d218924afdb87ff9d760f66941`) with pixel-level precision, responsive layout, full interactivity, and MySQL/Node.js integration.

---

## 🎨 Theme & Visual Palette

- **Main Background**: `#06152B`
- **Sidebar Background**: `#071B35`
- **Card Background**: `#0B203C` (Border: `#193B60`)
- **Sales Avatar Orange**: `#FF7A24`
- **Light Blue Highlight**: `#55C7FF`
- **Primary Text**: `#F5F8FF`
- **Secondary Text**: `#9DB2CC`
- **Success Emerald**: `#20C997`
- **Gold Laureate Frame**: `#F5A623`

---

## 🚀 Architecture & Stack

- **Frontend**: React 19, Vite, Lucide React icons, Canvas Confetti, Vanilla CSS custom design system.
- **Backend**: Node.js, Express.js (REST API on port `5000`).
- **Database**: MySQL 8.0 with `mysql2/promise` connection pool, automated table creation (`server/schema.sql`), and intelligent local store synchronization.

---

## 📁 Repository Structure

```
c:/Projects-BEF/Sales-avatar/
├── index.html                   # HTML entry with Plus Jakarta Sans & JetBrains Mono
├── package.json                 # Frontend dependencies (React, Vite, Lucide, Confetti)
├── src/
│   ├── api.js                   # API client connecting frontend to Node.js backend
│   ├── App.jsx                  # Root state orchestration, routes, modals & toasts
│   ├── index.css                # Dark theme design system matching reference screenshot
│   └── components/
│       ├── Sidebar.jsx          # Bharat Group logo, nav, Sales Command, profile
│       ├── TopNavbar.jsx        # Breadcrumb, tabs, search (Ctrl+K), export, notifications
│       ├── DashboardView.jsx    # Complete reference dashboard view with all 5 rows
│       ├── LeadsPipelineView.jsx# Visual Kanban pipeline with stages & deal totals
│       ├── WorkspaceView.jsx    # Chat, Feed, My Storage, Leaderboard, Attendance, Leave
│       ├── TicketsView.jsx      # Help & Tickets support center with SLA cards & timeline
│       └── Modals.jsx           # Apply Leave, Add Lead, Raise Ticket, Global Search
└── server/
    ├── package.json             # Express, mysql2, cors, dotenv
    ├── .env                     # Database credentials & port configuration
    ├── schema.sql               # MySQL 8.0 relational schema DDL
    └── src/
        ├── index.js             # Express API server with RESTful endpoints
        ├── db.js                # MySQL pool connection and table initialisation
        └── seedData.js          # Synchronized reference dataset from screenshot
```

---

## ⚡ Getting Started

### 1. Start the Backend API (Port 5000)
```powershell
cd server
npm install
node src/index.js
```

### 2. Configure MySQL Database
Edit [server/.env](file:///c:/Projects-BEF/Sales-avatar/server/.env) with your credentials (already pre-configured and connected):
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=4545
DB_NAME=sales_avatar
```

### 3. Production Deployment & Single-Port Hosting
The application is pre-configured so that Express serves both the REST API and the production React frontend build from `dist/`:
```powershell
# Build frontend
npm run build

# Start production server (hosts frontend + backend on port 5000)
npm start
```
For process managers (PM2 / Systemd):
```bash
pm2 start server/src/index.js --name "sales-avatar"
```

### 4. Start the Frontend in Development Mode (Port 5173 with HMR)
```powershell
npm run dev
```

---

## ✨ Key Features & Interactive Flows

1. **Dashboard (Matching Screenshot)**:
   - Personalized greeting banner: *Good afternoon, Prince 👋* with interactive punch-in toggle (`SINCE 9:23 AM -> Punched In`).
   - 4 Quick-Stats cards: *Attendance today (Present)*, *Next leave (No leave planned)*, *Next holiday (Diwali · In 24 days)*, *Monthly Rate (96.4% Good Standing)*.
   - October Attendance bar (83%) with sprint badge and 6-state status breakdown.
   - My Profile details card for Prince Tiwari (`prince.t@hire30.ai`, `+919565501189`).
   - 4 Primary KPI cards: *Active Pipeline Leads (142)*, *Follow-ups Due Today (28)*, *Closed Won Deals (34)*, *Pipeline Revenue (₹4.2 Cr)*.
   - **Recognition & Excellence**:
     - Winner of the Month gold card for **Pooja Kapri** (*Customer Champion*) with gold corner brackets, crown emblem, and quote.
     - Interactive celebration: 👍 Like (15), 👏 Celebrate (2), ❤️ Love (10), 💡 Insight, 🔥 Fire (4) with celebratory confetti.
     - Pinned founder comment and live congratulatory message sender.
   - **High-Intent Leads & Floor Pipeline**:
     - Exact records for Ananya Kapoor (Tata Capital), Rohan Deshmukh (Infosys), Siddharth Mehta (Reliance), Meenakshi Sundaram (Adani).
     - Live search filter, stage badge indicators, export CSV button, and pagination.

2. **Visual Sales Pipeline**:
   - Kanban stages: *Discovery Stage*, *Qualified*, *Proposal Sent*, *Negotiation*, *Contract Signed*, *Won*, *Lost*.
   - Live stage switching and total deal value counters.

3. **Workspace**:
   - **Chat**: Channels (`#sales-floor`, `#general`), direct messages, message composer.
   - **Feed**: Intranet win celebrations with rich post composer.
   - **My Storage**: Documents, sales playbooks, download actions, mock uploader.
   - **Leaderboard**: Top sales floor rankers, deals closed, quota achievements.
   - **Attendance**: 31-day calendar view, daily check-in logs.
   - **Leave & Holidays**: Entitlement counters, upcoming festival calendar, application workflow.

4. **Help & Tickets**:
   - Open, In Progress, Waiting on You, and Resolved summary cards.
   - Filter by status and search ticket numbers (`TKT-1042`, etc.).
   - Raise a Ticket modal with category, priority, and description.

5. **Global Shortcuts**:
   - Press <kbd>Ctrl</kbd> + <kbd>K</kbd> to open the global search modal anytime.
