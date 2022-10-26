// @flow
import React from "react";

import Card2View from "./Card2View";

export default class Card2Controller extends React.Component {
  
  static defaultProps = {};

  render() {
    return <Card2View {...this.props} />;
  }
}
