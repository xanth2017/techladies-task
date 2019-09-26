import React from "react";
import s from "./Contact.module.scss";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Contact() {
    return (
        <div className={s.Contact}>
            <Jumbotron fluid className={s.customJumbo}>
                <Container>
                    <h1 className={s.swivelChair} >How to get in touch?</h1>
                 </Container>
            </Jumbotron>
            <Container className={s.customIntro} >
                <Row >
                    <Col md={{ span: 8, offset: 2 }} >
                        <h1>Introduction</h1>
                        <p> Why? @RebootLifer? RebootLifer was the spur of the moment brainchild of mine while i was trying 
                            to improvise on how to deliver engaging course materials to my students. At the same time,
                            having ample time to help them learn the materials.
                        </p>
                        <p>
                        The name "RebootLifer" comes from reboot and life. Long gone were the days of iron rice bowl and one
                        job for life situation. With technological adavancement and disruption, during my career span i found myself 
                        having to reboot my career and life in numerous occasion to flow and thrive.                
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Contact;