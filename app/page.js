import Header from '@/src/header/Header';
import Menu from '@/src/lateralMenu/Menu';

export default function Home() {
  return (
    <main className={'flex flex-col m-auto max-w-4xl px-4 h-full'}>
      <Header/>
        <Menu/>
    </main>
  );
}
