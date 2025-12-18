import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Languages from './Languages';
import Name from './Name';
import Skills from './Skills';
import Summary from './Summary';

export default function Form() {
  return (
    <main className='m-2 border-t-2'>
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
