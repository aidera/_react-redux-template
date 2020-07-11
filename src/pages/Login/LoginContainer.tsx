import React from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { compose } from "redux";
import { Helmet } from "react-helmet";
import Login from "./Login";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import { AppStateType } from "../../redux/root-reducer";

const mapStateToProps = (state: AppStateType) => ({});

const mapDispatchToProps = {};

type StoreType = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;
type PathPropsType = {};
type PropsType = StoreType & RouteComponentProps<PathPropsType>;

class LoginContainer extends React.PureComponent<PropsType> {
  render() {
    return (
      <>
        <Helmet>
          <title>Login page</title>
        </Helmet>
        <AuthLayout>
          <Login />
        </AuthLayout>
      </>
    );
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(LoginContainer);
