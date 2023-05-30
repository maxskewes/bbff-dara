import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';

const BBFFCarousel = () => {
  const CarouselImageBox = ({ src, alt, children }) => {
    return (
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Box
          sx={{
            minWidth: ['400px', '500px', '600px', '700px'],
            minHeight: ['300px', '400px', '450px', '500px'],
            maxWidth: ['400px', '500px', '600px', '700px'],
            maxHeight: ['300px', '400px', '450px', '500px'],
          }}
        >
          <Box
            sx={{
              objectFit: 'cover',
            }}
            src={src}
            alt={alt}
          >
            {children}
          </Box>
        </Box>
      </Box>
    );
  };

  const LegendBox = () => {
    return (
      <Box sx={{ maxWidth: '500px', minWidth: '500px' }}>
        <p className='legend'></p>
      </Box>
    );
  };

  return (
    <>
      <Box>
        <Carousel autoPlay width='100vw'>
          <CarouselImageBox>
            <img src='/images/carousel/1.jpg' alt='image1' />
          </CarouselImageBox>
          <CarouselImageBox>
            <img src='/images/carousel/2.jpg' alt='image2' />
          </CarouselImageBox>
          <CarouselImageBox>
            <img src='/images/carousel/3.jpg' alt='image3' />
          </CarouselImageBox>
        </Carousel>
      </Box>
    </>
  );
};

export default BBFFCarousel;
