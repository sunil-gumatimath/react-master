import './styles.css'
import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

const ImageSlider = ({ url, limit, page }) => {

  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (getUrl) => {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }

    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== '') {
      fetchImages(url);
      console.log(images);

    }
  }, [url, page, limit])



  if (loading) {
    return <div>Loading data! Please wait</div>
  }

  if (errorMsg !== null) {
    return <div>Error Occurred! {errorMsg}</div>
  }

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
  }

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
  }

  return (
    <div className='container'>
      <BsArrowLeftCircleFill onClick={handlePrevious} className='arrow arrow-left' />
      {
        images && images.length ?
          images.map((imageItem, index) => (
      <img
        key={imageItem.id}
        alt={imageItem.download_url}
        src={imageItem.download_url}
        className={currentSlide === index ? 'current-image' : 'current-image hide-current-image'}
      />
      ))
      : null
      }
      <BsArrowRightCircleFill onClick={handleNext} className='arrow arrow-right' />
      <span className='circle-indicator'>
        {
          images && images.length ?
            images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index ? 'current-indicator' : 'current-indicator hide-current-indicator'
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
            : null
        }
      </span>
    </div>
  )
}

export default ImageSlider
