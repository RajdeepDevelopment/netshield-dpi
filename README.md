# NetShield DPI — Deep Packet Inspection Security Platform

Enterprise deep packet inspection (DPI) with machine learning-powered threat detection, real-time analytics, and automated response. Built by **Smoke Monkey** with Next.js 16 + Supabase.

## ✨ Features

- **Deep Packet Inspection (DPI)** — Layer 7 payload analysis for threat, DLP, and policy detection
- **Real-Time Threat Detection** — ML-powered classification of malicious traffic (99.7% accuracy)
- **Encrypted Traffic Analysis** — JA3 fingerprinting and TLS metadata inspection without decryption
- **Protocol Analysis** — 50+ protocols decoded: HTTP/S, DNS, SMTP, FTP, SSH, SCADA/ICS
- **Zero-Day Protection** — Behavioral baselining catches unknown threats
- **Data Loss Prevention** — Regex/pattern DLP on packet payloads
- **Automated Response** — Block, quarantine, ticket, or SOAR triggers
- **SIEM Integrations** — Splunk, Elastic, Sentinel, and 40+ platforms

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env.local
# Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY

# 3. Run dev server
npm run dev
# → http://localhost:3000
```

## 🗂 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page (hero, features, pricing teaser, CTA)
│   ├── features/             # /features — full feature grid
│   ├── solutions/            # /solutions — industry solutions
│   ├── how-it-works/         # /how-it-works — 4-step deployment path
│   ├── pricing/              # /pricing — 3-tier plans + FAQ
│   ├── resources/            # /resources — docs, whitepapers, case studies
│   ├── auth/
│   │   ├── sign-in/          # /auth/sign-in — Supabase email+password auth
│   │   └── sign-up/          # /auth/sign-up — signup + waitlist insert
│   ├── dashboard/            # /dashboard — post-auth landing (protected)
│   └── layout.tsx
├── components/
│   ├── navbar.tsx            # Shared sticky glass navbar (all pages)
│   └── footer.tsx            # Shared footer (all pages)
└── lib/supabase/client.ts    # Supabase browser client singleton
```

## 🔐 Auth & Data

- **Auth**: Supabase Auth (email + password, magic confirmation email)
- **Tables** (RLS-secured, anonymous INSERT allowed):
  - `waitlist` — sign-up subscribers (full_name, company, email, plan)
  - `demo_requests` — demo booking requests
  - `contact_messages` — contact form submissions
- **Dashboard** at `/dashboard` is protected — redirects to `/auth/sign-in` when unauthenticated.

## 🎨 Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (Turbopack, App Router) |
| UI | Tailwind CSS v4 + Framer Motion |
| Icons | Lucide React |
| Backend | Supabase (Postgres, Auth, RLS) |
| Deployment | Railway (see below) |

## 🚢 Deploy to Railway

1. Push this repo to GitHub.
2. In [Railway](https://railway.app), **New Project → Deploy from GitHub repo**.
3. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Set build command `npm run build` and start command `npm start`.

## 📄 Pages

| Route | Description |
|---|---|
| `/` | Landing — hero, trusted-by, features, stats, solutions, how-it-works, pricing teaser, CTA |
| `/features` | Full DPI feature catalog + advanced capabilities |
| `/solutions` | 6 industry solutions (enterprise, healthcare, finance, industrial, education, government) |
| `/how-it-works` | Deploy → Configure → Monitor → Respond + pipeline diagram |
| `/pricing` | Community (free) / Professional / Enterprise + FAQ |
| `/resources` | Whitepapers, docs, case studies, community links |
| `/auth/sign-in` | Secure sign-in with show-password toggle |
| `/auth/sign-up` | Free trial sign-up (writes to `waitlist`) |
| `/dashboard` | Post-auth protected dashboard |

---

© 2026 NetShield Security. Built by **Smoke Monkey**.