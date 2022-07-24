import React from 'react';
import { DiCss3, DiFirebase, DiHtml5, DiJavascript, DiPython, DiReact, DiZend } from 'react-icons/di';
import { CgCPlusPlus } from 'react-icons/cg';
import { SiFlask } from 'react-icons/Si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      Insert text here
    </SectionText>
    <List>
      <ListItem>
        <DiPython size="3rem"/>
        <ListContainer>
          <ListTitle>Python</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJavascript size="3rem"/>
        <ListContainer>
          <ListTitle>JavaScript</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiHtml5 size="3rem"/>
        <ListContainer>
          <ListTitle>HTML5</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCss3 size="3rem"/>
        <ListContainer>
          <ListTitle>CSS</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>React</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <CgCPlusPlus size="3rem"/>
        <ListContainer>
          <ListTitle>C++</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiFlask size="3rem"/>
        <ListContainer>
          <ListTitle>Flask</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="3rem"/>
        <ListContainer>
          <ListTitle>Python</ListTitle>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
