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
                        The name "RebootLifer" comes from reboot and life. Long gone were the days of iron rice bowl and one
                        job for life situation. With technological adavancement and disruption, during my career span i found myself 
                        having to reboot my career and life in numerous occasion to flow and thrive.                
                        </p>
                    </Col>
                </Row>
                <Row >
                    <Col md={{ span: 8, offset: 2 }} >
                        <h1>Where I'm From</h1>
                        <p>
                        I'm from Singapore aka tiny island nation with world class ranking facilities. :)
                        </p>
                    </Col>
                </Row>
                <Row >
                    <Col md={{ span: 8, offset: 2 }} >
                        <h1>More about me</h1>
                        <p>
                        Team player at heart, and a leader when the need arises.
                        </p>
                        <p>
                        I am driven and passionate about new technology insights and 
                        its applications. Human sponge for absorbing up to date technological
                        advancement with a keen interest to develop practical applications with
                        the knowledge.
                        </p>
                    </Col>
                </Row>
                <Row >
                    <Col md={{ span: 8, offset: 2 }} >
                        <h1>What are my passions</h1>
                        <p>
                        Sustainability, all things about technology, my family
                        </p>
                        <h1>Dreams</h1>
                        <p>
                        Using technology to solve sustainability issues and improving the quality of life 
                        for elderly in the society.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;