import React, { useState } from 'react';

// function creating using Geek Culture's tutorial as a reference  https://medium.com/geekculture/how-to-upload-and-preview-images-in-react-js-4e22a903f3db
function UploadImage() {
  const uploadedImage = React.useRef(null);
  const [image, setImage] = useState([]);

  function handleImageChange(e) {
    setImage(URL.createObjectURL(e.target.files[0]));
  }

const styles = {
  image: {
    maxWidth: "250px",
    height: "100%",
  }
}

  return (
    <div>
      <label for="file">Choose file to upload</label>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <img src={image} ref={uploadedImage} style={styles.image}/>
    </div>
  );
}

export default UploadImage;