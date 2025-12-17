import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Name from './Name';
import Summary from './Summary';

export default function Form() {
  return (
    <main className='m-2 border-t-2'>
      <div className='border-b py-6'>
        <Name />
      </div>
      <div className='border-b py-3'>
        <Contact />
      </div>
      <div className='border-b py-2'>
        <Summary />
      </div>
      <div className='border-b py-2'>
        <Education />
      </div>
      <div className='border-b py-2'>
        <Experience />
      </div>
    </main>
  );
}
