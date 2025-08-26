# ChessMaster Academy - Video Library Website

A modern, responsive chess video library website built with React. This project provides a comprehensive platform for chess enthusiasts to access instructional videos organized by difficulty level and category.

## Features

- **Responsive Design**: Mobile-first approach with beautiful UI/UX
- **Video Library**: Organized video content with filtering by difficulty
- **Interactive Navigation**: Smooth routing between pages
- **Modern UI**: Clean, professional design with smooth animations
- **Difficulty Filtering**: Filter videos by Beginner, Intermediate, or Advanced levels
- **Contact Form**: Functional contact form with validation
- **Mobile Optimized**: Fully responsive design for all devices

## Video Categories

1. **ChessMaster Academy** - Core lessons and fundamentals
2. **Tactical Patterns** - Tactical combinations and motifs
3. **Endgame Mastery** - Endgame techniques and principles
4. **Strategic Concepts** - Strategic thinking and planning

## Technology Stack

- **Frontend**: React 18
- **Routing**: React Router DOM
- **Styling**: CSS3 with modern features
- **Build Tool**: Create React App
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chess-video-library
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation header
│   ├── Home.js         # Homepage component
│   ├── VideoLibrary.js # Video library with filtering
│   ├── Contact.js      # Contact form
│   └── *.css           # Component-specific styles
├── App.js              # Main app component with routing
├── App.css             # App-level styles
├── index.js            # React entry point
└── index.css           # Global styles
```

## Features in Detail

### Video Library
- **Clickable Video Cards**: Each video card is clickable and shows video details
- **Difficulty Filtering**: Filter videos by skill level (Beginner, Intermediate, Advanced)
- **Organized Categories**: Videos are grouped into logical categories
- **Video Information**: Duration, difficulty level, and descriptions for each video

### Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Flexible Grid**: Video grid adapts to different screen sizes
- **Touch-Friendly**: Optimized for touch interactions
- **Modern Navigation**: Mobile hamburger menu with smooth animations

### User Experience
- **Smooth Animations**: Hover effects and transitions
- **Visual Feedback**: Interactive elements provide clear feedback
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Performance**: Optimized rendering and smooth scrolling

## Customization

### Adding New Videos
To add new videos, modify the `videoData` object in `VideoLibrary.js`:

```javascript
{
  id: uniqueId,
  title: "Video Title",
  duration: "MM:SS",
  difficulty: "beginner|intermediate|advanced",
  thumbnail: "emoji_or_icon",
  description: "Video description"
}
```

### Styling
- Colors are defined in CSS custom properties
- Responsive breakpoints are set at 768px
- Modern CSS features like Grid, Flexbox, and CSS Variables are used

### Content
- Update video titles, descriptions, and durations
- Modify category names and organization
- Add new difficulty levels if needed

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Configure custom domain if needed

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support or questions, please contact us through the contact form on the website or email support@chessmasteracademy.com.

---

**ChessMaster Academy** - Empowering chess players worldwide through quality education and comprehensive video content. 