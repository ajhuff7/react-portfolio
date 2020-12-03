import { Component } from 'react';
import Header from "../../Header";
import Footer from "../../Footer";
import AboutMe from "../../AboutMe";
import Wrapper from "../../Wrapper";

class Home extends Component {



    render() {
        return (

            <Wrapper>
                <Header 
                showPort={true} 
                showCont={true}                 
                />

                <AboutMe />
                <Footer />
            </Wrapper>

        );
    }
}

export default Home;