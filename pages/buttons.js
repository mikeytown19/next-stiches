import { Component1Icon } from '@radix-ui/react-icons';
import {
  Section,
  Header,
  Button,
  Text,
  Box,
  Container,
  Heading,
  Grid,
} from '../components';

export default function Buttons() {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Heading ta="center" color="yellow" as="h1">Buttons</Heading>
          <Text as="h3" color="yellow">A list of buttons</Text>

          <Text>Component Library built off of <Text as="span" color="violet">@stiches</Text>
          </Text>
          <Grid columns="4" gap="5">

            <Box><Button> default button</Button></Box>
            <Box><Button border="none">No Border Button</Button></Box>
            <Box><Button size="small">Small Button</Button></Box>
            <Box><Button size="large">Large Button</Button></Box>
            <Box><Button> primary button</Button></Box>
            <Box><Button bg="violet"> secondary button</Button></Box>
            <Box><Button bg="yellow" icon={<Component1Icon />}>button with icon left</Button></Box>
            <Box><Button bg="violet" iconRight icon={<Component1Icon />}>button with icon right</Button></Box>
            <Box><Button outline bg="yellow"> primary button</Button></Box>
            <Box><Button bg="violet" wide> secondary button</Button></Box>

          </Grid>

        </Container>
      </Section>
    </>
  );
}
