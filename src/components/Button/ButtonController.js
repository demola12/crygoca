// @flow
import React from "react";

import ButtonView from "./ButtonView";

export default class ButtonController extends React.Component {
  
  static defaultProps = {};

  render() {
    return <ButtonView {...this.props} />;
  }
}
