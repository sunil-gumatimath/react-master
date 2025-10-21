# React Components Collection

A collection of interactive React components built with modern React 19 and Vite, designed for learning and demonstration purposes.

## 🚀 Components

### 1. Random Color Generator
An interactive color generator that creates random colors in both HEX and RGB formats.

**Features:**
- Generate random HEX colors (e.g., `#FF5733`)
- Generate random RGB colors (e.g., `rgb(255,87,51)`)
- Live background color preview
- Toggle between color formats
- Click to generate new colors

**Current Status:** Active component in the app

### 2. Accordion FAQ
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
- **ESLint** - Code linting and formatting
- **CSS Modules** - Styled components with scoped styles

## 📦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sunil-gumatimath/react-master.git
cd accordion
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8081](http://localhost:8081) in your browser

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🏗️ Project Structure

```
src/
├── components/
│   ├── accordion/
│   │   ├── Accordion.jsx    # Main accordion component
│   │   ├── data.js          # FAQ data for accordion
│   │   └── styles.css       # Accordion styling
│   └── random-color/
│       ├── RandomColor.jsx  # Color generator component
│       └── styles.css       # Color generator styling
├── App.jsx                  # Main app component
├── App.css                  # App-wide styles
├── index.css                # Global styles
└── main.jsx                 # App entry point
```

## 🎯 Learning Outcomes

This project demonstrates:
- Modern React hooks (`useState`, `useEffect`)
- Component-based architecture
- State management
- Event handling
- CSS styling and responsive design
- Conditional rendering
- Array manipulation for multi-selection

## 🤝 Contributing

This is a learning project from FreeCodeCamp React curriculum. Feel free to explore, modify, and enhance the components.

## 📄 License

This project is part of a learning journey and can be used for educational purposes.
