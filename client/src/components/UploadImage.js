import React, { useState } from 'react';

// function creating using Geek Culture's tutorial as a reference  https://medium.com/geekculture/how-to-upload-and-preview-images-in-react-js-4e22a903f3db
function UploadImage() {
  const [image, setImage] = useState([]);

  function handleImageChange(e) {
    setImage(URL.createObjectURL(e.target.files[0]));
  }

const styles = {
  image: {
    // border: "1px solid black",
    borderRadius: "50%",
    width: "120px",
    height: "120px",
  }
}

  return (
    <div>
      <label for="file">Choose file to upload</label>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <img src={image} style={styles.image}/>
    </div>
  );
}

export default UploadImage;