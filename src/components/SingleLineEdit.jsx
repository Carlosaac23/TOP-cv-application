import { useState } from 'react';
import { toast } from 'sonner';

export default function SingleLineEdit({ name, value, className }) {
  const [editingValue, setEditingValue] = useState(value);

  function onChange(e) {
    setEditingValue(e.target.value);
  }

  function handleBlur() {
    if (value !== editingValue) {
      toast.success(`${name} successfully saved!`);
    }
  }

  return (
    <input
      type='text'
      value={editingValue}
      onChange={onChange}
      onBlur={handleBlur}
      name={name}
      className={`${className} w-full hover:cursor-pointer hover:bg-neutral-200 focus:outline-none`}
    />
  );
}
