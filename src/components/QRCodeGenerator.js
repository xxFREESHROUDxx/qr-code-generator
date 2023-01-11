import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './QRCodeGenerator.css';

const QRCodeGenerator = () => {
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [size, setSize] = useState(256);
  const [error, setError] = useState('');

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleClick = () => {
    if (!date || !title || !description) {
      setError('All fields are required');
      return;
    }
    setError('');
  };

  return (
    <div className='qr-code-generator'>
      <h1 className='title'>QR Code Generator</h1>
      <div className='input-container'>
        <div className='input-row'>
          <label className='label'>Date:</label>
          <input
            type='date'
            min='2021-01-01'
            max='2022-12-31'
            pattern='[0-9]{4}-[0-9]{2}-[0-9]{2}'
            className='input-field'
            value={date}
            onChange={handleDateChange}
            onBlur={validate}
          />
        </div>
        <div className='input-row'>
          <label className='label'>Title:</label>
          <input
            type='text'
            className='input-field'
            value={title}
            onChange={handleTitleChange}
            onBlur={validate}
          />
        </div>
        <div className='input-row'>
          <label className='label'>Description:</label>
          <textarea
            className='input-field'
            value={description}
            onChange={handleDescriptionChange}
            onBlur={validate}
          />
        </div>
        <div className='generate-btn-container'>
          <button className='generate-btn' onClick={handleClick}>
            Generate QR Code
          </button>
          <button className='print-btn' onClick={handlePrint}>
            Print QR Code
          </button>
        </div>
        {error && <div className='error-message'>{error}</div>}
      </div>

      <div className='qr-code-container qr-code-print'>
        <QRCode
          value={`Date: ${date}\n Title: ${title}\n Description: ${description}`}
          size={size}
          className='qr-code'
        />
      </div>
    </div>
  );
};

function validate(e) {
  let value = e.target.value;
  // your validation code
  // set error state if invalid
}

export default QRCodeGenerator;
