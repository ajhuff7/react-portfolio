import { Component } from 'react';
import Header from "../../Header";
import Footer from "../../Footer";
import AboutMe from "../../AboutMe";
import Wrapper from "../../Wrapper";

class Index extends Component {



    render() {
        return (

            <Wrapper>
                <Header />
                <AboutMe />
                <Footer />
            </Wrapper>

        );
    }
}

export default Index;