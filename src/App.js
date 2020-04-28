import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import SwapShop from "./pages/swap-shop/swap-shop.component";

import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/swap-shop" component={SwapShop} />
      </Switch>
    </div>
  );
}

export default App;
