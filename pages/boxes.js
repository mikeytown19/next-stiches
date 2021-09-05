import Section from '../components/Section';
import Header from '../components/Header';
import Container from '../components/Container';
import Box from '../components/Box';
import { Text } from '../components/Text';

export default function Boxes() {
  return (
    <>
      <Header>hey</Header>
      <Section size={{ '@initial': '1', '@bp1': '3' }}>
        <Container size="4">
          <Box flex>
            <Text heading color="yellow">Kich</Text>

          </Box>
          <Box css={{ bg: '$yellow8' }}>
            Box
          </Box>
        </Container>
      </Section>
    </>
  );
}
