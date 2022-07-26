import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Finn Bledsoe <br />
        Software Developer
      </SectionTitle>
      <SectionText>
        Welcome! My name is Finn Bledsoe, a Berea College student working as a software developer.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/finn-bledsoe-149855230/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;