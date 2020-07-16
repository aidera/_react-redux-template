import React from "react";
import s from "./MainLayout.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

interface IProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<IProps> = React.memo((props: IProps) => {
  const { children } = props;

  return (
    <div className={s.mainLayout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
});

export default MainLayout;
