import React from "react";

import { Button, Form, Grid, Header, Message, Segment } from "semantic-ui-react";
import { CustomModal } from "../CustomModal";

function LoginModal({ children }) {
    return (
        <CustomModal size="mini" trigger={children}>
            <Header as="h2" color="black" textAlign="center">Login</Header>
            <Form>
                <Form.Input fluid icon="user" iconPosition="left" placeholder="E-mail" />
                <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Senha"
                    type="password"
                />
                <Button color="blue" fluid size="large">Entrar</Button>
            </Form>
            <Message>
                Novo por aqui? <a href="#"><strong>Cadastre-se!</strong></a>
            </Message>
        </CustomModal>
    );
}

export { LoginModal };