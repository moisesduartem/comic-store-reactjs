import React from 'react';
import { List } from 'semantic-ui-react';
import { PageFooter } from './styles';
import FooterIcon from './FooterIcon';

function AppFooter() {
    return (
        <PageFooter>
            <List horizontal inverted divided link size='small'>
                <List.Item as='a' href="https://github.com/moisesduartem">
                    <FooterIcon iconName="github" title="Github" />
                </List.Item>
                <List.Item as='a' href="https://www.linkedin.com/in/moisesduartem/">
                    <FooterIcon iconName="linkedin" title="Linkedin" />
                </List.Item>
            </List>
        </PageFooter>
    );
}

export { AppFooter };