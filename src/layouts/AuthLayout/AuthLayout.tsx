import React from "react";
import s from "./AuthLayout.module.scss";
import bgImage from "../../assets/images/sign-bg.jpg";

interface IProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<IProps> = React.memo((props: IProps) => {
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

export default AuthLayout;
