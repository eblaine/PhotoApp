import React, { Component } from "react";
//import { render } from "react-dom";

export default class PhotoGallery extends Component<GalleryProps> {
  render() {
    // TODO: find some images
    // TODO: display them with
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div>Gallery coming soon</div>
        <div className="NatureGallery">
          <img
            src={
              "https://uploads.codesandbox.io/uploads/user/d763b02f-c8a1-4529-bb6c-15832c4e793d/tU6B-IMG_0612.jpg"
            }
            className={"Gallery-photo"}
          />
          <img
            src={
              "https://uploads.codesandbox.io/uploads/user/d763b02f-c8a1-4529-bb6c-15832c4e793d/lRsg-Airplane%20Sunset.jpg"
            }
            className={"Gallery-photo"}
          />
          <img
            src={
              "https://uploads.codesandbox.io/uploads/user/d763b02f-c8a1-4529-bb6c-15832c4e793d/QAmO-Grand%20Canyon%20Sun%20and%20Bridge%20.jpg"
            }
            className={"Gallery-photo"}
          />
          <img
            src={
              "https://uploads.codesandbox.io/uploads/user/d763b02f-c8a1-4529-bb6c-15832c4e793d/ZIU1-Peanut%20On%20Hearth.jpg"
            }
            className={"Gallery-photo"}
          />
        </div>
      </div>
    );
  }
}
type GalleryProps = {};
