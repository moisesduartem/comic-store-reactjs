import React, { useState } from "react";
import { Modal } from "semantic-ui-react";

function CustomModal({ title, children, trigger, ...rest }) {
    const [open, setOpen] = useState(false)

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={trigger}
            {...rest}
        >
            {!!title && <Modal.Header>{title}</Modal.Header>}
            <Modal.Content>
                {children}
            </Modal.Content>
        </Modal>
    )
}

export { CustomModal };