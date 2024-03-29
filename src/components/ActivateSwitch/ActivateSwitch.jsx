import React, { Component } from "react";
import Switch from "react-switch";
import unlocked from "../../../public/unlocked.png";
import locked from "../../../public/locked.png";

let url = unlocked;

export default class ActivateSwitch extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    url = locked;
    this.setState({ checked });
    var base_url = window.location.origin;
    console.log(base_url);
    let tID = setTimeout(function () {
      // redirect page.
      window.location.href = base_url + "/capsuleGallery";

      window.clearTimeout(tID); // clear time out.
    }, 1000);
  }

  render() {
    return (
      <div>
        <div className="flex justify-center">
          <img
            src={url}
            alt="Logo"
            style={{ width: "600px", height: "auto" }}
          ></img>
        </div>
        <div className="content-center capsule-description">
          <h1 className="user">
            <b>Emma,</b>
          </h1>
          <p className="description">Your capsule of love has been created</p>
        </div>
        <br />
        <div className="example flex items-center justify-center">
          <label htmlFor="normal-switch">
            <label htmlFor="material-switch">
              <Switch
                checked={this.state.checked}
                onChange={this.handleChange}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={150}
                className="react-switch"
                id="material-switch"
              />
              <br />
              <span className="flex justify-center">activate capsule</span>
            </label>
          </label>
        </div>
      </div>
    );
  }
}
