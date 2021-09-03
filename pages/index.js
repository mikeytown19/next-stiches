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
      <Section size={{ '@initial': '2', '@bp1': '3' }}>
        <Container>
          <Box flex>
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
