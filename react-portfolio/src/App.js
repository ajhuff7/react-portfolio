import { Component } from 'react';
import Index from "./components/pages/Index"
import Portfolio from "./components/pages/Portfolio"
import Contact from "./components/pages/Contact"

import {
  BrowserRouter,
  Route
} from "react-router-dom";
import "./App.css";


class App extends Component {


  render() {
    return (

      <BrowserRouter basename="/">
          <Route exact path="/" component={Index} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Contact" component={Contact} />
      </BrowserRouter>

    );
  }
}

export default App;
