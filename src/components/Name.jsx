import { useState } from 'react';
import SingleLineEdit from './SingleLineEdit';

export default function Name() {
  const [name, setName] = useState('Carlos Acosta');
  const [profession, setProfession] = useState('Software Engineer');

  return (
    <>
      <div>
        <SingleLineEdit
          className={'p-4 text-center text-2xl tracking-widest uppercase'}
          value={name}
          setValue={setName}
          style='big'
        />
      </div>
      <div>
        <SingleLineEdit
          className={'p-1 text-center text-sm tracking-wide uppercase'}
          value={profession}
          setValue={setProfession}
          style='small'
        />
      </div>
    </>
  );
}
