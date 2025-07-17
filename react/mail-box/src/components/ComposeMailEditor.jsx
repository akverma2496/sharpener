import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ComposeMailEditor = ({ value, setValue }) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      [{ color: [] }, { background: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  return (
    <div className="mb-4">
      <label className="form-label fw-semibold">Message</label>
      <div style={{ height: '225px' }}>
        <ReactQuill
          value={value}
          onChange={setValue}
          theme="snow"
          modules={modules}
          style={{ height: '200px' }} // editor area height
        />
      </div>
    </div>
  );
};

export default ComposeMailEditor;
