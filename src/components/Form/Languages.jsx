import { useState } from 'react';
import SingleLineEdit from '../SingleLineEdit';

export default function Languages() {
  const [languages, setLanguages] = useState([
    'English: Native',
    'French: Fluent',
    'German: Basics',
    'Spanish: Intermadiate',
  ]);

  return (
    <div className='border-b px-2 py-4 md:border-r'>
      <h2 className='mb-2 text-center font-bold tracking-widest uppercase'>
        Lenguajes
      </h2>

      {languages.map((language, index) => {
        function updateLanguage(newValue) {
          const newLanguages = [...languages];
          newLanguages[index] = newValue;
          setLanguages(newLanguages);
        }

        return (
          <div key={index} className='flex items-baseline gap-2'>
            <span className='before:content-["•"]'></span>
            <SingleLineEdit
              name='Language'
              value={language}
              setValue={updateLanguage}
              className={'text-sm'}
            />
          </div>
        );
      })}
    </div>
  );
}
