import React, { Component } from "react";
import Loader from "react-loader-spinner";

class LoaderSpinner extends Component {
  render() {
    return (
      <Loader
        type="Puff"
        color="#536488"
        height={80}
        width={80}
        timeout={3000}
      />
    );
  }
}

export default LoaderSpinner;
