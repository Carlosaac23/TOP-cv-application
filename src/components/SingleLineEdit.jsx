import { useState } from 'react';
import { toast } from 'sonner';

export default function SingleLineEdit({ name, value, setValue, className }) {
  const [editingValue, setEditingValue] = useState(value);

  const onChange = e => {
    setEditingValue(e.target.value);
  };

  const handleBlur = () => {
    if (editingValue.length === 0) {
      toast.error(`${name} should not be empty.`);
      return;
    }

    if (value !== editingValue) {
      setValue(editingValue);
      toast.success(`${name} successfully saved!`);
    }
  };

  return (
    <input
      type='text'
      name={name}
      value={editingValue}
      onChange={onChange}
      onBlur={handleBlur}
      className={`${className} field-sizing-content transition-all duration-150 hover:cursor-pointer hover:bg-neutral-200 hover:pl-0.5 focus:outline-none`}
    />
  );
}
