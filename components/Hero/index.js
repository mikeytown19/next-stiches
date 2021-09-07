import * as Styled from './hero.styles';
import { Container } from '../Container';
import { Box } from '../Box';

export const Hero = ({
  children, size, gradient, ...props
}) => (
  <Styled.Hero {...props}>
    {gradient && <Box
      css={{
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        position: 'absolute',
        zIndex: '-1',
        background:
            'radial-gradient(circle at top left, $violet4, rgba(255, 255, 255, 0) 15%), radial-gradient(circle at 80% 20%, $cyan4, rgba(255, 255, 255, 0) 15%)',
        '@bp2': {
          background:
              'radial-gradient(circle at 15% 50%, $violet3, rgba(255, 255, 255, 0) 25%), radial-gradient(circle at 85% 30%, $yellow4, rgba(255, 255, 255, 0) 15%)',
        },
      }}
    />}
    <Container size={size}>
      {children}
    </Container>
  </Styled.Hero>
);
