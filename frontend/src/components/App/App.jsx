import { Route, Switch } from "react-router-dom";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import { MainPage } from "../../pages/MainPage/MainPage";
import News from "../News/News";
import styleApp from "./App.module.css";

export const App = () => {
  return (
    <div className={styleApp.App}>
      <Switch>
        <Route path="/" exact={true}>
          <MainPage />
        </Route>
        <Route path="/news" exact={true}>
          <News/>
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </div>
  );
};
