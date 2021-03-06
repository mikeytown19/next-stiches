import {
  Section,
  Header,
  Button,
  Text,
  Box,
  Container,
  Heading,
  Grid,

} from '../components';

export default function Home() {
  return (
    <>
      <Header />
      <Section size={{ '@initial': '2', '@bp1': '3' }}>
        <Container>
          <Box flex js="center" ai="center" fd="column">
            <Heading size="md" as="h1" color="yellow">Kich</Heading>
            <Text color="yellow">Make building websites building easy</Text>
            <Text>Component Library built off of <Text as="span" color="violet">@stiches</Text>
            </Text>

            <Button bg="green"> Documentation</Button>
          </Box>
        </Container>
      </Section>
      <Section>
        <Container bg="gray">
          <Grid>
            <Grid.Item flex fd="column" jc="center" ai="start">
              <Text as="h2"> Medium length display headline.</Text>
              <Text>Deploy your mvp in minutes, not days. WT offers you a a wide selection swapable sections for your landing page.</Text>
              <Button wide bg="green">Show Me</Button>
            </Grid.Item>
            <Grid.Item flex jc="center" ai="center">
              <img src="https://picsum.photos/400/400" alt="" />
            </Grid.Item>
          </Grid>
        </Container>

        <Container bg="gray">
          <Grid>
            <Grid.Item flex jc="start" ai="center">
              <img src="https://picsum.photos/390/390" alt="" />
            </Grid.Item>
            <Grid.Item flex fd="column" jc="center" ai="start">
              <Text as="h2"> Medium length display headline.</Text>
              <Text>Deploy your mvp in minutes, not days. WT offers you a a wide selection swapable sections for your landing page.</Text>
              <Button wide bg="green">Show Me</Button>
            </Grid.Item>
          </Grid>
        </Container>
      </Section>
    </>
  );
}
