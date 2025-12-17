import { useState } from 'react';
import { toast } from 'sonner';

export default function MultiLineEdit({ name, value, className }) {
  const [editingValue, setEditingValue] = useState(value);
  const minLength = 40;

  function onChange(e) {
    setEditingValue(e.target.value);
  }

  function handleBlur() {
    if (editingValue.length === 0) {
      toast.error(`${name} should not be empty.`);
      return;
    }

    if (editingValue.length < minLength) {
      toast.warning(`${name} should be at least ${minLength} characters.`);
      return;
    }

    if (value !== editingValue) {
      toast.success(`${name} successfully saved!`);
      return;
    }
  }

  return (
    <textarea
      name={name}
      value={editingValue}
      onChange={onChange}
      onBlur={handleBlur}
      className={`${className} hover:cursor-pointer hover:bg-neutral-200 focus:outline-none`}
      rows={7}
    ></textarea>
  );
}
