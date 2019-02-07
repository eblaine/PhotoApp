import React, { Component } from "react";
import PhotoGallery from "./PhotoGallery";

export default class Link extends Component<LinkProps> {
  render() {
    return (
      <div>
        <div>Link page</div>
        <div>Gallery coming soon</div>
        {/*TODO https://www.npmjs.com/package/react-grid-gallery 
        <PhotoGallery />*/}
      </div>
    );
  }
}

type LinkProps = {};
