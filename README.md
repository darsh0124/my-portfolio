# Darsh Solanki — Developer Portfolio

A modern, dynamic, and fully responsive personal portfolio website built with pure HTML, CSS, and Vanilla JavaScript. Designed to impress recruiters at top tech companies like **Infosys**.

---

## 📁 Project Structure

```
portfolio/
├── index.html      # Main HTML markup
├── style.css       # All styles, themes & animations
├── script.js       # JavaScript — interactions & effects
└── README.md       # Project documentation
```

---

## ✨ Features

- **Dark / Light Mode** — Toggle between themes with smooth transitions
- **Custom Cursor** — Magnetic ring cursor with hover scaling effects
- **Particle Canvas** — Animated background with connected node particles
- **Typed Animation** — Auto-typing role titles in the hero section
- **Scroll Animations** — Staggered reveal on scroll (left, right, up)
- **Animated Skill Bars** — Progress bars animate into view on scroll
- **Counter-Up Numbers** — Stats count up when the About section is visible
- **Project Filters** — Filter cards by category (All / Web Dev / ML/AI)
- **Progress Bar** — Reading progress indicator at the top of the page
- **Contact Form** — Functional form with submission feedback
- **Fully Responsive** — Mobile-first layout across all screen sizes
- **Active Nav Highlight** — Nav links highlight based on scroll position

---

## 🛠️ Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Markup     | HTML5 (semantic)                    |
| Styling    | CSS3 (custom properties, grid, flex)|
| Scripting  | Vanilla JavaScript (ES2024)         |
| Fonts      | Inter, Space Grotesk, JetBrains Mono (Google Fonts) |

> No frameworks, no build tools, no dependencies — pure web standards.

---

## 🚀 Getting Started

### Run Locally

1. Clone or download the repository:
   ```bash
   git clone https://github.com/darsh0124/portfolio.git
   cd portfolio
   ```

2. Open `index.html` directly in your browser:
   ```bash
   # macOS
   open index.html

   # Windows
   start index.html

   # Linux
   xdg-open index.html
   ```

No build step or server required — it works straight from the file system.

### Optional — Live Server (VS Code)

Install the **Live Server** extension in VS Code, then right-click `index.html` → **Open with Live Server** for hot-reload during development.

---

## 🎨 Customisation

### Changing Colors / Theme

All design tokens are CSS custom properties defined at the top of `style.css`:

```css
[data-theme="dark"] {
  --accent:  #3b82f6;   /* Primary blue */
  --accent2: #8b5cf6;   /* Purple */
  --accent3: #06b6d4;   /* Cyan */
  --accent4: #10b981;   /* Green */
}
```

### Updating Content

All personal content lives in `index.html`:

| Section        | What to edit                              |
|----------------|-------------------------------------------|
| Hero           | Name, typed phrases, description, stats   |
| About          | Bio paragraphs, soft-skill chips          |
| Skills         | Skill bar names & percentages (`data-w`)  |
| Experience     | Role, company, dates, bullet points       |
| Projects       | Title, description, tech tags, links      |
| Certifications | Certificate name, issuer, date            |
| Education      | Degree, institution, year, score          |
| Contact        | Email, phone, location, social links      |

### Changing Typed Phrases

In `script.js`, edit the `phrases` array:

```js
const phrases = [
  'Frontend Developer',
  'React.js Engineer',
  'UI/UX Enthusiast',
  'Problem Solver',
  'CS Graduate 2026'
];
```

---

## 📄 Sections

1. **Hero** — Name, role, animated code card, key metrics
2. **About** — Bio, skills chips, animated stat cards
3. **Skills** — Animated progress bars + categorised tag groups
4. **Experience** — Internship at Prodigy Infotech
5. **Projects** — Filterable project cards with links
6. **Certifications** — Coursera credentials
7. **Education** — Academic timeline (SRM University)
8. **Contact** — Info cards, social links, contact form

---

## 📬 Contact

**Darsh Solanki**
- Email: [darshsolanki248@gmail.com](mailto:darshsolanki248@gmail.com)
- Phone: +91 8450898969
- GitHub: [github.com/darsh0124](https://github.com/darsh0124)
- LinkedIn: [linkedin.com/in/darsh-solanki-55a9b7222](https://linkedin.com/in/darsh-solanki-55a9b7222)

---

## 📝 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).
