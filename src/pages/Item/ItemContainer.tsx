import React from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { compose } from "redux";
import { Helmet } from "react-helmet";
import Item from "./Item";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { AppStateType } from "../../redux/root.reducer";

const mapStateToProps = (state: AppStateType) => ({});

const mapDispatchToProps = {};

type StoreType = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;
type PathPropsType = {
  itemId: string;
};

type PropsType = StoreType & RouteComponentProps<PathPropsType>;

class IndexContainer extends React.PureComponent<PropsType> {
  render() {
    const { match } = this.props;
    return (
      <>
        <Helmet>
          <title>Item {match.params.itemId}</title>
        </Helmet>
        <MainLayout
          ChildComponent={() => <Item itemId={match.params.itemId} />}
        />
      </>
    );
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(IndexContainer);
