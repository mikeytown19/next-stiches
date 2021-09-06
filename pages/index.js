import {
  Section,
  Header,
  Button,
  Text,
  Box,
  Container,
  Heading,
} from '../components';

export default function Home() {
  return (
    <>
      <Header />
      <Section size={{ '@initial': '2', '@bp1': '3' }}>

        <Container>
          <Box flex js="center" ai="center" fd="column">
            <Heading size="md" as="h1" color="yellow">Kich</Heading>
            <Text color="yellow">Make building websites easy</Text>
            <Text>Component Library built off of <Text as="span" color="violet">@stiches</Text>
            </Text>

            <Button bg="violet"> Documentation</Button>
          </Box>
        </Container>
      </Section>
    </>
  );
}
