import React from "react";

import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

import { Container } from "./styles";

export const GoBackArrow = ({ to }) => (
    <Container>
        <Link to={to}>
            <Icon size="big" color="black" name="arrow left" />
        </Link>
    </Container>
);