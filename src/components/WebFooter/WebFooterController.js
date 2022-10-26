// @flow
import React from "react";

import WebFooterView from "./WebFooterView";

export default class WebFooterController extends React.Component {
  
  static defaultProps = {};

  render() {
    return <WebFooterView {...this.props} />;
  }
}
