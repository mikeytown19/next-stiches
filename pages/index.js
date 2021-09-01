import Head from 'next/head';
import Section from '../components/Section';
import Header from '../components/Header';
import Container from '../components/Container';
import Box from '../components/Box';
import Text from '../components/Text';
import Button from '../components/Button';

export default function Home() {
  return (
    <>
      <Header>hey</Header>
      <Section size={{ '@initial': '2', '@bp1': '3' }}>
        <Container css={{ textAlign: 'center' }}>

          <Text css={{ textAlign: 'center', fs: '$9' }} as="h1">Style your components with confidence</Text>

          <Text css={{ textAlign: 'center', fs: '$6', py: '$7' }}>CSS-in-JS with near-zero runtime, SSR, multi-variant support, and a best-in-class developer experience.</Text>
          <Button css={{ py: '$2', px: '$5' }}> Documentation</Button>
        </Container>
      </Section>
    </>
  );
}
