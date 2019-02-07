import React, { Component } from "react";
import Slideshow from "./Slideshow";

export default class Home extends Component<HomeProps> {
  render() {
    return (
      <div>
        <div>Home page</div>
        <Slideshow />
      </div>
    );
  }
}

type HomeProps = {};
