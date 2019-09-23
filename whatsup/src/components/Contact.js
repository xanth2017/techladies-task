import React from "react";
import s from "./Contact.module.scss";

import Container from 'react-bootstrap/Container';


function Contact() {
    return (
        <div className={s.Contact}>
            <Container className="mt-5">
                <h1>Testing Contact</h1>
            </Container>
        </div>
    );
}

export default Contact;