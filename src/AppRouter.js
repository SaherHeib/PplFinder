import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Favorite } from "pages";
import NavBar from "components/NavBar";
import { ThemeProvider } from "theme";

const AppRouter = () => {
  return (
    <ThemeProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favorites" component={Favorite} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;
