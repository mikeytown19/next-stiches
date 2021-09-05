import { Component1Icon } from '@radix-ui/react-icons';
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
          <Box flex jc="center" ai="center" fd="column">
            <Text heading color="yellow">Buttons</Text>
            <Text size="9" color="yellow">A list of buttons</Text>

            <Text>Component Library built off of <Text as="span" color="violet">@stiches</Text>
            </Text>
            <Box>
              <Button> default button</Button>

              <Button border="none">No Border Button</Button>
              <Button size="small">Small Button</Button>
              <Button size="large">Large Button</Button>
            </Box>
            <Box>
              <Button> primary button</Button>
              <Button color="secondary"> secondary button</Button>
              <Button color="primary" icon={<Component1Icon />}>button with icon left</Button>
              <Button color="secondary" iconRight icon={<Component1Icon />}>button with icon right</Button>

            </Box>
            <Box>
              <Button outline color="primary"> primary button</Button>
              <Button color="secondary"> secondary button</Button>

            </Box>
          </Box>
        </Container>
      </Section>
    </>
  );
}
