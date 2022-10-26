// @flow
import React from "react";
import BlogView from "./BlogView";

class BlogController extends React.Component {
  static propTypes = {};
  constructor(props) {
    super(props)
}

componentDidMount() {
  window.scrollTo(0, 0)
}
  render() {
    return <BlogView {...this.props} />;
  }
}

export default BlogController;
