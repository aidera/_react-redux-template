import React, { useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { initializeApp } from "./redux/app/app.actions";
import { getInitialized } from "./redux/app/app.selectors";
import "./assets/theme/theme.scss";
import Preloader from "./components/Preloader/Preloader";
import Router from "./Router";
import { AppStateType } from "./redux/root.reducer";

const App: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const initialized = useSelector<AppStateType>((state) =>
    getInitialized(state)
  );

  useEffect(() => {
    if (!initialized) {
      dispatch(initializeApp());
    }
  }, [initialized, dispatch]);

  if (!initialized) return <Preloader />;
  return <Router isAuth />;
});

export default connect()(App);
