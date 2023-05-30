import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const BLACK = '#1C1C1C';

export const useStyles = makeStyles(() => ({
  sliderBox: {
    position: 'relative',
    width: '80vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    maxHeight: '50vh',
  },
  arrowR: {
    fontSize: '30px',
    padding: '0 50px',
    cursor: 'pointer',
    color: BLACK,
    zIndex: 10,
    userSelect: 'none',
  },
  arrowL: {
    fontSize: '30px',
    padding: '0 50px',
    cursor: 'pointer',
    color: BLACK,
    zIndex: 10,
    userSelect: 'none',
  },
}));

const ImageSlider = (props) => {
  const { jobTitle = null, jobArray = null, jobFolder = null } = props;
  const classes = useStyles();
  const [current, setCurrent] = useState(0);
  const length = jobArray.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  };

  if (!Array.isArray(jobArray) || jobArray.length <= 0) {
    return null;
  }

  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>{jobTitle}</h1>
      {jobArray.map((img, index) => {
        return (
          <Box
            key={index}
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            {index === current && (
              <Box>
                <Box display='flex' justifyContent='center' alignItems='center'>
                  <FaArrowAltCircleLeft
                    className={classes.arrowL}
                    onClick={prevSlide}
                  />
                  <h1 style={{ color: 'BLACK' }}>{`${index + 1}`}</h1>
                  <FaArrowAltCircleRight
                    className={classes.arrowR}
                    onClick={nextSlide}
                  />
                </Box>
                <Box>
                  <img
                    src={`/images/${jobFolder}/${img}`}
                    alt={`${index + 1}`}
                    className={classes.image}
                  />
                </Box>
              </Box>
            )}
          </Box>
        );
      })}
    </Container>
  );
};

export default ImageSlider;
