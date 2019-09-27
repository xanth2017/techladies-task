import React from "react";
import s from "./Contact.module.scss";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Iframe from 'react-iframe';


function Contact() {
    function toLinkedin (e) {
        e.preventDefault();
        return window.location.href = "https://www.linkedin.com/in/luvanna-thien";
    }

    function toGit (e) {
        e.preventDefault();
        return window.location.href = "https://www.github.com/xanth2017";
    }

    function toTube (e) {
        e.preventDefault();
        return window.location.href = "https://www.youtube.com/playlist?list=PLtOXJW_-lBbCLgXtm6ByYVs2RKj3XY1J3";
    }
    return (
        <div className={s.Contact}>
            <Jumbotron fluid className={s.customJumbo}>
                <Container>
                    <h1 className={s.swivelChair} >Get in touch?</h1>
                 </Container>
            </Jumbotron>
            <Container className="mt-5">
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
            </Container>
            <Container className="mt-3 mb-3" >
                <Row >
                    <Col sm>
                    <Card className={s.customCardConnect}>
                        <Card.Img className={s.customCardImg} variant="top" src="https://gorainmakers.com/wp-content/uploads/2019/02/linkedin.png" />
                        <Card.Body>
                            <Card.Title className={s.customCardTitle}>Stay in touch @ Linkedin</Card.Title>
                            <Button variant="primary" onClick={toLinkedin} className={s.customCardButton} >
                            Stay Connected
                            </Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col sm>
                    <Card className={s.customCardConnect}>
                        <Card.Img className={s.customCardImg} variant="top" src="https://miro.medium.com/max/1125/1*aFHTAkhTkyWD93-UGRttPw.png" />
                        <Card.Body>
                            <Card.Title className={s.customCardTitle}>My Projects @ Github</Card.Title>
                            <Button variant="primary" onClick={toGit} className={s.customCardButton}>
                               Lets Go!
                            </Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col sm>
                    <Card className={s.customCardConnect}>
                        <Card.Img className={s.customCardImg} variant="top" src="https://www.flare.com/wp-content/uploads/2017/03/YouTube-logo-Restricted-Mode.jpg" />
                        <Card.Body>
                            <Card.Title className={s.customCardTitle}>My Channel @ Youtube</Card.Title>
                            <Button variant="primary"  onClick={toTube} className={s.customCardButton}>
                                Learning Rocks!
                            </Button>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Contact;