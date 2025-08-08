# CarDoctor

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://nextjs-car-doctor-amber.vercel.app/)
[![License](https://img.shields.io/github/license/mdmhrz/nextjs-car-doctor?style=for-the-badge)](https://github.com/mdmhrz/nextjs-car-doctor/blob/main/LICENSE)

---

## 🚗 Project Overview

**CarDoctor** is a modern, responsive web application built with Next.js designed for a car repair shop. It allows users to schedule car repairs online, manage their appointments, and access repair services seamlessly.

The app supports:

- User registration and login with credentials.
- Social login integrations with Facebook, Google, LinkedIn, and GitHub via NextAuth.
- Online scheduling system for car repair appointments.
- Secure and user-friendly interface with smooth animations.

---

## 🛠 Tech Stack & Packages Used

- **Framework:** Next.js (v15.4.5)
- **React:** 19.1.0
- **Authentication:** next-auth (Social and Credential login)
- **Database:** MongoDB
- **Styling:** Tailwind CSS, DaisyUI
- **Animations:** Framer Motion
- **Notifications:** React Toastify
- **Icons:** React Icons
- **Security:** bcrypt for password hashing
- **Other utilities:** clsx, tailwind-merge

---

## 🚀 Live Demo

Try the live version here: [https://nextjs-car-doctor-amber.vercel.app/](https://nextjs-car-doctor-amber.vercel.app/)

---

## 📁 Project Structure
```
mdmhrz-nextjs-car-doctor/
├── public/
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   └── services.json
├── src/
│   ├── app/
│   │   ├── api/                  # API routes (Next.js app router)
│   │   ├── auth/                 # Authentication pages & components
│   │   ├── checkout/             # Checkout pages
│   │   ├── components/           # Reusable UI components used by pages
│   │   ├── myBookings/           # User bookings pages
│   │   ├── services/             # Service detail & related components
│   │   ├── shoppingCart/         # Shopping cart page
│   │   ├── actions/              # Server actions like login, register
│   │   ├── globals.css           # Global styles
│   │   ├── layout.js             # Root layout
│   │   ├── page.js               # Home page
│   │   └── middleware.js         # Middleware logic
│   ├── components/               # Site-wide components like Navbar & Footer
│   ├── lib/                      # Utility functions & DB connection
│   └── Providers/                # Context Providers (e.g., NextAuth)
├── package.json
├── pnpm-lock.yaml
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── postcss.config.mjs
└── README.md
```

---

## 🔧 Installation & Setup

1. Clone the repo:

```bash
git clone https://github.com/mdmhrz/nextjs-car-doctor.git
cd nextjs-car-doctor
```
---

2. Install dependencies:
```
npm install
# or
pnpm install
```
---
3. Create a .env.local file in the root directory and add the following:
```
# Database
NEXT_PUBLIC_MONGO_URI=
DB_NAME=

# NextAuth
NEXTAUTH_SECRET=
NEXTAUTH_URL=

# Google OAuth
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# GitHub OAuth
GITHUB_ID=
GITHUB_SECRET=

# Facebook OAuth
FACEBOOK_CLIENT_ID=
FACEBOOK_CLIENT_SECRET=

# LinkedIn OAuth
LINKEDIN_CLIENT_ID=
LINKEDIN_CLIENT_SECRET=

```


4. Run the development server:
```
npm run dev
# or
pnpm dev
```
---

Open http://localhost:3000 to view the app.

---
## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---
## 📞 Contact
Created by <a href='https://www.linkedin.com/in/mdmhrz/'>Mobarak Hossain Razu</a> – feel free to connect!

---

⭐ If you find this project useful, please give it a star!
```
---

If you want, I can help you add screenshots or badges for testing coverage, CI, or others. Just ask!
```
