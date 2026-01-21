import MultiLineEdit from '@/components/MultiLineEdit';
import SingleLineEdit from '@/components/SingleLineEdit';
import { useExperience } from '@/hooks/useExperience';

export default function Experience() {
  const { jobs, updateCompany, updateYears, updatePosition, updateDuty } =
    useExperience();

  return (
    <div className='border-b px-2 py-4 md:row-span-4 md:px-4'>
      <h2 className='mb-2 text-center font-bold tracking-widest uppercase md:text-left md:text-xl'>
        Work Experience
      </h2>
      {jobs.map(({ company, years, position, duties }, jobIndex) => {
        return (
          <div key={jobIndex} className='not-last:mb-4'>
            <div className='md:flex md:justify-between'>
              <SingleLineEdit
                name='Company'
                value={company}
                setValue={newValue => updateCompany(jobIndex, newValue)}
                className='mb-0.5 block font-bold'
              />
              <SingleLineEdit
                name='Years'
                value={years}
                setValue={newValue => updateYears(jobIndex, newValue)}
                className='block text-xs font-medium md:text-sm'
              />
            </div>
            <SingleLineEdit
              name='Position'
              value={position}
              setValue={newValue => updatePosition(jobIndex, newValue)}
              className='mb-1 block text-sm tracking-wide'
            />
            {duties.map((duty, dutyIndex) => {
              return (
                <div key={dutyIndex} className='flex items-baseline'>
                  <span className='before:content-["•"]'></span>
                  <MultiLineEdit
                    name='Duty'
                    value={duty}
                    setValue={newValue =>
                      updateDuty(duties, dutyIndex, jobIndex, newValue)
                    }
                    className='ml-2 max-h-40 resize-none text-sm'
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
