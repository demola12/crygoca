// @flow
import React from "react";
import AboutView from "./AboutView";

class AboutController extends React.Component {
  static propTypes = {};
  constructor(props) {
    super(props)
}

componentDidMount() {
  window.scrollTo(0, 0)
}
  render() {
    return <AboutView {...this.props} />;
  }
}

export default AboutController;
