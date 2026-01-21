import { useState } from 'react';

export function useExperience() {
  const [jobs, setJobs] = useState([
    {
      company: 'Borcelle Studio',
      years: '2030 - Present',
      position: 'Marketing Maganer & Specialist',
      duties: [
        'Led the development and implementation of comprehensive marketing strategies that resulted in a 20% increase in brand visibility and a 15% growth in sales within the first year.',
        'Successfully launched and managed multiple cross-channel campaigns, including digital marketing, social media, and traditional advertising, resulting in improved customer acquisition and retention rates.',
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

  const updateCompany = (jobIndex, newValue) => {
    const newJobs = [...jobs];
    newJobs[jobIndex] = { ...newJobs[jobIndex], company: newValue };
    setJobs(newJobs);
  };

  const updateYears = (jobIndex, newValue) => {
    const newJobs = [...jobs];
    newJobs[jobIndex] = { ...newJobs[jobIndex], years: newValue };
    setJobs(newJobs);
  };

  const updatePosition = (jobIndex, newValue) => {
    const newJobs = [...jobs];
    newJobs[jobIndex] = { ...newJobs[jobIndex], position: newValue };
    setJobs(newJobs);
  };

  const updateDuty = (duties, dutyIndex, jobIndex, newValue) => {
    const newJobs = [...jobs];
    const newDuties = [...duties];
    newDuties[dutyIndex] = newValue;
    newJobs[jobIndex] = {
      ...newJobs[jobIndex],
      duties: newDuties,
    };
    setJobs(newJobs);
  };

  return { jobs, updateCompany, updateYears, updatePosition, updateDuty };
}
