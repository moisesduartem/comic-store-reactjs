import React, { Fragment } from "react";
import { useHistory } from "react-router";

import { Dropdown } from "semantic-ui-react";
import { shop } from "../../../../services/shop";
import { toasts } from "../../../../utils/customToasts";
import { CustomConfirmModal } from "../../../core/CustomConfirmModal";

import { LoginModal } from "../../LoginModal";
import { RegisterModal } from "../../RegisterModal";

function HeaderOptions({ user }) {

    const history = useHistory();

    function logout() {
        toasts.success("Até a próxima!");
        localStorage.clear();
        shop.api.defaults.headers.Authorization = "";
        history.push("/comics");
        window.location.reload();
    }

    if (!!user) {
        return (
            <Fragment>
                <Dropdown.Item as="a" href="/account/purchases">Histórico de Compras</Dropdown.Item>
                <CustomConfirmModal
                    title="Logout"
                    content={<Fragment>Deseja <strong>realmente</strong> sair da sua conta?</Fragment>}
                    onConfirm={(setOpen) => {
                        setOpen(false);
                        logout();
                    }}
                >
                    <Dropdown.Item>Sair</Dropdown.Item>
                </CustomConfirmModal>
            </Fragment>
        );
    }

    return (
        <Fragment>
            <LoginModal>
                <Dropdown.Item>Acesse com sua conta</Dropdown.Item>
            </LoginModal>
            <RegisterModal>
                <Dropdown.Item>Não possui conta? <strong>Junte-se a nós!</strong></Dropdown.Item>
            </RegisterModal>
        </Fragment>
    );
}

export { HeaderOptions };