import { useState } from 'react';
import { toast } from 'sonner';

export default function MultiLineEdit(props) {
  const { name, value, setValue, className } = props;
  const [editingValue, setEditingValue] = useState(value);
  const minLength = 40;

  function handleChange(e) {
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
      setValue(editingValue);
      return;
    }
  }

  return (
    <textarea
      name={name}
      value={editingValue}
      onChange={handleChange}
      onBlur={handleBlur}
      className={`${className} field-sizing-content transition-all duration-150 hover:cursor-pointer hover:bg-neutral-200 hover:pl-0.5 focus:outline-none`}
      rows={7}
    ></textarea>
  );
}
