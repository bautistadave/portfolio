import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
          Welcome To <br/>
          My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hi, I'm Miguel Bautista Javascript enthusiast
      </SectionText>
      {/* <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button> */}
      {/* <img style={{borderRadius:'50%', width:'150px', height:'150px'}} 
      src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCDzSlTrWecl5wt9wLCd-FED6hn5QSkTAiGgnQfmyp6fou8QkwGH7CEZR8X-6Lbz_QXGc&usqp=CAU'}/> */}
    </LeftSection>
  </Section>
);

export default Hero;