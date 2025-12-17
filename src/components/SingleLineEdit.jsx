import { useState } from 'react';

export default function SingleLineEdit({ value, className }) {
  const [editingValue, setEditingValue] = useState(value);

  function onChange(e) {
    setEditingValue(e.target.value);
  }

  return (
    <div
      contentEditable={true}
      suppressContentEditableWarning={true}
      dangerouslySetInnerHTML={{ __html: editingValue }}
      value={editingValue}
      onChange={onChange}
      className={`${className} w-full hover:cursor-pointer hover:bg-neutral-200 focus:outline-none`}
    ></div>
  );
}
