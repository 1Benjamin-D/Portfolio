import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Social from '@/components/Social';

export default async function Home() {

  return (
    <main className="text-[#EFEFEF] text-center" id='home'>
      <Navbar/>
      <div className='title'>
      <h1 tabIndex={5} className=' font-DeadSpaceTitle md:text-7xl text-4xl'>B e n j a m i n <br /> D e s m e t</h1>
      </div>
      <Social />
      <Skills />
      <Projects />
      <Contact />
      <div>
        <p>© 2024 Benjamin Desmet. All rights reserved.</p>
      </div>
    </main>
  );
}
