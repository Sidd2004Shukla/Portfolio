# 🚀 Siddharth Shukla — Developer Portfolio

A modern, single-page personal portfolio website built with **React.js**, showcasing my skills, projects, education, certifications, and resume.

---

## ✨ Features

- 🖥️ **Single-page application** — smooth scroll navigation between all sections
- 🎨 **Animated background vectors** — subtle decorative visuals layered below content
- 📱 **Responsive design** — works across desktop, tablet, and mobile
- 🌙 **Dark/Light theme toggle**
- 🧠 **Skills section** — Spring Boot and Android development with live GIFs
- 🎓 **Education section** — IIIT Bhagalpur and Heritage International School
- 🏆 **Certifications section** — dedicated tab with all certification cards
- 💼 **Projects section** — full-width project cards with tech stack tags
- 📄 **Resume viewer** — toggle-to-show PDF viewer with download option
- 📬 **Contact section** — profile photo, social links, and email

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React.js |
| Routing | React Router DOM |
| Animations | React Reveal |
| PDF Viewer | react-pdf |
| Styling | CSS Modules |
| Hosting | Vercel |

---

## 📁 Project Structure

```
src/
├── assets/            # Images, GIFs, fonts, and PDF resume
├── components/        # Reusable UI components (Header, Footer, Cards...)
├── containers/        # Feature containers (Skills, Education, Certifications...)
├── pages/             # Full pages (Home, Projects, Contact, Resume)
├── portfolio.js       # 🔧 All personal data lives here
└── index.css          # Global styles
```

---

## ⚙️ Customize Your Portfolio

Open **`src/portfolio.js`** and update:

- `greeting` — your name, subtitle, GitHub and resume links
- `skills` — your skill categories, descriptions, and software skills
- `educationInfo` — your university and school details
- `certifications` — your certification list
- `publications` (used for projects) — your project cards with GitHub links
- `contactPageData` — your contact info and profile image

---

## 🚀 Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/portfolio.git

# 2. Install dependencies
npm install

# 3. Start development server
npm start
```

The app will open at `http://localhost:3000`

---

## 🌐 Deploy on Vercel

### Option A — GitHub Integration (Auto-deploy)
1. Push code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. Click **Deploy** — done!

### Option B — Vercel CLI
```bash
npm install -g vercel
npm run build
vercel
```

---

## 📸 Sections Preview

| Section | Description |
|---------|-------------|
| **Home** | Greeting, name, subtitle, and CTA buttons |
| **Skills** | Spring Boot & Android developer sections with animated GIFs |
| **Education** | College and school timeline |
| **Certifications** | All certification badges |
| **Projects** | GitHub project cards with tech stack tags |
| **Contact** | Profile photo, bio, and social media links |
| **Resume** | Toggle-to-view PDF with download option |

---

## 👤 Author

**Siddharth Shukla**
- 🎓 IIIT Bhagalpur
- 💻 Spring Boot & Android Developer
- 📧 [GitHub](https://github.com/Sidd2004Shukla)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
