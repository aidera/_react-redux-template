import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";
import ItemContainer from "./pages/Item/ItemContainer";
import IndexContainer from "./pages/Index/IndexContainer";
import ErrorContainer from "./pages/Error/ErrorContainer";
import LoginContainer from "./pages/Login/LoginContainer";

const Router: React.FC = React.memo(() => {
  return (
    <Suspense fallback={<Preloader />}>
      <Switch>
        <Route path="/item/:itemId?" render={() => <ItemContainer />} />

        {/* <Route exact path='/'> <Redirect to='/profile'/> </Route> */}

        <Route path="/login" render={() => <LoginContainer />} />

        <Route exact path="/" render={() => <IndexContainer />} />

        <Route path="*" render={() => <ErrorContainer />} />
      </Switch>
    </Suspense>
  );
});

export default Router;
