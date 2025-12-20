import { useState } from 'react';
import MultiLineEdit from '../MultiLineEdit';
import SingleLineEdit from '../SingleLineEdit';

export default function Experience() {
  const [jobs, setJobs] = useState([
    {
      company: 'Borcelle Studio',
      years: '2030 - Present',
      position: 'Marketing Maganer & Specialist',
      duties: [
        'Led the development and implementation of comprehensive marketing strategies that resulted in a 20% increase in brand visibility and a 15% growth in sales within the first year.',
        'Successfully launched and managed multiple cross-channel campaigns, including digital marketing, social media, and traditional advertising, resulting in improved customer acquisition and retention rates',
      ],
    },
    {
      company: 'Fauget Studio',
      years: '2025 - 2029',
      position: 'Marketing Manager & Specialist',
      duties: [
        'Conducted market research to identify emerging trends and consumer preferences, providing valuable insights for produt development and positioning.',
        'Oversaw the creation of engaging content for various platforms, collaborating with internal teams and external agencies to ensure brand consistency and relevance.',
      ],
    },
    {
      company: 'Studio Shodwe',
      years: '2024 - 2025',
      position: 'Marketing Manager & Specialist',
      duties: [
        'Developed and executed targeted marketing campaigns, resulting in a 25% increase in lead generation.',
        'Implemented SEO strategies that improved website traffic by 30%, enhancing online visibility and positioning the company.',
        'Collaborated with sales teams to create effective sales collateral, presentations, and promotional materials.',
      ],
    },
  ]);

  return (
    <div className='border-b px-2 py-4 md:row-span-4 md:px-4'>
      <h2 className='mb-2 text-center font-bold tracking-widest uppercase'>
        Work Experience
      </h2>
      {jobs.map((job, jobIndex) => {
        const { company, years, position, duties } = job;

        function updateCompany(newValue) {
          const newJobs = [...jobs];
          newJobs[jobIndex] = { ...newJobs[jobIndex], company: newValue };
          setJobs(newJobs);
        }

        function updateYears(newValue) {
          const newJobs = [...jobs];
          newJobs[jobIndex] = { ...newJobs[jobIndex], years: newValue };
          setJobs(newJobs);
        }

        function updatePosition(newValue) {
          const newJobs = [...jobs];
          newJobs[jobIndex] = { ...newJobs[jobIndex], position: newValue };
          setJobs(newJobs);
        }

        return (
          <div key={jobIndex} className='not-last:mb-4'>
            <SingleLineEdit
              name='Company'
              value={company}
              setValue={updateCompany}
              className={'mb-0.5 block font-bold'}
            />
            <SingleLineEdit
              name='Years'
              value={years}
              setValue={updateYears}
              className={'block text-xs font-medium'}
            />
            <SingleLineEdit
              name='Position'
              value={position}
              setValue={updatePosition}
              className={'mb-1 block text-sm tracking-wide'}
            />
            {duties.map((duty, dutyIndex) => {
              function updateDuty(newValue) {
                const newJobs = [...jobs];
                const newDuties = [...duties];
                newDuties[dutyIndex] = newValue;
                newJobs[jobIndex] = {
                  ...newJobs[jobIndex],
                  duties: newDuties,
                };
                setJobs(newJobs);
              }

              return (
                <div key={dutyIndex} className='flex items-baseline'>
                  <span className='before:content-["•"]'></span>
                  <MultiLineEdit
                    name='Duty'
                    value={duty}
                    setValue={updateDuty}
                    className={'ml-2 max-h-40 resize-none text-sm'}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
