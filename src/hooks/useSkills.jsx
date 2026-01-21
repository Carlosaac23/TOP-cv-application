import { useState } from 'react';

export function useSkills() {
  const [skills, setSkills] = useState([
    'Project Management',
    'Public Relations',
    'Teamwork',
    'Time Management',
    'Leadership',
    'Effective Communication',
    'Critical Thinking',
  ]);

  const updateSkill = (index, newValue) => {
    const newSkills = [...skills];
    newSkills[index] = newValue;
    setSkills(newSkills);
  };

  return { skills, updateSkill };
}
