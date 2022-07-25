import React from 'react';
import { DiCss3, DiHtml5, DiJavascript, DiPython, DiReact, DiBootstrap, DiMysql } from 'react-icons/di';
import { CgCPlusPlus } from 'react-icons/cg';
import { SiFlask, SiAdobephotoshop } from 'react-icons/Si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <SectionTitle main>Skills and Technologies</SectionTitle>
    <SectionText>
      I have used a plethora of technologies, languages and frameworks for both front-end and back-end development.
    </SectionText>
    <List>
      <ListItem>
        <DiPython size="3rem"/>
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>
            Used in my first development job, taught in Software Design and Implementation, and used in all of my personal projects.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJavascript size="3rem"/>
        <ListContainer>
          <ListTitle>JavaScript</ListTitle>
          <ListParagraph>
            Used for the functionality of the Celts application and this website
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiHtml5 size="3rem"/>
        <ListContainer>
          <ListTitle>HTML5</ListTitle>
          <ListParagraph>
            Used to construct the Celts web pages and to develop this site
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCss3 size="3rem"/>
        <ListContainer>
          <ListTitle>CSS</ListTitle>
          <ListParagraph>
            Used to style and format the HTML for the Celts application
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>React</ListTitle>
          <ListParagraph>
            Used to build this website
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <CgCPlusPlus size="3rem"/>
        <ListContainer>
          <ListTitle>C++</ListTitle>
          <ListParagraph>
            The main language in my data structures and algorithms class
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiFlask size="3rem"/>
        <ListContainer>
          <ListTitle>Flask</ListTitle>
          <ListParagraph>
            The framework used for the Celts application
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiAdobephotoshop size="3rem"/>
        <ListContainer>
          <ListTitle>Photoshop</ListTitle>
          <ListParagraph>
            Used for photo editing during a photography course
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Requests and BeatifulSoup</ListTitle>
          <ListParagraph>
            Used for web scraping on multiple projects
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <DiBootstrap size="3rem"/>
          <ListTitle>Bootstrap</ListTitle>
          <ListParagraph>
            Used for complex CSS tasks while developing Celts
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <DiMysql size="3rem"/>
          <ListTitle>MySQL</ListTitle>
          <ListParagraph>
            Used as the database for Celts to keep track of user and program information
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Data Structures</ListTitle>
          <ListParagraph>
            Learned from my Data Structures and Algorithms course, I have a firm grasp on Big O time and space complexity, as well as OOP
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
