import React from "react";
import s from "./Contact.module.scss";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Iframe from 'react-iframe';


function Contact() {
    return (
        <div className={s.Contact}>
            <Jumbotron fluid className={s.customJumbo}>
                <Container>
                    <h1 className={s.swivelChair} >How to get in touch?</h1>
                 </Container>
            </Jumbotron>
            <Container >
                <Row >
                    <Col md={{ span: 8, offset: 2 }} >
                    <Card className={s.customCardWeather} >
                        <Card.Header className={s.cardHeader}>
                            Let's check out the weather in SG first :)
                        </Card.Header>
                        <Card.Body >
                            <Iframe 
                                url="https://data.gov.sg/dataset/weather-forecast/resource/571ef5fb-ed31-48b2-85c9-61677de42ca9/view/4c127d9a-cba6-445a-8fc1-978b565f9bf7"                               
                                className={s.customFrame}
                            />
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row >
                    <Col md={{ span: 8, offset: 2 }} >
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Contact;