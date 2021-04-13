import React, { useEffect, useState } from "react";
import { Header, Image, Table } from "semantic-ui-react";
import { marvel } from "../../../services/marvel";
import { getDateTime } from "../../../utils/functions";

function PurchaseTableRow({ purchase }) {

    const [comic, setComic] = useState();

    useEffect(() => {

        const loadComic = async () => {
            const response = await marvel.getComic({ comicId: purchase.comicId });
            setComic(response.data.data.results[0]);
        };

        if (!comic) {
            loadComic();
            console.log(comic);
        }

    }, [comic, purchase.comicId]);

    return (
        <Table.Row>
            <Table.Cell>{purchase.comicId}</Table.Cell>
            <Table.Cell>
                <Header as='h4' image>
                    <Image src={comic?.thumbnail?.path + "/standard_medium.jpg"} rounded size="medium" />
                    <Header.Content>
                        {comic?.title}
                    </Header.Content>
                </Header>
            </Table.Cell>
            <Table.Cell>$ {purchase.price}</Table.Cell>
            <Table.Cell>{(getDateTime(purchase.createdAt, (date, time) => `${date} às ${time}`))}</Table.Cell>
        </Table.Row>
    );
}

export { PurchaseTableRow };