import SingleLineEdit from '@/components/SingleLineEdit';
import { useContact } from '@/hooks/useContact';

export default function Contact() {
  const { contactMethods } = useContact();

  return (
    <div className='flex flex-col gap-1 border-b px-2 py-4 md:border-r md:px-4'>
      <h2 className='mb-2 text-center font-bold tracking-widest uppercase md:text-left md:text-xl'>
        Contact
      </h2>
      {contactMethods.map((props, index) => {
        const { name, icon, value, setValue } = props;

        return (
          <div key={index} className='flex items-center gap-3'>
            {icon}
            <SingleLineEdit
              name={name}
              value={value}
              setValue={setValue}
              className={'text-sm'}
            />
          </div>
        );
      })}
    </div>
  );
}
