import React from 'react';
import { UncontrolledCarousel } from "reactstrap";

//import Images
import img01 from "../../assets/images/small/slider/11.jpg";
import img03 from "../../assets/images/small/slider/01.jpg";
import img04 from "../../assets/images/small/slider/02.jpg";

const ImageSlider = () => {
    return (
        <React.Fragment>
            <UncontrolledCarousel
        interval={4000}
        indicators={false}
        items={[
          {
            altText: " ",
            caption: " ",
            key: 1,
            src: img01,
          },

          {
            altText: " ",
            caption: " ",
            key: 3,
            src: img03,
          },
          {
            altText: " ",
            caption: " ",
            key: 3,
            src: img04,
          },
        ]}
      />
        </React.Fragment>
    );
}

export default ImageSlider;