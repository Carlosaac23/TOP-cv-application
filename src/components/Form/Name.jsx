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
          className={'text-center text-2xl tracking-widest uppercase'}
          value={name}
          setValue={setName}
          style='big'
        />
      </div>
      <div>
        <SingleLineEdit
          name='Profession'
          className={'text-center text-sm tracking-wide uppercase'}
          value={profession}
          setValue={setProfession}
          style='small'
        />
      </div>
    </>
  );
}
