import React, { Fragment } from 'react';

import { useAuth } from "../../../store/context/auth";
import { Dropdown, Menu } from 'semantic-ui-react';
import { HeaderOptions } from './HeaderOptions';

function AppHeader() {

    const { user } = useAuth();

    return (
        <Fragment>
            <Menu fixed="top" inverted color="red">
                <Menu.Item as="a" header position="left" href="/">
                    Comic Store
                </Menu.Item>
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

export default AppHeader;