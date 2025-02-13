import P from 'prop-types';
import * as Styled from './styles';
import React from 'react';

export const TextComponent = ({ children }) => {
    return (
        <Styled.Container dangerouslySetInnerHTML={{ __html: children }} />
    );
};

TextComponent.propTypes = {
    children: P.node.isRequired,
};