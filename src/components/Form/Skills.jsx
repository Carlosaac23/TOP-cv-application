import SingleLineEdit from '@/components/SingleLineEdit';
import { useSkills } from '@/hooks/useSkills';

export default function Skills() {
  const { skills, updateSkill } = useSkills();

  return (
    <div className='border-b px-2 py-4 md:border-r md:px-4'>
      <h2 className='mb-2 text-center font-bold tracking-widest uppercase md:text-left md:text-xl'>
        Skills
      </h2>
      {skills.map((skill, index) => {
        return (
          <div key={index} className='flex items-baseline gap-2'>
            <span className='before:content-["•"]'></span>
            <SingleLineEdit
              name='Skill'
              value={skill}
              setValue={newValue => updateSkill(index, newValue)}
              className='text-sm'
            />
          </div>
        );
      })}
    </div>
  );
}
