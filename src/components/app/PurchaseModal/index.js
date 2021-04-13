import React, { Fragment } from "react";
import { Divider, Form, Image } from "semantic-ui-react";
import { CustomConfirmModal } from "../../core/CustomConfirmModal";
import { Section } from "./styles";

function PurchaseModal({ comic, children }) {
    return (
        <CustomConfirmModal
            size="mini"
            title="Deseja confirmar compra?"
            trigger={children}
            content={(
                <Section>
                    <Image src={comic?.images[0]?.path + "/portrait_incredible.jpg"} size="small" />
                    <main>
                        <h4>{comic?.title}</h4>
                        <h3>$ {comic?.prices[0]?.price}</h3>
                    </main>
                </Section>
            )}
        />
    );
}

export { PurchaseModal };