import Section from '../components/Section';
import Header from '../components/Header';

import Button from '../components/Button';
import { Text } from '../components/Text';
import Hero from '../components/Hero';

export default function Heros() {
  return (
    <>
      <Header />
      <Hero size="3">
        <Text heading color="$blue10">Drillin is killin' Let's make it happen.
        </Text>
      </Hero>
      <Section textAlign="center">
        <Text size="4" color="$blue9" m="auto">
          Tailwind CSS templates with a wicked design. Professionally designed and 100%
          responsive static templates for startups and personal use.
        </Text>
        <Button mt="7" bg="blue" wide> Action</Button>
      </Section>
    </>
  );
}
