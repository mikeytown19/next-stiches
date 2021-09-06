import { Component1Icon } from '@radix-ui/react-icons';
import {
  Section,
  Header,
  Button,
  Text,
  Box,
  Container,
  Heading,
} from '../components';

export default function Buttons() {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Heading ta="center" as="h1">Buttons</Heading>
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
