import React from "react";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { ROUTES } from "../constants";
import {
  Home,
  Blog,
  Blog2,
  About,
  Terms,
  PageNotFound,
  Compare
  
} from "../pages";
import LayoutWrapper from "./LayoutWrapper";
import { BrowserRouter } from "react-router-dom";

const NoAuthRoute = ({ ...props }) => {
  return (
    <LayoutWrapper>
      <Route {...props} forceRefresh />
    </LayoutWrapper>
  );
};

class Routers extends React.PureComponent {
  render() {
    const { user } = this.props;
    const repeatedProps = {
      user,
      exact: true,
      forAdminOnly: false,
    };
    return (
      <Router>
        <div>
          <Switch>
            <NoAuthRoute
              path={ROUTES.HOME}
              component={Home}
              {...repeatedProps}
            />
            <NoAuthRoute
              path={ROUTES.COMPARE+"/:from"+"/:to"+"/:send"+"/:convert"+"/:amount"}
              component={Compare}
              {...repeatedProps}
            />
          <NoAuthRoute
              path={ROUTES.ABOUT}
              component={About}
              {...repeatedProps}
            />
          <NoAuthRoute
              path={ROUTES.BLOG}
              component={Blog}
              {...repeatedProps}
            />
          <NoAuthRoute
              path={ROUTES.BLOG2}
              component={Blog2}
              {...repeatedProps}
            />
          <NoAuthRoute
              path={ROUTES.TERMS}
              component={Terms}
              {...repeatedProps}
            />
            
            
            <Route path={ROUTES.COMPARE+"/:from"+"/:to"+"/:send"+"/:convert"} render={() => (<Redirect to={ROUTES.COMPARE+"/gb/ng/gbp/ngn/100"} />)} />
            <Route path={ROUTES.COMPARE+"/:from"+"/:to"+"/:send"} render={() => (<Redirect to={ROUTES.COMPARE+"/gb/ng/gbp/ngn/100"} />)} />
            <Route path={ROUTES.COMPARE+"/:from"+"/:to"} render={() => (<Redirect to={ROUTES.COMPARE+"/gb/ng/gbp/ngn/100"} />)} />
            <Route path={ROUTES.COMPARE+"/:from"} render={() => (<Redirect to={ROUTES.COMPARE+"/gb/ng/gbp/ngn/100"} />)} />
            <Route path={ROUTES.COMPARE} render={() => (<Redirect to={ROUTES.COMPARE+"/gb/ng/gbp/ngn/100"} />)} />
            {/* Keep this in last always */}
            <NoAuthRoute path={Route.PAGE_NOT_FOUND} component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

const actions = {};

export default connect(mapStateToProps, actions)(Routers);
