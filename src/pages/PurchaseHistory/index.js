import React, { Fragment, useEffect, useState } from "react";
import { Table } from "semantic-ui-react";

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
            <Table basic>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Código</Table.HeaderCell>
                        <Table.HeaderCell>Preço</Table.HeaderCell>
                        <Table.HeaderCell>Data</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {purchases?.map((purchase, index) => (
                        <Table.Row key={index}>
                            <Table.Cell>{purchase.comicId}</Table.Cell>
                            <Table.Cell>$ {purchase.price}</Table.Cell>
                            <Table.Cell>{(getDateTime(purchase.createdAt, (date, time) => `${date} às ${time}`))}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </Fragment>
    );
}

export { PurchaseHistory };