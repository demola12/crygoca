// @flow
import React from "react";
import HomeView from "./HomeView";

class HomeController extends React.Component {
  static propTypes = {};
  constructor(props) {
    super(props)
}

componentDidMount() {
  window.scrollTo(0, 0)
}
  render() {
    return <HomeView {...this.props} />;
  }
}

export default HomeController;
