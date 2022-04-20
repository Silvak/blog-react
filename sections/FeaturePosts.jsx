import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { FeaturedPostCard } from '../components';
import { getFeaturedPosts } from '../services';


const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className="absolute w-full">
      <div className='flex justify-between w-full'>
        <div className="arrow-btn py-3 flex justify-center cursor-pointer bg-[#ffd300]" onClick={() => previous()}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#101630]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </div>
        <div className="arrow-btn py-3 flex justify-center cursor-pointer bg-[#ffd300]" onClick={() => next()} >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#101630]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);

  const ArrowFix = (arrowProps) => { 
    const {carouselState, children, ...restArrowProps} = arrowProps; 
    return ( 
      <span {...restArrowProps}> 
        {children} 
      </span> 
    ); 
  };

  return (
      <Carousel infinite ssr={true} responsive={responsive} arrows={false} customButtonGroup={<ButtonGroup />} itemClass="px-3">
          {dataLoaded && featuredPosts.map((post, index) => (
            <FeaturedPostCard key={index} post={post} />
          ))}
      </Carousel>
  );
};

export default FeaturedPosts;