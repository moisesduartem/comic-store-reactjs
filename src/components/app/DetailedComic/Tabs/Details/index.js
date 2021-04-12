import React from "react";
import { Button, Divider, Grid, Header, Icon, Image, Step, Tab } from "semantic-ui-react";
import { Pane } from "../styles";

const panes = ({ comic }) => ([
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
                    </div>
                    <div>
                        <div>
                            <h3>Descrição</h3>
                            <article>{comic?.description}</article>
                        </div>
                        <div>
                            <div>
                                <Icon name='dollar' />
                                <strong>
                                    {comic?.prices[0].price}
                                </strong>
                            </div>
                            <Button color="green" icon as="a">
                                <Icon name="shopping bag" />
                                <span>Adquirir</span>
                            </Button>
                        </div>
                    </div>
                </main>
            </Pane>
        ),
    },
    {
        menuItem: "Personagens",
        render: () => <Pane attached={false}>Tab 2 Content</Pane>,
    }
]);

export const DetailsTab = ({ comic }) => (
    <Tab menu={{ secondary: true, pointing: true }} panes={panes({ comic })} />
);