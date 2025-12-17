import Contact from './Contact';
import Name from './Name';

export default function Form() {
  return (
    <main className='m-2 grid grid-cols-2 border-t-2'>
      <div className='col-span-2 border-b py-8'>
        <Name />
      </div>
      <div className='col-span-2 border-b py-2'>
        <Contact />
      </div>
    </main>
  );
}
