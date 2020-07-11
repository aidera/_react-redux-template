import React from "react";
import { BrowserRouter, withRouter } from "react-router-dom";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { setInitial, setGlobalError, initializeApp } from "./redux/app-actions";
import { getInitialized, getGlobalError } from "./redux/app-selectors";
import store from "./redux/store";
import "./assets/theme/theme.scss";
import Preloader from "./components/Preloader/Preloader";
import Router from "./Router";
import { AppStateType } from "./redux/root-reducer";

const mapStateToProps = (state: AppStateType) => ({
  initialized: getInitialized(state),
  globalError: getGlobalError(state),
});

const mapDispatchToProps = {
  initializeApp,
  setGlobalError,
};

type StoreProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

type StateProps = {
  isModalOpen: boolean;
};

type PropsType = StoreProps;

class App extends React.PureComponent<PropsType, StateProps> {
  componentDidMount() {
    const { initializeApp } = this.props;
    initializeApp();
  }

  render() {
    const { initialized } = this.props;
    if (!initialized) {
      return <Preloader />;
    }
    return <Router isAuth />;
  }
}

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App) as React.ComponentType;

const AppContainerWithStore: React.FC = () => (
  <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
);

export default AppContainerWithStore;
