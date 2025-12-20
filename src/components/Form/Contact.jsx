import { Earth, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import SingleLineEdit from '../SingleLineEdit';

export default function Contact() {
  const [telephone, setTelephone] = useState('+57 300-184-1584');
  const [email, setEmail] = useState('johndoe@gmail.com');
  const [address, setAddress] = useState('123 Anywhere St., Any City');
  const [website, setWebsite] = useState('www.johndoewebsite.com');

  const contactMethods = [
    {
      name: 'Contact Phone',
      icon: <Phone size={16} color='#404040' />,
      value: telephone,
      setValue: setTelephone,
    },
    {
      name: 'Email',
      icon: <Mail size={16} color='#404040' />,
      value: email,
      setValue: setEmail,
    },
    {
      name: 'Location',
      icon: <MapPin size={16} color='#404040' />,
      value: address,
      setValue: setAddress,
    },
    {
      name: 'Website',
      icon: <Earth size={16} color='#404040' />,
      value: website,
      setValue: setWebsite,
    },
  ];

  return (
    <div className='flex flex-col gap-1 border-b px-2 py-4 md:border-r'>
      <h2 className='mb-2 text-center font-bold tracking-widest uppercase'>
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
