import React, { Fragment, useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import { PurchaseTableRow } from "../../components/app/PurchaseTableRow";

import { shop } from "../../services/shop";

import { getDateTime } from "../../utils/functions";

function PurchaseHistory() {


    const [purchases, setPurchases] = useState();

    useEffect(() => {

        const loadPurchases = async () => {
            const response = await shop.purchases();
            setPurchases(response.data.purchases);
        };

        if (!purchases) {
            loadPurchases();
        }

    }, [purchases]);

    return (
        <Fragment>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Código</Table.HeaderCell>
                        <Table.HeaderCell>Quadrinho</Table.HeaderCell>
                        <Table.HeaderCell>Preço</Table.HeaderCell>
                        <Table.HeaderCell>Data</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {purchases?.map((purchase, index) => (
                        <PurchaseTableRow key={index} purchase={purchase} />
                    ))}
                </Table.Body>
            </Table>
        </Fragment>
    );
}

export { PurchaseHistory };