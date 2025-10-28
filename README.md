# React Components Collection

A collection of interactive React components built with modern React 19 and Vite, designed for learning and demonstration purposes.

## 🚀 Components

### 1. Image Slider
A dynamic image slider component that fetches and displays images from an external API with navigation controls.

**Features:**
- Fetches images from external API (Picsum Photos)
- Configurable image limits and pagination
- Smooth navigation with arrow buttons (left/right)
- Circular navigation (wraps from last to first)
- Visual indicators showing current slide position
- Interactive dot indicators for direct navigation
- Loading and error handling states
- Responsive design with smooth transitions

**Current Status:** Active component in the app

### 2. Random Color Generator
An interactive color generator that creates random colors in both HEX and RGB formats.

**Features:**
- Generate random HEX colors (e.g., `#FF5733`)
- Generate random RGB colors (e.g., `rgb(255,87,51)`)
- Live background color preview
- Toggle between color formats
- Click to generate new colors

**Current Status:** Available (commented out in App.jsx)

### 3. Star Rating Component
An interactive star rating component with hover effects and smooth transitions.

**Features:**
- Interactive star rating (default 5 stars, customizable)
- Hover effects for rating preview
- Smooth color transitions
- Click to set rating
- Proper cursor indication for interactive stars
- Visual feedback with golden yellow active stars and gray inactive stars

**Current Status:** Available (commented out in App.jsx)

### 4. Accordion FAQ
A collapsible accordion component displaying React-related FAQs and concepts.

**Features:**
- Single-selection mode (default)
- Multi-selection mode (toggleable)
- Smooth expand/collapse animations
- 5 React learning topics including:
  - What is React?
  - How do hooks work?
  - What is JSX?
  - How do I handle forms in React?
  - What is the difference between props and state?

**Current Status:** Available (commented out in App.jsx)

## 🛠️ Tech Stack

- **React 19.1.1** - Latest React version for modern components
- **Vite 7.1.7** - Fast build tool and development server
- **React Icons 5.5.0** - Popular icon library for React components
- **ESLint** - Code linting and formatting
- **CSS Modules** - Styled components with scoped styles

## 📦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sunil-gumatimath/react-master.git
cd react-master
```

2. Install dependencies:
```bash
bun install
```

3. Start the development server:
```bash
bun run dev
```

4. Open [http://localhost:8081](http://localhost:8081) in your browser

## 📝 Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Create production build
- `bun run preview` - Preview production build locally
- `bun run lint` - Run ESLint for code quality checks

## 🏗️ Project Structure

```
src/
├── components/
│   ├── accordion/
│   │   ├── Accordion.jsx    # Main accordion component
│   │   ├── data.js          # FAQ data for accordion
│   │   └── styles.css       # Accordion styling
│   ├── image-slider/
│   │   ├── ImageSlider.jsx  # Dynamic image slider with API integration
│   │   └── styles.css       # Image slider styling
│   ├── random-color/
│   │   ├── RandomColor.jsx  # Color generator component
│   │   └── styles.css       # Color generator styling
│   └── star-rating/
│       ├── StarRating.jsx   # Interactive star rating component
│       └── styles.css       # Star rating component styling
├── App.jsx                  # Main app component
├── App.css                  # App-wide styles
├── index.css                # Global styles
└── main.jsx                 # App entry point
```

## 🎯 Learning Outcomes

This project demonstrates:
- Modern React hooks (`useState`, `useEffect`)
- Component-based architecture
- State management (including multiple states)
- Asynchronous operations with `async/await` and API fetching
- Error handling in React components
- Loading states and conditional rendering
- Props passing and component configuration
- Event handling (onClick, onMouseEnter, onMouseLeave)
- CSS styling and responsive design
- CSS transitions and smooth animations
- Conditional rendering and dynamic className application
- Array manipulation (mapping, indexing) for multi-selection and interactive components
- Props passing and default values
- Interactive UI components with visual feedback
- Third-party library integration (React Icons)
