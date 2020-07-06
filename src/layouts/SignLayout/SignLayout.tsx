import React from "react";
import s from "./SignLayout.module.sass";
import bgImage from "../../assets/images/sign-bg.jpg";

type PropsType = {
  children: React.ReactNode;
};

const MainLayout: React.FC<PropsType> = React.memo((props: PropsType) => {
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
