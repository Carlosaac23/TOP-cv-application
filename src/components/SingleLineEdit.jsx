import { useState } from 'react';

export default function SingleLineEdit({ value, style }) {
  const [editingValue, setEditingValue] = useState(value);

  function onChange(e) {
    setEditingValue(e.target.value);
  }

  function setStyle(style) {
    const bigStyle =
      'mx-auto block w-full p-4 text-center text-2xl tracking-widest uppercase hover:cursor-pointer hover:bg-neutral-100 focus:outline-none';
    const smallStyle =
      'mx-auto block w-full p-1 text-center text-sm tracking-wide uppercase hover:cursor-pointer hover:bg-neutral-100 focus:outline-none';

    return style === 'big' ? bigStyle : smallStyle;
  }

  return (
    <input
      type='text'
      aria-label='Field name'
      value={editingValue}
      onChange={onChange}
      className={setStyle(style)}
    />
  );
}
