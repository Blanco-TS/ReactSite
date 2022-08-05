import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Carousel.css';

const Carousel = () => {
  const indicators = (index) => (<div className="indicators">{index + 1}</div>);
return (
    
<Fade
  arrows={false}
  onChange={function noRefCheck(){}}
  indicators={indicators} scale={1.4}
>
  <div className="each-slide">
    <div>
      <img
        alt="First"
        src="/images/pic1.jpg"
      />
    </div>

  </div>
  <div className="each-slide">

    <div>
      <img
        alt="Second"
        src="/images/pic2.jpg"
      />
    </div>
  </div>
  <div className="each-slide">
    <div>
      <img
        alt="Third"
        src="/images/pic3.jpg"
      />
    </div>

  </div>
</Fade>
);
};

export default Carousel;