import * as Styled from './hero.styles';
import Container from '../Container';

const Hero = ({ children, ...props }) => (
  <Styled.Hero {...props}>
    <Container>
      {children}
    </Container>
  </Styled.Hero>
);

export default Hero;
