// filepath: /Users/allisongattone/Desktop/artcurator/artful-curator/src/components/DescriptionEditor.js
import React, { useState } from 'react';

const DescriptionEditor = ({ initialText = '', onSave }) => {
  const [text, setText] = useState(initialText);

  const handleSave = () => {
    if (onSave) onSave(text);
  };

  return (
    <div>
      <textarea 
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default DescriptionEditor;