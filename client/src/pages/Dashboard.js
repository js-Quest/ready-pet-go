import React from 'react';
import UploadImage from '../components/ImageUpload';

export default function Dashboard(setImage) {

  return (
    <div>
    <h1>Hello, User</h1>
      <UploadImage />
    <button onClick={(image) => setImage(image)}>Save</button>
    </div>
  )
}
