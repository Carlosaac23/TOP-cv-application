import Contact from './Contact';
import Name from './Name';

export default function Form() {
  return (
    <main className='m-2 grid grid-cols-2 border-t-2 p-2'>
      <div className='col-span-2 border-b'>
        <Name />
      </div>
      <div className='col-span-2 border-b'>
        <Contact />
      </div>
    </main>
  );
}
