/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { Half2Icon, SunIcon } from '@radix-ui/react-icons';
import * as Styled from './Footer.styles';
import {
  Flex, Grid, Box, Text, Container, Section, Heading,
} from '..';

export const Footer = () => (
  <Styled.Footer>
    <Section bg="gray">
      <Container>
        <Grid ji="center" ai="center" p="6">
          <Box>
            <Flex jc="center" ai="center" css={{ mb: '$3' }}>
              <Half2Icon />
              <Heading
                as="h4"
                css={{
                  pb: '0', pl: '$3', color: '$gray9', mb: '0',
                }}
              >Kich
              </Heading>
            </Flex>

            <Text>Footer Item</Text>
            <Text>Footer Item</Text>
          </Box>
          <Box>
            <Text>Footer Item</Text>
            <Text>Footer Item</Text>
            <Text>Footer Item</Text>
          </Box>
          <Box>
            <Text>Footer Item</Text>
            <Text>Footer Item</Text>
            <Text>Footer Item</Text>
          </Box>
          <Box>
            <Text>Footer Item</Text>
            <Text>Footer Item</Text>
            <Text>Footer Item</Text>
          </Box>
        </Grid>

      </Container>
    </Section>
  </Styled.Footer>
);
