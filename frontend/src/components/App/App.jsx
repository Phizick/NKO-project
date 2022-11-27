import { Route, Switch } from "react-router-dom";
import { MainPage } from "../../pages/MainPage/MainPage";
import Programs from "../Programs/Programs";
import styleApp from "./App.module.css";

export const App = () => {
  return (
    <div className={styleApp.App}>
      <Switch>
        <Route path="/" exact={true}>
          <MainPage />
          <Programs />
        </Route>
        <Route path="*">
          <h1>Error Page</h1>
        </Route>
      </Switch>
    </div>
  );
};
