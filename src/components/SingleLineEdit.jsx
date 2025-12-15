import { useState } from 'react';

export default function SingleLineEdit({ value, className }) {
  const [editingValue, setEditingValue] = useState(value);

  function onChange(e) {
    setEditingValue(e.target.value);
  }

  return (
    <input
      type='text'
      aria-label='Field name'
      value={editingValue}
      onChange={onChange}
      className={`${className} w-full hover:cursor-pointer hover:bg-neutral-100 focus:outline-none`}
    />
  );
}
