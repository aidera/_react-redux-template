import React from "react";
import s from "./MainLayout.module.sass";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

type OwnPropsType = {
  children: React.ReactNode;
};

const MainLayout: React.FC<OwnPropsType> = React.memo((props: OwnPropsType) => {
  const { children } = props;

  return (
    <>
      <Header />

      <main className={s.page}>
        <div className="container">{children}</div>
      </main>

      <Footer />
    </>
  );
});

export default MainLayout;
