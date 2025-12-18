import { useState } from 'react';
import SingleLineEdit from '../SingleLineEdit';

export default function Name() {
  const [name, setName] = useState('John Doe');
  const [profession, setProfession] = useState('Marketing Manager');

  return (
    <div className='flex flex-col items-center gap-1 border-b px-2 py-6'>
      <SingleLineEdit
        name='Name'
        value={name}
        setValue={setName}
        className={'text-3xl tracking-widest uppercase'}
      />
      <SingleLineEdit
        name='Profession'
        value={profession}
        setValue={setProfession}
        className={'text-sm tracking-wide uppercase'}
      />
    </div>
  );
}
