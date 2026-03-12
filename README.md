# Sakshyat Pradhan — Portfolio

Interactive portfolio website showcasing product operations work, projects, and case studies.

**Live:** [sakshyat-portfolio.vercel.app](https://sakshyat-portfolio.vercel.app)

---

## About

Sakshyat Pradhan — Product Operations Analyst with ~1 year of experience working across product, engineering, and tech operations in startup environments. Skilled in requirement analysis, storefront migrations, experimentation, and cross-functional execution. Based in Bengaluru, India.

**Contact:** ritikpradhan1000@gmail.com | [LinkedIn](https://www.linkedin.com/in/sakshyat-pradhan) | [GitHub](https://github.com/ritik019)

---

## Work Experience

### Product Operations Analyst — Tectonic Labs Pvt. Ltd. (Apr 2025 – Present)
- Led end-to-end Shopify-to-Tectonic storefront migrations for 15+ merchants (Vaaree, Frido, Lets Beco), mapping product data and metafields for seamless product discovery and merchandising workflows.
- Authored structured PRDs and implementation plans translating merchant requirements into engineering-ready documentation, reducing functional gaps by 30%.
- Partnered with merchant teams to understand catalog structures, discovery challenges, and merchandising strategies, translating business needs into actionable product configurations.
- Configured storefront discovery features including search, filters, badges, variants, and upsell components aligned with merchant merchandising strategies.
- Supported storefront launches powering 600K+ daily sessions, 14K+ daily orders, and 145K+ product catalogs. Drove A/B testing that improved product discovery CTR by 12%.

### Software Developer Intern — Gravitech Dreams Pvt. Ltd. (Feb 2023 – Aug 2023)
- Developed responsive UI components using HTML, CSS, JavaScript, and Bootstrap, translating Figma designs into production-ready interfaces across 5+ web modules.
- Integrated frontend components with backend services built using Java, JSP, and Servlets, collaborating with backend engineers for smooth data flow.
- Improved frontend performance by optimizing DOM rendering, reducing redundant API calls, and implementing reusable components.

---

## Projects

### AI Restaurant Recommendation Service
AI-powered restaurant recommendation platform enabling intent-driven discovery using natural language queries (e.g., "romantic Italian dinner under ₹1500"). Features a recommendation pipeline combining semantic search embeddings, heuristic scoring, and LLM-based re-ranking.

- **GitHub:** [ritik019/Gen-ai-project](https://github.com/ritik019/Gen-ai-project)
- **Live Demo:** [gen-ai-project-omega.vercel.app](https://gen-ai-project-omega.vercel.app)
- **Tech:** Python, Semantic Search, LLM, Analytics

### ChatGPT Voice Input Prototype
UX case study and interactive high-fidelity prototype demonstrating a voice input flow for ChatGPT. Features a 4-screen interactive flow (Home → Listening → Edit → Chat) with waveform animations, live transcription, and editable text review.

- **GitHub:** [ritik019/chatgpt-voice-prototype](https://github.com/ritik019/chatgpt-voice-prototype)
- **Prototype:** Included in `case studies/index.html`
- **Tech:** HTML, CSS, JavaScript, UX Design

### E-Learning Gaming Website (Final Year Project)
Gamified e-learning platform featuring 10+ interactive educational games designed to improve user engagement and learning retention. Owned the end-to-end product lifecycle including requirement gathering, feature planning, development, testing, and deployment.

- **GitHub:** [ritik019/Project](https://github.com/ritik019/Project)
- **Tech:** JavaScript, Game Design, Full-Stack

---

## Case Studies (PDFs)

Located in the `case studies/` folder:

- **Improving Driver Supply in Uber** — `Improving-Driver-Supply-in-Uber.pdf`
- **Improving Product Discovery in Zepto** — `Improving-Product-Discovery-in-Zepto.pdf`
- **Milestone 3 Report** — `Milestone3_Sakshyat 6.16.55 PM.pdf`

---

## Education

- **B.E. in Computer Science** — Savitribai Phule Pune University (SPPU) | CGPA: 7.82 | 2020–2024
- **Higher Secondary Certificate (Class XII)** — Army Public School, Pune | CGPA: 7.35 | 2019–2020

---

## Skills & Expertise

**Product & Execution:** PRD Writing, Requirement Analysis, User Stories, Feature Prioritization, Product Operations, Stakeholder Management, Sprint Planning

**Analytics & Experimentation:** A/B Testing, Product Metrics (CTR, Conversion Rate, Bounce Rate), SQL, Funnel Analysis, Data Interpretation

**Tools:** Figma, ClickUp, Google Sheets, Notion, GitHub

---

## Leadership

**Secretary — Entrepreneurship Cell (E-Cell):** Led planning and execution of entrepreneurship workshops and student-led initiatives, coordinating cross-functional teams of 20+ members for successful event delivery attracting 500+ participants.

---

## Tech Stack (Portfolio Site)

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion, GSAP + ScrollTrigger
- **Smooth Scroll:** Lenis
- **Deployment:** Vercel

## Getting Started

```bash
npm install
npm run dev       # Start dev server
npm run build     # Production build
npm run preview   # Preview build
```

---

## Portfolio Sections

| Section | Component | Description |
|---------|-----------|-------------|
| Hero | `Hero.jsx` | Full-viewport intro with parallax and particles |
| About | `About.jsx` | Professional summary, stats (15+ merchants, 600K+ sessions, 12% CTR) |
| Journey | `Journey.jsx` | Animated timeline: Student → Developer → Product Ops → Aspiring APM |
| Projects | `CaseStudies.jsx` | 3 projects with GitHub + Live Demo links, scroll-through case studies |
| Thinking | `ProductThinking.jsx` | Prioritization, Metrics, User Empathy, Experimentation |
| Skills | `Skills.jsx` | Product & Execution, Analytics, Tools — skill bars + floating badges |
| Resume | `Resume.jsx` | Work experience + education with download button |
| Contact | `Contact.jsx` | Email CTA + LinkedIn, GitHub, Twitter, Email links |

---

## File Structure

```
Portfolio/
├── case studies/           # Case study PDFs + ChatGPT voice prototype
├── src/
│   ├── components/         # React components (Hero, About, Journey, etc.)
│   ├── context/            # ThemeContext (dark/light mode)
│   ├── hooks/              # useCountUp, useScrollProgress
│   ├── App.jsx             # Main app layout
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles + Tailwind
├── index.html              # HTML entry
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies
```
