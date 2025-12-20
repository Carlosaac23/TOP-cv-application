import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Languages from './Languages';
import Name from './Name';
import Skills from './Skills';
import Summary from './Summary';

export default function Form() {
  return (
    <main className='m-2 border-t md:grid md:grid-cols-2 md:grid-rows-[auto_repeat(4,1fr)] md:border-x lg:m-auto lg:max-w-[80%] lg:shadow-md xl:max-w-[50%]'>
      <Name />
      <Contact />
      <Summary />
      <Education />
      <Experience />
      <Skills />
      <Languages />
    </main>
  );
}
