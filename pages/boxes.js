import {
  Section,
  Nav,
  Text,
  Box,
  Container,
  Grid,
  Heading,
} from '../components';

export default function Boxes() {
  return (
    <>
      <Nav />
      <Section>
        <Container>
          <Heading ta="center" as="h1">
            Boxes
          </Heading>
          <Grid gap="1">
            <Box p="3">
              <Text as="h5">Short length headline.</Text>
              <Text>
                Don't loose precious days designing, coding the landing page and testing .
              </Text>
            </Box>
            <Box p="3">
              <Text as="h5">Short length headline.</Text>
              <Text>
                You're about to launch soon and must be 100% focused on your product
              </Text>
            </Box>
            <Box p="3">
              <Text as="h5">Short length headline.</Text>
              <Text>
                You're about to launch soon and must be 100% focused on your product
              </Text>
            </Box>
            <Box p="3">
              <Text as="h5">Short length headline.</Text>
              <Text>
                You're about to launch soon and must be 100% focused on your product
              </Text>
            </Box>
          </Grid>
        </Container>
      </Section>
      <Section>
        <Container>
          <Grid gap="5">
            <Box p="5">
              <Text as="h5">Short length headline.</Text>
              <Text>
                Don't loose precious days designing, coding the landing page and testing .
              </Text>
            </Box>
            <Box p="5">
              <Text as="h5">Short length headline.</Text>
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
