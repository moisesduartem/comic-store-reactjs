import React, { Fragment } from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';
import { LoginModal } from '../../LoginModal';

function AppHeader() {

    return (
        <Fragment>
            <Menu fixed="top" inverted color="red">
                <Menu.Item as="a" header position="left" href="/">
                    Comic Store
                </Menu.Item>
                <Menu.Item position="right">
                    <Dropdown text="Login">
                        <Dropdown.Menu direction="left">
                            <LoginModal>
                                <Dropdown.Item onClick={() => { }}>Acesse com sua conta</Dropdown.Item>
                            </LoginModal>
                            <Dropdown.Item>Não possui conta? <strong>Junte-se a nós!</strong></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Menu>
        </Fragment>
    );
}

export default AppHeader;