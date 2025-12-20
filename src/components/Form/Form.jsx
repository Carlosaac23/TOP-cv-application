import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Languages from './Languages';
import Name from './Name';
import Skills from './Skills';
import Summary from './Summary';

export default function Form() {
  return (
    <main className='m-2 border-t-2 md:grid md:grid-cols-2 lg:m-auto lg:max-w-[80%] xl:max-w-[50%]'>
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
