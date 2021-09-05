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
          <Text heading color="blue">Drilling is killing Les make it happen.
          </Text>
          <Text size="4" color="blue" m="auto">
            Tailwind CSS templates with a wicked design. Professionally designed and 100%
            responsive static templates for startups and personal use.
          </Text>
          <Button mt="7" bg="blue" wide> Action</Button>
        </Section>
      </Hero>
      <Section>
        <Container>
          <Grid>
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
          </Grid>
        </Container>
      </Section>
    </>
  );
}
