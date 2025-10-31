import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const LoadMoreData = () => {


  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0);


  async function fetchProduct() {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts(result.products)
      }

      console.log(result);

    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);


  if (loading) {
    return <div>Loading data ! Please wait. </div>
  }


  return (
    <div className='load-more-container'>
      <div className='product-container'>
        {
          products && products.length ?
            products.map(item => (
              <div className='product' key={item.key}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                />
                <p>{item.title}</p>
              </div>)
            ) : null
        }
      </div>
      <div className='button-container'>
        <button>Load More Products</button>
      </div>
    </div>
  )
}

export default LoadMoreData