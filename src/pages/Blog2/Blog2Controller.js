// @flow
import React from "react";
import Blog2View from "./Blog2View";

class Blog2Controller extends React.Component {
  static propTypes = {};
  constructor(props) {
    super(props)
}

componentDidMount() {
  window.scrollTo(0, 0)
}
  render() {
    return <Blog2View {...this.props} />;
  }
}

export default Blog2Controller;
