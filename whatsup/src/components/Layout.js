import React from "react";
import s from "./Layout.module.scss";

// import { Container } from 'react-bootstrap';

function Layout(props) {

    return (
        <div className={s.header}>
             {props.children}
        </div>
        );
}

export default Layout;