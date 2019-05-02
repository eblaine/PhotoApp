import React, { Component } from "react";
import Slideshow from "./Slideshow";

export default class Home extends Component<HomeProps> {
  render() {
    return (
      <div className="Home">
        <div>Home page</div>

        <Slideshow />
      </div>
    );
  }
}

type HomeProps = {};
