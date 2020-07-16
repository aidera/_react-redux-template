import React from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { compose } from "redux";
import { Helmet } from "react-helmet";
import Index from "./Index";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { AppStateType } from "../../redux/root.reducer";

const mapStateToProps = (state: AppStateType) => ({});

const mapDispatchToProps = {};

type StoreType = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;
type PathPropsType = {};
type PropsType = StoreType & RouteComponentProps<PathPropsType>;

class IndexContainer extends React.PureComponent<PropsType> {
  render() {
    return (
      <>
        <Helmet>
          <title>Index page</title>
        </Helmet>
        <MainLayout>
          {/*<Index posts={[]} />*/}
        </MainLayout>
      </>
    );
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(IndexContainer);
