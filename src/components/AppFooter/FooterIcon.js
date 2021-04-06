import React from 'react';
import { Icon } from 'semantic-ui-react';

const FooterIcon = ({ iconName, title }) => (
    <span>
        <Icon name={iconName} color="grey" />
        {title}
    </span>
);

export default FooterIcon;