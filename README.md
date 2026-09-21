# MediCare - Cloudflare Worker Deployment

Modern Medicine Delivery Single Page Application (SPA) deployed with Cloudflare Workers + Static Assets.

## 📁 Directory Structure
```text
.
├── public/
│   └── index.html       # Full frontend application
├── worker.js            # Cloudflare Worker fetch handler & API routes
├── wrangler.jsonc       # Cloudflare Workers configuration with static assets binding
├── package.json         # Node.js scripts for wrangler dev & deploy
├── .gitignore           # Git ignore configuration
└── README.md            # Setup and deployment documentation
```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:8787` in your browser.

### 3. Deploy to Cloudflare
```bash
# Login to Cloudflare account
npx wrangler login

# Deploy your app
npm run deploy
```
