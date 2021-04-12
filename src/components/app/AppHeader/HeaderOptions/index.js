import React, { Fragment } from "react";

import { Dropdown } from "semantic-ui-react";
import { CustomConfirmModal } from "../../../core/CustomConfirmModal";

import { LoginModal } from "../../LoginModal";
import { RegisterModal } from "../../RegisterModal";

function HeaderOptions({ user }) {

    if (!!user) {
        return (
            <Fragment>
                <Dropdown.Item>Histórico de Compras</Dropdown.Item>
                <CustomConfirmModal
                    title="Logout"
                    content="Deseja sair da sua conta?"
                    onConfirm={() => {}}
                >
                    <Dropdown.Item>Sair</Dropdown.Item>
                </CustomConfirmModal>
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