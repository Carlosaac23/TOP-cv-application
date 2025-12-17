import Contact from './Contact';
import Name from './Name';
import Summary from './Summary';

export default function Form() {
  return (
    <main className='m-2 grid grid-cols-2 border-t-2'>
      <div className='col-span-2 border-b py-6'>
        <Name />
      </div>
      <div className='col-span-2 border-b py-3'>
        <Contact />
      </div>
      <div className='col-span-2 border-b py-2'>
        <Summary />
      </div>
    </main>
  );
}
