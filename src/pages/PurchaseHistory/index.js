import React, { Fragment } from "react";

import { Table } from "semantic-ui-react";
import { PurchaseTableRow } from "../../components/app/PurchaseTableRow";
import { usePurchases } from "../../hooks/usePurchases";

function PurchaseHistory() {

    const { purchases } = usePurchases();

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