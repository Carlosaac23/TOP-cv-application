import SingleLineEdit from '@/components/SingleLineEdit';
import { useEducation } from '@/hooks/useEducation';

export default function Education() {
  const { educations, updateYear, updateUniversity, updateCareer } =
    useEducation();

  return (
    <div className='border-b px-2 py-4 md:border-r md:px-4'>
      <h2 className='mb-2 text-center font-bold tracking-widest uppercase md:text-left md:text-xl'>
        Education
      </h2>
      {educations.map(({ year, university, career }, index) => {
        return (
          <div key={index} className='not-last:mb-4'>
            <SingleLineEdit
              name='Year'
              value={year}
              setValue={newValue => updateYear(index, newValue)}
              className='block text-sm font-bold'
            />
            <SingleLineEdit
              name='University'
              value={university}
              setValue={newValue => updateUniversity(index, newValue)}
              className='block text-sm font-bold'
            />
            <div className='flex items-baseline'>
              <span className='before:content-["•"]'></span>
              <SingleLineEdit
                name='Career'
                value={career}
                setValue={newValue => updateCareer(index, newValue)}
                className='ml-2 text-sm font-light'
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
