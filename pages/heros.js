import Section from '../components/Section';
import Header from '../components/Header';

import Button from '../components/Button';
import { Text } from '../components/Text';
import Hero from '../components/Hero';
import Box from '../components/Box';
import Grid from '../components/Grid';
import Container from '../components/Container';

export default function Heros() {
  return (
    <>
      <Header />

      <Hero css={{ p: '$11', linearGradient: '$blue3' }}>
        <Section textAlign="center">
          <Text heading color="blue">Lorem ipsum dolor sit amet consectetur.
          </Text>
          <Text size="4" m="auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aspernatur fugiat perspiciatis eligendi in fugit obcaecati ullam odit maiores repellendus, dolorum sint, nam quod praesentium cum rerum error! Vitae, veniam?
          </Text>
          <Button mt="7" bg="blue" wide> Action</Button>
        </Section>
      </Hero>
      <Section>
        <Container>
          <Grid gap="1">
            <Box p="3">
              <Text size="8" as="h4">Short length headline.</Text>
              <Text>
                Don't loose precious days designing, coding the landing page and testing .
              </Text>
            </Box>
            <Box p="3">
              <Text size="8" as="h4">Short length headline.</Text>
              <Text>
                You're about to launch soon and must be 100% focused on your product
              </Text>
            </Box>
            <Box p="3">
              <Text size="8" as="h4">Short length headline.</Text>
              <Text>
                You're about to launch soon and must be 100% focused on your product
              </Text>
            </Box>
            <Box p="3">
              <Text size="8" as="h4">Short length headline.</Text>
              <Text>
                You're about to launch soon and must be 100% focused on your product
              </Text>
            </Box>
          </Grid>
        </Container>
      </Section>
      <Section>
        <Container>
          <Text color="violet" size="9" as="h4">Short length headline to use as a title.
          </Text>
          <Grid gap="5">
            <Box p="5">
              <Text size="8" as="h4">Short length headline.</Text>
              <Text>
                Don't loose precious days designing, coding the landing page and testing .
              </Text>
            </Box>
            <Box p="5">
              <Text size="8" as="h4">Short length headline.</Text>
              <Text>
                You're about to launch soon and must be 100% focused on your product
              </Text>
            </Box>

          </Grid>
        </Container>
      </Section>
    </>
  );
}
