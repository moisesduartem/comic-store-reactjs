import React, { useEffect, useState } from "react";
import { Button, Divider, Grid, Header, Icon, Image, Step, Tab } from "semantic-ui-react";
import { marvel } from "../../../../../services/marvel";
import { Pane } from "../styles";

const panes = ({ comic, characters }) => ([
    {
        menuItem: "Detalhes",
        render: () => (
            <Pane attached={false}>
                <header>
                    {!!comic?.variantDescription && (
                        <Header as="h2">
                            {comic?.variantDescription}
                        </Header>
                    )}
                    <Header as={!!comic?.variantDescription ? "h4" : "h2"}>
                        {comic?.title}
                    </Header>
                </header>
                <Divider />
                <main>
                    <div>
                        <img src={comic?.images[0]?.path + "/portrait_incredible.jpg"} />
                        <Button fluid color="green" icon as="a">
                            <Icon name='dollar' />
                            <strong>
                                {comic?.prices[0].price}
                            </strong>
                        </Button>
                    </div>
                    <div>
                        <div>
                            <h3>Descrição</h3>
                            <article>{comic?.description}</article>
                        </div>
                        <div>
                            <h3>Personagens</h3>
                            <article>{comic?.description}</article>
                        </div>
                    </div>
                </main>
            </Pane>
        ),
    },
]);

function DetailsTab({ comic }) {

    const [characters, setCharacters] = useState();

    useEffect(() => {

        const loadComics = async () => {
            const response = await marvel.getComicCharacters({ comicId: comic.id });
            setCharacters(response.data.data.results);
        };


        if (!characters) {
            loadComics();
        }

    }, [characters]);

    return (
        <Tab menu={{ secondary: true, pointing: true }} panes={panes({ comic, characters })} />
    );
};

export { DetailsTab };