import Section from '../components/Section';
import Header from '../components/Header';
import Container from '../components/Container';
import Box from '../components/Box';
import { Text } from '../components/Text';
import Button from '../components/Button';

export default function Home() {
  return (
    <>
      <Header>hey</Header>
      <Box
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
      />
      <Section size={{ '@initial': '2', '@bp1': '3' }}>
        <Box
          css={{
            size: '200px',
            linearGradient: '19deg, #21D4FD 0%, #B721FF 100%',
            br: '$round',
          }}
        />
        <Container>
          <Box flex js="center" ai="center" fd="column">
            <Text heading color="yellow">Kich</Text>
            <Text size="8" color="yellow">Make building websites easy</Text>

            <Text>Component Library built off of <Text as="span" color="violet">@stiches</Text>
            </Text>

            <Button primary> Documentation</Button>
          </Box>
        </Container>
      </Section>
    </>
  );
}
