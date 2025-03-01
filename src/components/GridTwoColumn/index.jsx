import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import React from 'react';

export const GridTwoColumn = ({ title, text, srcImg, background = 'false', sectionId = '' }) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container background={background}>
        <Styled.TextContainer>
          <Heading uppercase='true' color_dark={background === 'false'? 'true' : 'false'} as="h2">{title}</Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Styled.Image src={srcImg} alt={title} />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoColumn.propTypes = {
    title: P.string.isRequired,
    text: P.string.isRequired,
    srcImg: P.string.isRequired,
    background: P.oneOf(['true', 'false']),
    sectionId: P.string,
};