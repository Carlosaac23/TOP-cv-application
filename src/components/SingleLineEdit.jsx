import { useState } from 'react';
import { toast } from 'sonner';

export default function SingleLineEdit(props) {
  const { name, value, setValue, className } = props;
  const [editingValue, setEditingValue] = useState(value);

  function onChange(e) {
    setEditingValue(e.target.value);
  }

  function handleBlur() {
    if (value !== editingValue) {
      setValue(editingValue);
      toast.success(`${name} successfully saved!`);
    }
  }

  return (
    <input
      type='text'
      name={name}
      value={editingValue}
      onChange={onChange}
      onBlur={handleBlur}
      className={`${className} w-full hover:cursor-pointer hover:bg-neutral-200 focus:outline-none`}
    />
  );
}
