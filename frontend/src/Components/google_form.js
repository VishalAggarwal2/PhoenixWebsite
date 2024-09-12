import React from "react";
import FestCSS from "./Recruitment.module.css";

class Drone extends React.Component {
  formUrl="https://docs.google.com/forms/d/e/1FAIpQLSdsRsNA-0DxiWAYgidQ6LHa6jPfLKBNRR3D_fvZykp8Xl-N6Q/viewform?usp=sharing"
  state = {
    // check if the iframe is hovered
    iframeMouseOver: false
  };

  componentDidMount() {
    // Focus the page
    window.focus();
    // Add listener to check when page is not focussed
    // (i.e. iframe is clicked into)
    window.addEventListener("blur", this.onWindowBlur);
  }

  componentWillUnmount() {
    // Clean up
    window.removeEventListener("blur", this.onWindowBlur);
  }

  // If the iframe is hovered and the page becomes
  // blurred then the iframe must have been clicked
  onWindowBlur = () => {
    const { iframeMouseOver } = this.state;
    if (iframeMouseOver) {
        this.props.DisableNav();
    }
  };

  handleOnMouseOver = () => {
    this.setState({ iframeMouseOver: true });
  };

  handleOnMouseOut = () => {
    window.focus(); // Make sure to set focus back to page
    this.setState({ iframeMouseOver: false });
  };

  render() {
    return (
      <>
        <div
          className={"iframeWrapper "+FestCSS.main}
          onMouseOver={this.handleOnMouseOver}
          onMouseOut={this.handleOnMouseOut}
        >
          <iframe title = "form" style= {FestCSS.frame}  src="https://noteforms.com/forms/phoenix-drone-website-nvccqn" width="2000" height="700" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          {/* <iframe title="Form" classname={FestCSS.frame} src={this.formUrl} width="640" height="770" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
        </div>
      </>
    );
  }
}

export default Drone;