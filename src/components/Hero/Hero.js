import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Insert text here
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/finn-bledsoe-149855230/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;