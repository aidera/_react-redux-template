import Error from "./Error";
import React from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { compose } from "redux";
import { Helmet } from "react-helmet";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { AppStateType } from "../../redux/root-reducer";

const mapStateToProps = (state: AppStateType) => ({});

const mapDispatchToProps: MapDispatchToProps = {};

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;

type MapDispatchToProps = {};

type PathPropsType = {};

type PropsType = MapStateToPropsType &
  MapDispatchToProps &
  RouteComponentProps<PathPropsType>;

class ErrorContainer extends React.PureComponent<PropsType> {
  render() {
    return (
      <>
        <Helmet>
          <title>Page not found</title>
        </Helmet>
        <MainLayout>
          <Error />
        </MainLayout>
      </>
    );
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(ErrorContainer);