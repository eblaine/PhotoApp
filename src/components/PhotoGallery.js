import React, { Component } from "react";
import { render } from "react-dom";
import Gallery from "react-grid-gallery";

export default class PhotoGallery extends Component<GalleryProps> {
  render() {
    // TODO: find some images
    // TODO: display them with
    return (
      <div>
        <div>gallery coming soon</div>
        <Gallery />
      </div>
    );
  }
}

type GalleryProps = {};
