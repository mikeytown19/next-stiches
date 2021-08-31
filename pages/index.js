import Head from 'next/head';
import Button from '../components/Button'
import Header from '../components/Header'

export default function Home() {
  return (
    <main>
      <Header>hey</Header>
      <Button color='gray500' css={{mr: '$3'}}>Example Button</Button>
      <Button color='gray500'>Example Button</Button>
    </main>
  );
}
