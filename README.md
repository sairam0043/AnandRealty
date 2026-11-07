# Anand Realty — Official Luxury Real Estate Web Application

A modern, high-performance luxury real estate web portal built for **Anand Realty**, inspired by top-tier Dubai property advisory platforms.

---

## 🌟 Highlights & Features

- **Full-Width Luxury Aesthetic**: Designed with deep obsidian backgrounds (`#0C1117`), champagne gold accents (`#D4AF37`), Cinzel serif display typography, and smooth responsive layout across mobile, tablet, and desktop screens.
- **Hero & Value Proposition**: High-impact Dubai skyline backdrop, value statement (*"Built on Loyalty, Transparency & Trust"*), quick consultation shortcuts, and trust badges.
- **Immediate Requirement Capture**: Interactive lead form placed directly below the hero banner (Name, Email, Phone, Requirement text area) with real-time feedback and state reset.
- **Our Expertise (Services)**:
  - *Buy & Sell Properties* (Residential & Commercial Brokerage)
  - *Investment Guidance* (Strategic Real Estate Advisory)
  * *Property Management* (Asset & Tenancy Management)
  * Interactive **"LEARN MORE" modal dialogs** providing detailed service breakdowns and client checklists.
- **About Anand Realty**: Authentic presentation of company mission, vision, and core pillars (*Integrity & Trust, Client-First Focus, Market Knowledge*) with Dubai architecture imagery.
- **Full Contact Section & Office Card**: Dedicated consultation form with budget selectors, Business Bay headquarters address, telephone dialer, email client link, and direct WhatsApp chat.
- **Global Footer & Compliance Modals**: Fast navigation, custom social links (Instagram, YouTube, Facebook), back-to-top button, and interactive **Privacy Policy** and **Accessibility Statement** modals.
- **Floating Actions**: Floating WhatsApp launcher and direct telephone button.

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have Node.js (v18 or higher) installed on your system.

### 2. Installation
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open **`http://localhost:5173/`** in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

---

## 📁 Project Structure

```
Anand Realty/
├── public/
│   └── favicon.svg           # Custom Anand Realty gold monogram favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky navigation with mobile drawer
│   │   ├── Hero.jsx          # Hero section with skyline backdrop & CTAs
│   │   ├── QuickContactBar.jsx # Quick requirement capture form
│   │   ├── ServicesSection.jsx # Services grid + detail modal
│   │   ├── AboutSection.jsx  # About Anand Realty & core pillars
│   │   ├── ContactSection.jsx # Full contact form & Business Bay card
│   │   ├── Footer.jsx        # Global footer & social links
│   │   ├── LeadModal.jsx     # "Get In Touch" popup consultation modal
│   │   ├── LegalModal.jsx    # Privacy policy & accessibility statement modal
│   │   └── FloatingActions.jsx # Floating WhatsApp and phone buttons
│   ├── data/
│   │   └── websiteData.js    # Single source of truth for all content & contact info
│   ├── App.jsx               # Master view integrating all components
│   ├── index.css             # Full-width 100% reset & typography setup
│   └── main.jsx              # React 19 application entry point
├── index.html                # HTML entry with Tailwind CSS & Google Fonts
└── package.json
```

---

## 🛠️ Customization

All website content, contact numbers, email addresses, office location, and service descriptions are centralized in:

👉 **`src/data/websiteData.js`**

Simply update the values in `siteConfig` to modify your phone number, email, or office location across the entire site instantly.

---

© 2026 Anand Realty L.L.C. All rights reserved.
