import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';

const BBFFCarousel = () => {
  const CarouselImageBox = ({ src, alt, children }) => {
    return (
      // <Box width='100%'>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          objectFit: 'cover',
        }}
        src={src}
        alt={alt}
      >
        <Box sx={{ width: 500, height: 500 }}>{children}</Box>
      </Box>
      // </Box>
    );
  };

  const LegendBox = () => {
    return (
      <Box sx={{ maxWidth: '500px', minWidth: '500px' }}>
        <p className='legend'>Image 1</p>
      </Box>
    );
  };

  return (
    <>
      <Box
      // sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '600px' }}
      >
        <Carousel autoPlay width='500px'>
          <CarouselImageBox>
            <img src='/images/carousel/VookDadKaraoke.jpg' alt='image1' />
            <Box sx={{ maxWidth: '500px', minWidth: '500px' }}>
              <h1 className='legend'>Image 1</h1>
            </Box>
          </CarouselImageBox>
          <CarouselImageBox>
            <img src='/images/carousel/AnotherBaby.jpg' alt='image2' />
            <p className='legend'>Image 2</p>
          </CarouselImageBox>
          <CarouselImageBox>
            <img src='/images/carousel/W!BG.png' alt='image3' />
            <p className='legend'>Image 3</p>
          </CarouselImageBox>
        </Carousel>
      </Box>
    </>
  );
};

export default BBFFCarousel;
