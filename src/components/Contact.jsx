import SingleLineEdit from '@/SingleLineEdit';
import { Earth, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [telephone, setTelephone] = useState('+57-300-184-1584');
  const [email, setEmail] = useState('johndoe@gmail.com');
  const [address, setAddress] = useState('123 Anywhere St., Any City');
  const [website, setWebsite] = useState('www.johndoewebsite.com');

  return (
    <div>
      <h2 className='mb-3 text-center font-bold uppercase'>Contact</h2>
      <div className='flex items-center gap-3'>
        <Phone size={16} color='#404040' />
        <SingleLineEdit
          className={'text-sm'}
          value={telephone}
          setValue={setTelephone}
        />
      </div>
      <div className='flex items-center gap-3'>
        <Mail size={16} color='#404040' />
        <SingleLineEdit
          className={'text-sm'}
          value={email}
          setValue={setEmail}
        />
      </div>
      <div className='flex items-center gap-3'>
        <MapPin size={16} color='#404040' />
        <SingleLineEdit
          className={'text-sm'}
          value={address}
          setValue={setAddress}
        />
      </div>
      <div className='flex items-center gap-3'>
        <Earth size={16} color='#404040' />
        <SingleLineEdit
          className={'text-sm'}
          value={website}
          setValue={setWebsite}
        />
      </div>
    </div>
  );
}
