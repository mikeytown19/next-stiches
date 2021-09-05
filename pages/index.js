import Section from '../components/Section';
import Header from '../components/Header';
import Container from '../components/Container';
import Box from '../components/Box';
import { Text } from '../components/Text';
import Button from '../components/Button';

export default function Home() {
  return (
    <>
      <Header />
      {/* <Box
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
      /> */}
      <Section size={{ '@initial': '2', '@bp1': '3' }}>

        <Container>
          <Box flex js="center" ai="center" fd="column">
            <Text heading color="yellow">Kich</Text>
            <Text size="8" color="yellow">Make building websites easy</Text>

            <Text>Component Library built off of <Text as="span" color="violet">@stiches</Text>
            </Text>

            <Button bg="yellow"> Documentation</Button>
          </Box>
        </Container>
      </Section>
    </>
  );
}
