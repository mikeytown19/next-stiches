/* eslint-disable react/no-unescaped-entities */
import {
  Section,
  Nav,
  Heading,
  Button,
  Text,
  Hero,
  Container,
  Box,
  Flex,
  Footer,
} from '../components';
import { styled } from '../theme/stiches.config';

const Blob = () => {
  const StyledStop = styled('stop');
  const StyledSVG = styled('svg', {
    maxWidth: '400px',

  });

  return (
    <StyledSVG viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" id="blobSvg">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <StyledStop style={{ stopColor: 'var(--colors-blue8)' }} offset="stop2" />
        </linearGradient>
      </defs>
      <path id="blob" d="M486.5,288Q485,326,467,360.5Q449,395,420.5,420.5Q392,446,357,458.5Q322,471,286,476.5Q250,482,214.5,475.5Q179,469,145,455Q111,441,83,416.5Q55,392,40,357.5Q25,323,21.5,286.5Q18,250,24,214.5Q30,179,43,144Q56,109,86.5,88Q117,67,147,45.5Q177,24,213.5,17Q250,10,287,16.5Q324,23,359.5,36.5Q395,50,421.5,78Q448,106,463,141Q478,176,483,213Q488,250,486.5,288Z" fill="url(#gradient)" />
    </StyledSVG>
  );
};

export default function Heros() {
  return (
    <>
      <Nav />
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
        <Container bg="blue">
          <Flex gap="3">
            <Box pr="5" className="box">
              <Text size="md" color="blue">Tools for Developers & Designers No Flex</Text>
              <Heading as="h2">Subscribe to be aware of new releases updates & free templates!</Heading>
              <Heading as="h5">Subscribe to be aware of new releases updates & free templates!</Heading>
              <Box>
                <Button wide bg="blue" mr="5"> Subscribe</Button>
                <Button wide bg="green"> Try Demo</Button>
              </Box>
            </Box>
            <Flex jc="center" ai="center">
              <Blob />
            </Flex>
          </Flex>
        </Container>
      </Section>

      <Section>
        <Container flex>
          <Flex flex>
            <Box flex jc="center" ai="center" pr="5">
              <Blob />
            </Box>
            <Box pl="5">
              <Text size="md" color="blue">Tools for Developers & Designers</Text>
              <Heading as="h1">Subscribe to be aware of new releases updates & free templates!</Heading>
              <Box>
                <Button wide bg="blue" mr="5"> Subscribe</Button>
                <Button wide bg="green"> Try Demo</Button>
              </Box>
            </Box>

          </Flex>
        </Container>
      </Section>

      <Section ta="center">
        <Container flex>
          <Flex flex>

            <Box pl="5">
              <Text size="md" color="blue">Tools for Developers & Designers</Text>
              <Heading as="h1">Subscribe to be aware of new releases updates & free templates!</Heading>
              <Box>
                <Button wide bg="blue" mr="5"> Subscribe</Button>
                <Button wide bg="green"> Try Demo</Button>
              </Box>
              <Box flex jc="center" ai="center" p="5">
                <Blob />
              </Box>
            </Box>

          </Flex>
        </Container>
      </Section>
      <Footer />

    </>
  );
}
