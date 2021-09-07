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
} from '../components';

export default function Heros() {
  return (
    <>
      <Header />
      <Hero size="3">
        <Section ta="center">
          <Heading as="h1">Lorem ipsum dolor sit amet consectetur.
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aspernatur fugiat perspiciatis eligendi in fugit obcaecati ullam odit maiores repellendus, dolorum sint, nam quod praesentium cum rerum error! Vitae, veniam?
          </Text>
          <Button mt="7" bg="blue" wide> Sign up now</Button>
        </Section>
      </Hero>

      <Section ta="center">
        <Container bg="gray">
          <Text size="md">Tools for Developers & Designers</Text>
          <Heading as="h1">Subscribe to be aware of new releases updates & free templates!</Heading>
          <Box>
            <Button wide bg="blue" mr="5"> Subscribe</Button>
            <Button wide bg="green"> Try Demo</Button>
          </Box>

        </Container>
      </Section>

      <Section>
        <Container>
          <Text size="md" color="green">Tools for Developers & Designers</Text>
          <Heading as="h1">Subscribe to be aware of new releases updates & free templates!</Heading>
          <Box>
            <Button wide bg="blue" mr="5"> Subscribe</Button>
            <Button wide bg="green"> Try Demo</Button>
          </Box>
        </Container>
      </Section>

      <Section>
        <Container bg="gray" flex>
          <Box flex>
            <Box pr="5">

              <Text size="md" color="blue">Tools for Developers & Designers</Text>
              <Heading as="h1">Subscribe to be aware of new releases updates & free templates!</Heading>
              <Box>
                <Button wide bg="blue" mr="5"> Subscribe</Button>
                <Button wide bg="green"> Try Demo</Button>
              </Box>
            </Box>
            <Box flex jc="center" ai="center">
              <img src="https://dummyimage.com/520x400/e5e5e5/000" alt="" />
            </Box>
          </Box>
        </Container>
      </Section>

      <Section>
        <Container flex>
          <Box flex>
            <Box flex jc="center" ai="center" pr="5">
              {/* https://picsum.photos/400/400 */}
              <img src="https://dummyimage.com/520x400/e5e5e5/000" alt="" />
            </Box>
            <Box pl="5">
              <Text size="md" color="blue">Tools for Developers & Designers</Text>
              <Heading as="h1">Subscribe to be aware of new releases updates & free templates!</Heading>
              <Box>
                <Button wide bg="blue" mr="5"> Subscribe</Button>
                <Button wide bg="green"> Try Demo</Button>
              </Box>
            </Box>

          </Box>
        </Container>
      </Section>

    </>
  );
}
