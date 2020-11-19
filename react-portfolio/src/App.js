import { Component } from 'react';
import Index from "./components/pages/Index"
import Portfolio from "./components/pages/Portfolio"
import Contact from "./components/pages/Contact"
import bg from './bg.PNG';
import {
  BrowserRouter,
  Route
} from "react-router-dom";


class App extends Component {


  render() {
    return (

      <BrowserRouter basename="/">
        <body className="body">
          <img src={bg} alt="background" width="100%" height="100%" top="-10" left="-10" />
          <Route exact path="/" component={Index} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Contact" component={Contact} />
        </body>
      </BrowserRouter>

    );
  }
}

export default App;
