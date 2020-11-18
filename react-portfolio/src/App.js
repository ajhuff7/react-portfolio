
import { Component } from 'react';
import Wrapper from "./components/Wrapper"
import Header from "./components/Header"
import Footer from './components/Footer';
import PortfolioCard from './components/PortfolioCard';
import projects from "./projects.json";




class App extends Component {

  state = {
    projects: projects,
  };



  render() {
    return (
      <Wrapper>
        <Header />

        {this.state.projects.map(project => (
          <PortfolioCard
            id={project.id}
            id={project.image}
            id={project.link}
          />

        ))}

        <Footer />
      </Wrapper>
    );
  }
}

export default App;


