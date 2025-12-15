import SingleLineEdit from '@/SingleLineEdit';
import { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('Carlos Acosta');
  const [profession, setProfession] = useState('Software Engineering');

  return (
    <main>
      <div>
        <SingleLineEdit value={name} setValue={setName} style='big' />
      </div>
      <div>
        <SingleLineEdit
          value={profession}
          setValue={setProfession}
          style='small'
        />
      </div>
    </main>
  );
}
