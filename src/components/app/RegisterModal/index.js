import React, { useEffect, useState } from "react";

import { useForm } from "../../../hooks/useForm";
import { Button, Form, Message } from 'semantic-ui-react';
import { CustomModal } from "../../core/CustomModal";

function RegisterModal({ children }) {

    const [isDisabled, setDisabled] = useState(true);

    const [passwordError, setPasswordError] = useState(false);

    const { handleInput, form } = useForm();

    useEffect(() => {

        const areFieldsFilled = !!form?.name && !!form?.email && !!form?.username && !!form?.password && !!form?.passwordConfirmation;
        const arePasswordsDifferent = form?.password !== form?.passwordConfirmation;

        setDisabled(!areFieldsFilled);
        setPasswordError(areFieldsFilled && arePasswordsDifferent);

    }, [form]);

    function handleSubmit(e) {

    }

    return (
        <CustomModal size="tiny" trigger={children}>
            <Form onSubmit={handleSubmit} error={passwordError}>
                <Form.Field>
                    <label>Nome</label>
                    <input onChange={handleInput} name="name" placeholder="Digite seu nome completo" />
                </Form.Field>
                <Form.Field>
                    <label>E-mail</label>
                    <input onChange={handleInput} name="email" type="email" placeholder="Digite seu e-mail mais usado" />
                </Form.Field>
                <Form.Field>
                    <label>Nome de usuário</label>
                    <input onChange={handleInput} name="username" placeholder="Ex: steve_rogers" />
                </Form.Field>
                <Form.Field>
                    <label>Senha</label>
                    <input onChange={handleInput} name="password" type="password" />
                </Form.Field>
                <Form.Field>
                    <label>Confirme sua senha</label>
                    <input onChange={handleInput} name="passwordConfirmation" type="password" />
                </Form.Field>
                {!!passwordError &&
                    <Message
                        error
                        content="As senhas não conferem."
                    />
                }
                <Button disabled={isDisabled} color="green" type="submit">Finalizar Cadastro</Button>
            </Form>
        </CustomModal>
    );
}

export { RegisterModal };