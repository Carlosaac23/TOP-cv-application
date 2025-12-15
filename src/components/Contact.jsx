import SingleLineEdit from '@/SingleLineEdit';
import { Earth, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [telephone, setTelephone] = useState('+57-300-184-1584');
  const [email, setEmail] = useState('johndoe@gmail.com');
  const [address, setAddress] = useState('123 Anywhere St., Any City');
  const [website, setWebsite] = useState('www.johndoewebsite.com');

  const contactMethods = [
    {
      icon: <Phone size={16} color='#404040' />,
      value: telephone,
      setValue: setTelephone,
    },
    {
      icon: <Mail size={16} color='#404040' />,
      value: email,
      setValue: setEmail,
    },
    {
      icon: <MapPin size={16} color='#404040' />,
      value: address,
      setValue: setAddress,
    },
    {
      icon: <Earth size={16} color='#404040' />,
      value: website,
      setValue: setWebsite,
    },
  ];

  return (
    <div>
      <h2 className='mb-3 text-center font-bold uppercase'>Contact</h2>
      {contactMethods.map(({ icon, value, setValue }) => {
        return (
          <div className='flex items-center gap-3'>
            {icon}
            <SingleLineEdit
              className={'text-sm'}
              value={value}
              setValue={setValue}
            />
          </div>
        );
      })}
    </div>
  );
}
