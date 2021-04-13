import React, { Fragment, useEffect, useState } from 'react';

import { useAuth } from "../../../store/context/auth";
import { Dropdown, Menu } from 'semantic-ui-react';
import { HeaderOptions } from './HeaderOptions';
import { useLocation, useHistory } from 'react-router';
import { GoBackArrow } from "../../core/Arrow/GoBack";

function AppHeader() {

    const { user } = useAuth();
    const { pathname } = useLocation();
    const history = useHistory();

    const [mustBack, setMustBack] = useState(false);

    useEffect(() => {
        setMustBack(pathname !== "/" && pathname !== "/comics");
    });

    const LeftSideItem = () => (
        mustBack ? <GoBackArrow onClick={() => history.goBack()} /> :
            <Menu.Item as="a" header position="left" href="/">Comic Store</Menu.Item>
    );

    return (
        <Fragment>
            <Menu fixed="top" inverted color="red">
                <LeftSideItem />
                <Menu.Item position="right">
                    <Dropdown text={user?.name.split(" ")[0] ?? "Login"}>
                        <Dropdown.Menu direction="left">
                            <HeaderOptions user={user} />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Menu>
        </Fragment>
    );
}

export { AppHeader };