import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import MovieDetails from "components/MovieDetails/MovieDetails";
import MoviePicks from "components/MoviePicks/MoviePicks";

import "fontsource-roboto";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:id" component={MovieDetails} />
          <Route path="*" component={MoviePicks} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
