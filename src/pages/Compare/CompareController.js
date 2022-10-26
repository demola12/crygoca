// @flow
import React from "react";
import CompareView from "./CompareView";

class CompareController extends React.Component {
  static propTypes = {};
  constructor(props) {
    super(props)
}

componentDidMount() {
  window.scrollTo(0, 0)
}
  render() {
    return <CompareView {...this.props} />;
  }
}

export default CompareController;
