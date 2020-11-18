
import { Component } from 'react';
import Wrapper from "./components/Wrapper"
import Header from "./components/Header"
import Footer from './components/Footer';



class App extends Component {


  render() {
    return (
      <Wrapper>
        <Header />
        <Footer />
      </Wrapper>
    );
  }
}

export default App;