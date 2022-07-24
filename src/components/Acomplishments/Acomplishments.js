import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { Accomplishments } from '../../constants/constants';

const Acomplishments = () => (
  <Section>
    <SectionDivider/>
    <SectionTitle main>Personal Achievements</SectionTitle>
    <Boxes>
      {Accomplishments.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
