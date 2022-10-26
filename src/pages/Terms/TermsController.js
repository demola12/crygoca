// @flow
import React from "react";
import TermsView from "./TermsView";

class TermsController extends React.Component {
  static propTypes = {};
  constructor(props) {
    super(props)
}

componentDidMount() {
  window.scrollTo(0, 0)
}
  render() {
    return <TermsView {...this.props} />;
  }
}

export default TermsController;
