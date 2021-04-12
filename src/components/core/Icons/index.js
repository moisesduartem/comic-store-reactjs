import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

export const GoBackArrow = ({ to }) => (
    <Link to={to}>
        <Icon size="big" color="black" name="arrow left" />
    </Link>
);