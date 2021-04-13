import React from "react";

import { Button, Form, Header, Message } from "semantic-ui-react";
import { useForm } from "../../../hooks/useForm";
import { useAuth } from "../../../store/context/auth";
import { CustomModal } from "../../core/CustomModal";
import { RegisterModal } from "../RegisterModal";

function LoginModal({ children }) {

    const { form, handleInput } = useForm();
    const { signIn } = useAuth();

    function handleSubmit(e) {
        e.preventDefault();
        signIn(form?.email, form?.password);
    }

    return (
        <CustomModal size="mini" trigger={children}>
            <Header as="h2" color="black" textAlign="center">Login</Header>
            <Form onSubmit={handleSubmit}>
                <Form.Input
                    name="email"
                    onChange={handleInput}
                    fluid icon="user"
                    iconPosition="left"
                    placeholder="E-mail"
                    type="email"
                    required
                />
                <Form.Input
                    name="password"
                    onChange={handleInput}
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Senha"
                    type="password"
                    required
                />
                <Button color="blue" fluid size="large">Entrar</Button>
            </Form>
            <Message>
                Novo por aqui? <RegisterModal><strong>Cadastre-se!</strong></RegisterModal>
            </Message>
        </CustomModal>
    );
}

export { LoginModal };