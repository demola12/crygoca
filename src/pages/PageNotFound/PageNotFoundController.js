// @flow
import React from "react";
import PageNotFoundView from "./PageNotFoundView";

class PageNotFoundController extends React.Component {
  static propTypes = {};
  constructor(props) {
    super(props)
}

componentDidMount() {
  window.scrollTo(0, 0)
}
  render() {
    return <PageNotFoundView {...this.props} />;
  }
}

export default PageNotFoundController;
