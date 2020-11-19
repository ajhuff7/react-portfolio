import { Component } from 'react';
import Header from "../../Header";
import Footer from "../../Footer";
import ContactModal from "../../ContactModal";
import Wrapper from "../../Wrapper";

class ContactMe extends Component {



    render() {
        return (

            <Wrapper>
                <Header />
                <ContactModal />
                <Footer />
            </Wrapper>

        );
    }
}

export default ContactMe;