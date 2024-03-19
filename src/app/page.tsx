import Contact from '@/components/Contact';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Social from '@/components/Social';

export default async function Home() {

  return (
    <main className="text-[#EFEFEF] text-center">
      <h1 className=' font-DeadSpaceTitle'>Benjamin <br /> Desmet</h1>
      <Social />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
