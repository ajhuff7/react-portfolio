import { Component } from 'react';
import Wrapper from "./components/Wrapper"
import Header from "./components/Header"
import Footer from './components/Footer';
import PortfolioCard from './components/PortfolioCard';
import projects from "./projects.json";
import bg from ".public/assets";



class App extends Component {

  state = {
    projects: projects,
  };


  render() {
    return (
      <body className="body">
        <img src={bg} alt="background image" />
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
      </body>
    );
  }
}

export default App;




// var bioModal = $("#bio");
// var contactModal = $("#contactMe");

// // hide modals
// bioModal.attr("style", "display: none");
// contactModal.attr("style", "display: none");



// // open modals 
// $("#about").on("click", function (event) {
//     event.preventDefault();
//     contactModal.attr("style", "display: none");
//     bioModal.attr("style", "display: block");
//     console.log("success!")
// });

// $("#contact").on("click", function (event) {
//     event.preventDefault();
//     bioModal.attr("style", "display: none");
//     contactModal.attr("style", "display: block");
//     console.log("success!")
// });


// // close modals
// $("#closeBio").on("click", function (event) {
//     bioModal.attr("style", "display: none");
// });

// $("#closeContact").on("click", function (event) {
//     contactModal.attr("style", "display: none");
// });


