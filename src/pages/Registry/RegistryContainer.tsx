import React from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { compose } from "redux";
import { Helmet } from "react-helmet";
import Registry from "./Registry";
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

class RegistryContainer extends React.PureComponent<PropsType> {
  render() {
    return (
      <>
        <Helmet>
          <title>Registry page</title>
        </Helmet>
        <SignLayout>
          <Registry />
        </SignLayout>
      </>
    );
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(RegistryContainer);
