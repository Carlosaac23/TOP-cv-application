import { useState } from 'react';
import SingleLineEdit from '../SingleLineEdit';

export default function Skills() {
  const [skills, setSkills] = useState([
    'Project Management',
    'Public Relations',
    'Teamwork',
    'Time Management',
    'Leadership',
    'Effective Communication',
    'Critical Thinking',
  ]);

  return (
    <div className='border-b px-2 py-4 md:border-r md:px-4'>
      <h2 className='mb-2 text-center font-bold tracking-widest uppercase md:text-left md:text-xl'>
        Skills
      </h2>

      {skills.map((skill, index) => {
        function updateSkill(newValue) {
          const newSkills = [...skills];
          newSkills[index] = newValue;
          setSkills(newSkills);
        }

        return (
          <div key={index} className='flex items-baseline gap-2'>
            <span className='before:content-["•"]'></span>
            <SingleLineEdit
              name='Skill'
              value={skill}
              setValue={updateSkill}
              className={'text-sm'}
            />
          </div>
        );
      })}
    </div>
  );
}
