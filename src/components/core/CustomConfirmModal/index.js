import React, { useState } from "react";
import { Button, Modal } from "semantic-ui-react";

function CustomConfirmModal({ title, size, content, children, onConfirm, ...rest }) {
    const [open, setOpen] = useState(false)

    return (
        <Modal
            size={size ?? "mini"}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={children}
            {...rest}
        >
            <Modal.Header>{title}</Modal.Header>
            <Modal.Content>{content}</Modal.Content>
            <Modal.Actions>
                <Button negative onClick={() => setOpen(false)}>Não</Button>
                <Button positive onClick={() => onConfirm(setOpen)}>Sim</Button>
            </Modal.Actions>
        </Modal>
    );
}

export { CustomConfirmModal };