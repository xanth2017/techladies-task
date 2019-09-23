import React from "react";
import s from "./NoMatch.module.scss";

import Container from 'react-bootstrap/Container';


function NoMatch() {
    return (
        <div className={s.NoMatch}>

            <Container className="mt-5"> 
            <h1>Sorry, this page does not exists.</h1>
            </Container>
        </div>
    );
}

export default NoMatch;