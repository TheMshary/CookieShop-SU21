import { Route, Switch } from "react-router";
import cookieStore from "../stores/cookieStore";

import CookieList from "./CookieList";
import CookieDetail from "./CookieDetail";
import Home from "./Home";

import BakeryList from "./BakeryList";
import BakeryDetail from "./BakeryDetail";

const Routes = () => {
  return (
    <Switch>
      <Route path="/cookies/:cookieSlug">
        <CookieDetail />
      </Route>
      <Route path="/cookies">
        <CookieList cookies={cookieStore.cookies} />
      </Route>
      <Route path="/bakeries/:bakerySlug">
        <BakeryDetail />
      </Route>
      <Route path="/bakeries">
        <BakeryList />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
