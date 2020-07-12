import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import s from "./MainLayout.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { AppStateType } from "../../redux/root.reducer";

type OwnPropsType = {
  ChildComponent: () => any;
};

const mapStateToProps = (state: AppStateType, ownProps: OwnPropsType) => {
  return {
    ChildComponent: ownProps.ChildComponent,
  };
};

const mapDispatchToProps = {};

type StoreProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;
type PropsType = StoreProps;

class MainLayout extends React.PureComponent<PropsType> {
  render(): React.ReactNode {
    const { ChildComponent } = this.props;

    return (
      <div className={s.mainLayout}>
        <Header />
        {ChildComponent()}
        <Footer />
      </div>
    );
  }
}

export default compose<React.ComponentType<OwnPropsType>>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(MainLayout);
