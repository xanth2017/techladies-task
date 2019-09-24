import React from "react";
import s from "./About.module.scss";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function About() {
    return (
        <div className={s.About}>
            <Jumbotron fluid className={s.customJumbo}>
                <Container>
                    <h1 className={s.swivelChair} >Su Wei aka @Rebootlifer</h1>
                    <p>
                    “Resilience is accepting your new reality, even if it's less good than the one you had before. 
                    You can fight it, you can do nothing but scream about what you've lost, or you can accept that and 
                    try to put together something that's good.”
                    ― Elizabeth Edwards
                    </p>
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
                    
                </p>
                </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;