import React, { useState } from 'react';

function UploadForms() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ['image/png', 'image/jpeg'];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setError('');
      setFile(selected);
    } else {
      setFile(null);
      setError('Please select an image file(png or jpeg)');
    }
  };
  return (
    <form>
      <input type='file' onChange={changeHandler} />
      <div className='output'>
        {error && <div className='error'>{error}</div>}
        {file && <div className='error'>{file.name}</div>}
      </div>
    </form>
  );
}

export default UploadForms;