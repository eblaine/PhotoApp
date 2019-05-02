import React, { Component } from "react";
import PhotoGallery from "./PhotoGallery";

export default class Nature extends Component<NatureProps> {
  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div>Gallery coming soon</div>
        <PhotoGallery />
      </div>
    );
  }
}

type NatureProps = {};
