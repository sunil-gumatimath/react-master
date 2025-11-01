import './App.css'
import Accordion from './components/accordion/Accordion'
import RandomColor from './components/random-color/RandomColor'
import StarRating from './components/star-rating/StarRating'
import ImageSlider from './components/image-slider/ImageSlider'
import LoadMoreData from './components/load-more-data/LoadMoreData'

function App() {
  return (
    <>
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={5} /> */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'} /> */}
      <LoadMoreData />
    </>
  );
}

export default App
