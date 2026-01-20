import { Earth, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export function useContact() {
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

  return { contactMethods };
}
