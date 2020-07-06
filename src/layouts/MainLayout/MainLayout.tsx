import React from "react";
import s from "./MainLayout.module.sass";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

type PropsType = {
  children: React.ReactNode;
};

const MainLayout: React.FC<PropsType> = React.memo((props: PropsType) => {
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
