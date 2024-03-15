import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Social from '@/components/Social';

export default async function Home() {

  return (
    <main className=" text-white text-center">
      <Social />
      <Skills />
      <Projects />
    </main>
  );
}
