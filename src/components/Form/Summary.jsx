import { useState } from 'react';
import MultiLineEdit from '../MultiLineEdit';

const sampleText =
  'Experienced and results-driven Marketing Manager with a proven track record in developing and executing successful marketing strategies. I am seeking a challenging role where I can contribute my skills in strategic planning, team leadership, and creative problem-solving to achieve business objectives.';

export default function Summary() {
  const [summary, setSummary] = useState(sampleText);

  return (
    <div className='border-b px-2 py-4'>
      <h2 className='mb-2 text-center font-bold tracking-widest uppercase'>
        Profile Summary
      </h2>
      <MultiLineEdit
        name='Summary'
        value={summary}
        setValue={setSummary}
        className={'max-h-40 resize-none text-sm'}
      />
    </div>
  );
}
