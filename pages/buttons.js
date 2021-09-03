import { Component1Icon, SunIcon } from '@radix-ui/react-icons';
import Section from '../components/Section';
import Header from '../components/Header';
import Container from '../components/Container';
import Box from '../components/Box';
import { Text } from '../components/Text';
import Button from '../components/Button';

export default function Buttons() {
  return (
    <>
      <Header>hey</Header>
      <Section size={{ '@initial': '2', '@bp1': '3' }}>
        <Container>
          <Box flex>
            <Text heading color="yellow">Buttons</Text>
            <Text size="8" color="yellow">A list of buttons</Text>

            <Text>Component Library built off of <Text as="span" color="violet">@stiches</Text>
            </Text>
            <Box>
              <Button> default button</Button>

              <Button border="none">No Border Button</Button>
              <Button size="small">Small Button</Button>
              <Button size="large">Small Button</Button>
            </Box>
            <Box>
              <Button primary> primary button</Button>
              <Button secondary> secondary button</Button>
              <Button icon={<Component1Icon />}>button with icon</Button>
            </Box>
          </Box>
        </Container>
      </Section>
    </>
  );
}