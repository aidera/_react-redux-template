import React from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { compose } from "redux";
import { Helmet } from "react-helmet";
import Registry from "./Registry";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import { AppStateType } from "../../redux/root.reducer";

const mapStateToProps = (state: AppStateType) => ({});

const mapDispatchToProps = {};

type StoreType = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;
type PathPropsType = {};
type PropsType = StoreType & RouteComponentProps<PathPropsType>;

class RegistryContainer extends React.PureComponent<PropsType> {
  render() {
    return (
      <>
        <Helmet>
          <title>Registry page</title>
        </Helmet>
        <AuthLayout ChildComponent={() => <Registry />} />
      </>
    );
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(RegistryContainer);
