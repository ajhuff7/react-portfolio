import { Component } from 'react';
import Header from "../../Header";
import Footer from "../../Footer";
import PortfolioCard from "../../PortfolioCard"
import projects from "../../projects.json"
import Wrapper from "../../Wrapper";

class Portfolio extends Component {

    state = {

        projects: projects

    }

    render() {
        return (

            <Wrapper>
                <Header />
                {this.state.projects.map(assignment => (
                    <PortfolioCard
                        id={assignment.id}
                        name={assignment.name}
                        image={assignment.image}
                        link={assignment.link}
                    />
                ))}
                <Footer />
            </Wrapper>

        );
    }
}

export default Portfolio;