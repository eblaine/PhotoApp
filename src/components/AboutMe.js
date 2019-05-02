import React, { Component } from "react";

export default class AboutMe extends Component<AboutMeProps> {
  render() {
    return (
      <div className="AboutMe">
        <div>Write about yourself for Homework</div>
        <img
          className="ImageOfMe"
          src="https://uploads.codesandbox.io/uploads/user/d763b02f-c8a1-4529-bb6c-15832c4e793d/SeUm-Me.jpg"
          alt="A image of Jane"
        />
      </div>
    );
  }
}

type AboutMeProps = {};
