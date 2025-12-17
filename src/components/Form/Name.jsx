import { useState } from 'react';
import SingleLineEdit from '../SingleLineEdit';

export default function Name() {
  const [name, setName] = useState('John Doe');
  const [profession, setProfession] = useState('Marketing Manager');

  return (
    <>
      <div>
        <SingleLineEdit
          name='Name'
          value={name}
          setValue={setName}
          className={'text-center text-2xl tracking-widest uppercase'}
        />
      </div>
      <div>
        <SingleLineEdit
          name='Profession'
          value={profession}
          setValue={setProfession}
          className={'w-full text-center text-sm tracking-wide uppercase'}
        />
      </div>
    </>
  );
}
