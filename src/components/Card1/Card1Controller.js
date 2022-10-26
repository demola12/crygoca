// @flow
import React from "react";

import Card1View from "./Card1View";

export default class Card1Controller extends React.Component {
  
  static defaultProps = {};

  render() {
    return <Card1View {...this.props} />;
  }
}
