import { Route, Switch } from "react-router-dom";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import { MainPage } from "../../pages/MainPage/MainPage";
import DonationPage from "../../pages/Donate/DonationPage";

import styleApp from "./App.module.css";
import {NewsPage} from "../../pages/NewsPage/NewsPage";
import {UseFulPage} from "../../pages/UsefulPage/UseFullPage";

export const App = () => {
  return (
    <div className={styleApp.App}>
      <Switch>
        <Route path="/" exact={true}>
          <MainPage />
        </Route>
        <Route path="/news" exact={true}>
          <NewsPage />
        </Route>
        <Route path='/about-us' exact={true}>
          <MainPage />
        </Route>
        <Route path='/useful' exact={true}>
          <UseFulPage />
        </Route>
        <Route path="/donation" exact={true}>
          <DonationPage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </div>
  );
};
