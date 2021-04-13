import React from "react";
import { Image } from "semantic-ui-react";
import { shop } from "../../../services/shop";
import { toasts } from "../../../utils/customToasts";
import { CustomConfirmModal } from "../../core/CustomConfirmModal";
import { Section } from "./styles";

function PurchaseModal({ comic, children }) {

    async function handleSubmit(e) {

        const comicId = comic.id;
        const price = comic?.prices[0]?.price;

        const response = await shop.purchase({ comicId, price });

        if (response.status === 200 && !!response.data)
            toasts.success(`Compra realizada com sucesso!`)
    }

    return (
        <CustomConfirmModal
            size="mini"
            title="Deseja confirmar compra?"
            trigger={children}
            onConfirm={handleSubmit}
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