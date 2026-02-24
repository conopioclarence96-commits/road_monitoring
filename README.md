# Road Infrastructure & Transportation Monitoring System

A comprehensive web-based system for monitoring, managing, and reporting road infrastructure and transportation issues.

## 📁 Folder Structure

```
road_monitoring/
├── index.html              # Root redirect file (redirects to pages/index.html)
├── README.md               # Project documentation
├── .git/                   # Git version control
├── assets/                 # Static assets
│   ├── img/               # Images and media files
│   │   ├── cityhall.jpeg  # Background image
│   │   └── logocityhall.png # Logo image
│   ├── css/               # Stylesheets
│   │   └── style.css      # Main stylesheet (legacy)
│   └── js/                # JavaScript files
├── pages/                 # HTML pages
│   ├── index.html         # Main landing page
│   ├── login.html         # Login and registration page
│   ├── about.html         # About us page
│   ├── privacy.html       # Privacy policy page
│   └── help.html          # Help and FAQ page
└── includes/              # Reusable components (future use)
```

## 🚀 Getting Started

### Prerequisites
- Web server (XAMPP, Apache, Nginx, etc.)
- Modern web browser

### Installation
1. Clone or download this repository
2. Place files in your web server's root directory
3. Access via `http://localhost/road_monitoring/`

## 📄 Pages Overview

### Main Pages
- **Home (`pages/index.html`)**: Landing page with reports dashboard
- **Login (`pages/login.html`)**: User authentication and registration
- **About (`pages/about.html`)**: System information and mission
- **Privacy (`pages/privacy.html`)**: Data protection policy
- **Help (`pages/help.html`)**: FAQ and support documentation

### Features
- 📱 Responsive design for all devices
- 🎨 Modern glassmorphism UI with Tailwind CSS
- 🔐 User authentication system
- 📊 Road reporting and tracking
- 📧 Contact forms and support
- 🌐 Smooth animations and transitions

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript**: Interactive features
- **Responsive Design**: Mobile-first approach
- **Glassmorphism**: Modern UI design pattern

## 📱 Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 🔄 Navigation Flow

```
Root (index.html) → Landing Page (pages/index.html)
                     ↓
                 Login Page (pages/login.html)
                     ↓
                 User Dashboard (future)
```

## 🎨 Design System

### Colors
- Primary: `#6384d2` to `#285ccd` (blue gradient)
- Secondary: `#4d76d6` (light blue)
- Text: `#000000` (black), `#666666` (gray)
- Background: Glassmorphism with backdrop blur

### Typography
- Font: Poppins (Google Fonts)
- Sizes: 48px (headings), 26px (subheadings), 16px (body)

### Components
- Glass cards with backdrop blur
- Gradient buttons with hover effects
- Smooth transitions (0.3s ease-out)
- Responsive grid layouts

## 📝 Development Notes

### File Organization
- All HTML pages in `/pages/` directory
- Images in `/assets/img/` directory
- Stylesheets in `/assets/css/` directory
- JavaScript files in `/assets/js/` directory

### Path References
- Images: `../assets/img/`
- Pages: `../pages/`
- Root: `./` (from pages directory)

### Responsive Breakpoints
- Mobile: `≤768px`
- Tablet: `769px - 1024px`
- Desktop: `≥1025px`
- Large Desktop: `≥1200px`

## 🔧 Future Enhancements

- [ ] User dashboard with profile management
- [ ] Real-time report tracking
- [ ] Map integration with GIS
- [ ] Mobile app development
- [ ] API integration for external services
- [ ] Advanced analytics dashboard

## 📞 Support

For technical support or questions:
- Email: roads@lgu.gov.ph
- Phone: (555) 123-4567
- Visit: Help page at `/pages/help.html`

## 📄 License

© 2025 LGU Road Infrastructure & Transportation Monitoring System. All rights reserved.
