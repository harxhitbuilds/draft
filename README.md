<div align="center">
  <img src="./client/public/assets/landing/dashboard.png" alt="Draft Platform Landing Page" width="100%" style="border-radius: 8px;" />

  <br />
  <br />

  <h1>Draft</h1>
  <p><strong>The blueprint for your next build.</strong></p>

  <p>
    Draft is a minimalist, zero-friction hub where creators drop raw ideas and assemble the exact talent they need to execute them. It’s where side projects find their team.
  </p>
</div>

---

## 🚀 The Problem & The Solution

Many developers have incredible side project concepts but lack the specific talent—like a frontend designer or a backend architect—to actually ship them.

**Draft** solves this fragmentation. It strips away the noise of traditional social media, replacing it with pure, action-oriented project parameters. Users interact through "Player Card" style developer profiles that expose their tech stacks and social endpoints directly, making it incredibly fast to find the right people, assemble a squad, and initialize the deployment.

## ✨ Core Features

- **Initialize Builds:** Post raw project ideas, define your tech stack, and clearly state the required roles (e.g., UI Designer, DevOps Engineer).
- **Player Card Profiles:** A gaming-inspired, highly technical profile system that displays a user's GitHub, LinkedIn, X/Twitter, and core skills.
- **Zero-Friction Discovery:** Search and filter active builds by technology or project title.
- **Technical Aesthetic:** A strict, deep dark-mode-first design utilizing sharp edges, monospace typography, and a minimalist black-and-white color palette.
- **Status Tracking:** Manage the lifecycle of your ideas (Draft, Open for Collaboration, In-Progress, Completed, Archived).

## 🛠️ Tech Stack

**Frontend**

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/) (Custom zinc & hyper-cyan theme)
- [Zustand](https://zustand-demo.pmnd.rs/) (State Management)
- [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) (Validation)

**Backend**

- [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) & Mongoose
- [Firebase Admin](https://firebase.google.com/docs/admin/setup) (Secure image storage)
- [Multer](https://www.npmjs.com/package/multer) (File handling)

---

## 💻 Local Development Setup

Follow these steps to get Draft running on your local machine.

### 1. Clone the repository

```bash
git clone [https://github.com/harxhitbuilds/draft.git](https://github.com/harxhitbuilds/draft.git)
cd draft
```

### 2. Backend Setup

Navigate to the server directory, install dependencies, and configure your environment.

```bash
cd server
npm install
```

Create a `.env` file in the `/server` directory:

```env
MONGO_URL=your_mongo_url
PORT=8000
FRONTEND_URL=frontend_url
NODE_ENV=env
REFRESH_TOKEN_SECRET=secret
ACCESS_TOKEN_SECRET=secret
ACCESS_TOKEN_EXPIRY=10d
REFRESH_TOKEN_EXPIRY=30d
JWT_SECRET=secret
FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=
```

Start the backend development server:

```bash
npm run dev
```

### 3. Frontend Setup

Open a new terminal, navigate to the client directory, and install dependencies.

```bash
cd client
npm install
```

Create a `.env.local` file in the `/client` directory:

```env
GOOGLE_CLIENT_SECRET=
GOOGLE_CLIENT_ID=
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=
```

Start the Next.js development server:

```bash
npm run dev
```

The platform should now be running at `http://localhost:3000`.

---

## 🤝 Contributing

Draft is built for the community. If you want to help improve the platform, whether it's optimizing the database schema, refining the UI, or adding new features, contributions are welcome.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 💬 Contact

Built by **harxhitbuilds**.

- **GitHub:** [@harxhitbuilds](https://github.com/harxhitbuilds)
- **Platform:** [Draft Live URL](https://draftt.harshitparmar.in)
- **Twitter:** [@harxhitbuilds](http://x.com/harxhitbuilds)

**Stop dreaming. Assemble your squad. Ship your ideas.**
