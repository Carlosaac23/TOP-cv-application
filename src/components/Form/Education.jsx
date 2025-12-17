import { useState } from 'react';
import SingleLineEdit from '../SingleLineEdit';

export default function Education() {
  const [educations, setEducations] = useState([
    {
      year: '2029 - 2030',
      university: 'Borcelle University',
      career: 'Master of Business Management',
    },
    {
      year: '2025 - 2029',
      university: 'Borcelle University',
      career: 'Bachelor of Business Management',
    },
  ]);

  return (
    <div className='p-2'>
      <h2 className='mb-2 text-center font-bold tracking-widest uppercase'>
        Education
      </h2>
      {educations.map(({ year, university, career }, index) => {
        function updateYear(newValue) {
          const newEducations = [...educations];
          newEducations[index] = { ...newEducations[index], year: newValue };
          setEducations(newEducations);
        }

        function updateUniversity(newValue) {
          const newEducations = [...educations];
          newEducations[index] = {
            ...newEducations[index],
            university: newValue,
          };
          setEducations(newEducations);
        }

        function updateCareer(newValue) {
          const newEducations = [...educations];
          newEducations[index] = { ...newEducations[index], career: newValue };
          setEducations(newEducations);
        }

        return (
          <div key={index} className='mb-4'>
            <SingleLineEdit
              name='Year'
              value={year}
              setValue={updateYear}
              className={'text-sm font-bold'}
            />
            <SingleLineEdit
              name='University'
              value={university}
              setValue={updateUniversity}
              className={'text-sm font-bold'}
            />
            <SingleLineEdit
              name='Career'
              value={career}
              setValue={updateCareer}
              className={'ml-2 text-sm font-light'}
            />
          </div>
        );
      })}
    </div>
  );
}
