import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import s from "./AuthLayout.module.scss";
import bgImage from "../../assets/images/sign-bg.jpg";
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

class AuthLayout extends React.PureComponent<PropsType> {
  render(): React.ReactNode {
    const { ChildComponent } = this.props;

    return (
      <>
        <main className={s.page}>
          <div className={s.formBlock}>{ChildComponent()}</div>
          <div className={s.imgBlock}>
            <img src={bgImage} alt="" />
          </div>
        </main>
      </>
    );
  }
}

export default compose<React.ComponentType<OwnPropsType>>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(AuthLayout);
