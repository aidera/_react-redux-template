import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";
import PostContainer from "./pages/Post/PostContainer";
import IndexContainer from "./pages/Index/IndexContainer";
import ErrorContainer from "./pages/Error/ErrorContainer";
import LoginContainer from "./pages/Login/LoginContainer";
import RegistryContainer from "./pages/Registry/RegistryContainer";

type PropsType = {
  isAuth: boolean;
};

const Router: React.FC<PropsType> = React.memo((props: PropsType) => {
  const { isAuth } = props;

  return (
    <Suspense fallback={<Preloader />}>
      {isAuth && (
        <Switch>
          <Route path="/post/:postId?" render={() => <PostContainer />} />

          <Route path="/login" render={() => <LoginContainer />} />

          <Route exact path="/" render={() => <IndexContainer />} />

          <Route path="*" render={() => <ErrorContainer />} />
        </Switch>
      )}
      {!isAuth && (
        <Switch>
          <Route path="/login" render={() => <LoginContainer />} />
          <Route path="/register" render={() => <RegistryContainer />} />
          <Route exact path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      )}
    </Suspense>
  );
});

export default Router;
