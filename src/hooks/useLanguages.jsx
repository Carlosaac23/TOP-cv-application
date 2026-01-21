import { useState } from 'react';

export function useLanguages() {
  const [languages, setLanguages] = useState([
    'English: Native',
    'French: Fluent',
    'German: Basics',
    'Spanish: Intermadiate',
  ]);

  const updateLanguage = (index, newValue) => {
    const newLanguages = [...languages];
    newLanguages[index] = newValue;
    setLanguages(newLanguages);
  };

  return { languages, updateLanguage };
}
