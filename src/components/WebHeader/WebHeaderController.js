// @flow
import React from "react";

import WebHeaderView from "./WebHeaderView";

export default class WebHeaderController extends React.Component {
 

  render() {
    return (
      <WebHeaderView {...this.props} />
    );
  }
}
