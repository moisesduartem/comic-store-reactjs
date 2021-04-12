import React from "react";

import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

import { Container } from "./styles";

export const GoBackArrow = ({ ...rest }) => (
    <Container {...rest}>
        <Icon size="large" name="arrow left" />
    </Container>
);