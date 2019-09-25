import React from "react";
import s from "./About.module.scss";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';


function About() {
    return (
        <div className={s.About}>
            <Jumbotron fluid className={s.customJumbo}>
                <Container>
                    {/* <Image src="/me.jpg" rounded  className={s.customMe}/>    */}
                    <h1 className={s.swivelChair} >Su Wei aka @Rebootlifer</h1>
                    <p>
                    Hi, I'm su wei. Welcome to @RebootLifer and into my inner world.
                    </p>
                 </Container>
            </Jumbotron>
        
        
        </div>
    );
}

export default About;