import React from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { compose } from "redux";
import { Helmet } from "react-helmet";
import Error from "./Error";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { AppStateType } from "../../redux/root.reducer";

const mapStateToProps = (state: AppStateType) => ({});

const mapDispatchToProps = {};

type StoreType = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;
type PathPropsType = {};
type PropsType = StoreType & RouteComponentProps<PathPropsType>;

class ErrorContainer extends React.PureComponent<PropsType> {
  render() {
    return (
      <>
        <Helmet>
          <title>Page not found</title>
        </Helmet>
        <MainLayout ChildComponent={() => <Error />} />
      </>
    );
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(ErrorContainer);
