import React from "react";
import Carousel from "react-bootstrap/Carousel";

export const SlideShow = () => {
  return (
    <Carousel style={{fontFamily: "Fredoka One"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/200/50"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome To KwitIt</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/200/50"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Make a Kwit</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/200/50"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Find Users to Connect</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
