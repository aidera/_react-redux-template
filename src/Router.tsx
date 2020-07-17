import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";
import Error from "./pages/Error";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Registry from "./pages/Registry";
import Index from "./pages/Index";

interface IRouter {
  isAuth: boolean;
}

const Router: React.FC<IRouter> = React.memo((props: IRouter) => {
  const { isAuth } = props;

  return (
    <Suspense fallback={<Preloader />}>
      {isAuth && (
        <Switch>
          <Route path="/post/:postId?" render={() => <Post />} />

          <Route path="/login" render={() => <Login />} />
          <Route path="/registry" render={() => <Registry />} />

          <Route exact path="/" render={() => <Index />} />

          <Route path="*" render={() => <Error />} />
        </Switch>
      )}
      {!isAuth && (
        <Switch>
          <Route path="/login" render={() => <Login />} />
          <Route path="/register" render={() => <Registry />} />
          <Route exact path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      )}
    </Suspense>
  );
});

export default Router;
