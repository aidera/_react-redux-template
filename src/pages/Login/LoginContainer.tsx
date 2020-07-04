import React from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { compose } from "redux";
import { Helmet } from "react-helmet";
import Login from "./Login";
import SignLayout from "../../layouts/SignLayout/SignLayout";
import { AppStateType } from "../../redux/root-reducer";

const mapStateToProps = (state: AppStateType) => ({});

const mapDispatchToProps: MapDispatchToProps = {};

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;

type MapDispatchToProps = {};

type PathPropsType = {};

type PropsType = MapStateToPropsType &
  MapDispatchToProps &
  RouteComponentProps<PathPropsType>;

class IndexContainer extends React.PureComponent<PropsType> {
  render() {
    return (
      <>
        <Helmet>
          <title>Login page</title>
        </Helmet>
        <SignLayout>
          <Login />
        </SignLayout>
      </>
    );
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(IndexContainer);
