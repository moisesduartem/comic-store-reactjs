import React, { Fragment } from 'react';
import { Container, Icon, List, Segment } from 'semantic-ui-react';
import FooterIcon from './FooterIcon';

function AppFooter() {
    return (
        <Fragment>
            <Segment inverted vertical style={{ margin: '2em 0em 0em', padding: '2em 0em' }}>
                <Container textAlign='center'>
                    <List horizontal inverted divided link size='small'>
                        <List.Item as='a' href="https://github.com/moisesduartem">
                            <FooterIcon iconName="github" title="Github" />
                        </List.Item>
                        <List.Item as='a' href="https://www.linkedin.com/in/moisesduartem/">
                            <FooterIcon iconName="linkedin" title="Linkedin" />
                        </List.Item>
                    </List>
                </Container>
            </Segment>
        </Fragment>
    );
}

export default AppFooter;