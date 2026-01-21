import { useState } from 'react';

export function useEducation() {
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

  const updateYear = (index, newValue) => {
    const newEducations = [...educations];
    newEducations[index] = { ...newEducations[index], year: newValue };
    setEducations(newEducations);
  };

  const updateUniversity = (index, newValue) => {
    const newEducations = [...educations];
    newEducations[index] = {
      ...newEducations[index],
      university: newValue,
    };
    setEducations(newEducations);
  };

  const updateCareer = (index, newValue) => {
    const newEducations = [...educations];
    newEducations[index] = { ...newEducations[index], career: newValue };
    setEducations(newEducations);
  };

  return { educations, updateYear, updateUniversity, updateCareer };
}
