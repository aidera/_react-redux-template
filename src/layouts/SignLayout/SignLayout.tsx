import React from "react";
import s from "./SignLayout.module.sass";
import bgImage from "../../assets/images/sign-bg.jpg";

type OwnPropsType = {
  children: React.ReactNode;
};

const MainLayout: React.FC<OwnPropsType> = React.memo((props: OwnPropsType) => {
  const { children } = props;

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
});

export default MainLayout;
