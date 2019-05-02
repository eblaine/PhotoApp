import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

export default class Slideshow extends Component<SlideshowProps> {
  render() {
    // TODO: find some images
    // TODO: display them with https://react-bootstrap.netlify.com/components/carousel/
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://uploads.codesandbox.io/uploads/user/d763b02f-c8a1-4529-bb6c-15832c4e793d/tlNZ-IMG_0369.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Monument Valley</h3>
              <p />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://uploads.codesandbox.io/uploads/user/d763b02f-c8a1-4529-bb6c-15832c4e793d/ekeU-IMG_0387.jpg"
              alt="Second Slide"
            />

            <Carousel.Caption>
              <h3>Monument Valley</h3>
              <p />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src="https://uploads.codesandbox.io/uploads/user/d763b02f-c8a1-4529-bb6c-15832c4e793d/vQnL-Grand%20Canyon%20Sun%20and%20Bridge%20.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Grand Canyon </h3>
              <p />
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

type SlideshowProps = {};
//
