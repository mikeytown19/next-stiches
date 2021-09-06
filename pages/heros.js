/* eslint-disable react/no-unescaped-entities */
import {
  Section,
  Header,
  Heading,
  Button,
  Text,
  Hero,
  Container,
  Box,
  Grid,
} from '../components';

export default function Heros() {
  return (
    <>
      <Header />
      <Hero size="2">
        <Section ta="center">
          <Heading as="h1">Lorem ipsum dolor sit amet consectetur.
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aspernatur fugiat perspiciatis eligendi in fugit obcaecati ullam odit maiores repellendus, dolorum sint, nam quod praesentium cum rerum error! Vitae, veniam?
          </Text>
          <Button mt="7" bg="red" wide> Action</Button>
        </Section>
      </Hero>
      <Section>
        <Container>
          <Grid>
            <Box flex fd="column" jc="center" ai="start">
              <Text as="h2"> Medium length display headline.</Text>
              <Text>Deploy your mvp in minutes, not days. WT offers you a a wide selection swapable sections for your landing page.</Text>
              <Button wide bg="red">Show Me</Button>
            </Box>
            <Box flex jc="center" ai="center">
              <img src="https://picsum.photos/400/400" alt="" />
            </Box>
          </Grid>
        </Container>
      </Section>
      <Section>
        <Container>
          <Grid>
            <Box flex jc="center" ai="center">
              <img src="https://picsum.photos/600/500" alt="" />
            </Box>
            <Box flex fd="column" jc="center" ai="start">
              <Text as="h2"> Medium length display headline.</Text>
              <Text>Deploy your mvp in minutes, not days. WT offers you a a wide selection swapable sections for your landing page.</Text>
              <Button wide bg="red">Show Me</Button>
            </Box>
          </Grid>
        </Container>
      </Section>

    </>
  );
}
