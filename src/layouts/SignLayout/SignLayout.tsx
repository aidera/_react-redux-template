import React from "react";
import s from "./SignLayout.module.scss";
import bgImage from "../../assets/images/sign-bg.jpg";
import { AppStateType } from "../../redux/root-reducer";

type OwnPropsType = {
  children: React.ReactNode;
};

const mapStateToProps = (state: AppStateType, ownProps: OwnPropsType) => {
  return {
    children: ownProps.children,
  };
};

const mapDispatchToProps = {};

type StoreProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;
type PropsType = StoreProps;

class MainLayout extends React.PureComponent<PropsType> {
  render(): React.ReactNode {
    const { children } = this.props;

    return (
      <>
        <main className={s.page}>
          <div className={s.formBlock}>{children}</div>
          <div className={s.imgBlock}>
            <img src={bgImage} alt="" />
          </div>
        </main>
      </>
    );
  }
}

export default MainLayout;
