# React Components Collection

A collection of interactive React components built with modern React patterns and hooks. This project showcases various UI components commonly used in web applications.

## Features

This project includes the following interactive components:

### Accordion
- Single and multi-selection modes
- Collapsible content sections
- Toggle functionality with smooth interactions

### Random Color Generator
- Generates random colors
- Interactive color display
- Color manipulation features

### Star Rating
- Interactive star rating component
- Hover effects and click interactions
- Customizable number of stars
- Uses React Icons for star display

### Image Slider
- Dynamic image carousel
- Fetches images from Picsum Photos API
- Pagination support
- Smooth sliding animations

### Load More Data
- Progressive data loading
- API integration for fetching additional content
- Loading states and error handling

## Tech Stack

- **React 19** - Latest React with modern features
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and formatting
- **React Icons** - Icon library for UI elements
- **CSS Modules** - Scoped styling for components

## Installation

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

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── accordion/
│   │   ├── Accordion.jsx
│   │   ├── data.js
│   │   └── styles.css
│   ├── image-slider/
│   │   ├── ImageSlider.jsx
│   │   └── styles.css
│   ├── load-more-data/
│   │   ├── LoadMoreData.jsx
│   │   └── styles.css
│   ├── random-color/
│   │   ├── RandomColor.jsx
│   │   └── styles.css
│   └── star-rating/
│       ├── StarRating.jsx
│       └── styles.css
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## Component Usage

### Accordion
```jsx
import Accordion from './components/accordion/Accordion'

function App() {
  return <Accordion />
}
```

### Star Rating
```jsx
import StarRating from './components/star-rating/StarRating'

function App() {
  return <StarRating noOfStars={5} />
}
```

### Image Slider
```jsx
import ImageSlider from './components/image-slider/ImageSlider'

function App() {
  return (
    <ImageSlider
      url={'https://picsum.photos/v2/list'}
      page={'1'}
      limit={'10'}
    />
  )
}
```

### Random Color Generator
```jsx
import RandomColor from './components/random-color/RandomColor'

function App() {
  return <RandomColor />
}
```

### Load More Data
```jsx
import LoadMoreData from './components/load-more-data/LoadMoreData'

function App() {
  return <LoadMoreData />
}
```
