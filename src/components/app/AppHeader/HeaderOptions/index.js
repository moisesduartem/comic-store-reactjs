import React, { Fragment } from "react";

import { Dropdown } from "semantic-ui-react";

import { LoginModal } from "../../LoginModal";
import { RegisterModal } from "../../RegisterModal";

function HeaderOptions({ user }) {

    if (!!user) {
        return (
            <Fragment>
                <Dropdown.Item>Histórico de Compras</Dropdown.Item>
                <Dropdown.Item>Sair</Dropdown.Item>
            </Fragment>
        );
    }

    return (
        <Fragment>
            <LoginModal>
                <Dropdown.Item onClick={() => { }}>Acesse com sua conta</Dropdown.Item>
            </LoginModal>
            <RegisterModal>
                <Dropdown.Item>Não possui conta? <strong>Junte-se a nós!</strong></Dropdown.Item>
            </RegisterModal>
        </Fragment>
    );
}

export { HeaderOptions };