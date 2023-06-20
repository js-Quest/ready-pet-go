import React, { useEffect, useRef } from 'react';
import '../styles/UWidget.css'

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "10px 0 0 0"
  },
  button: {
    border: "solid black 1px",
    padding: "8px",
    backgroundColor: '#36393F',
    width: '6rem',
    fontSize: '15px',
    color: 'white',
    borderRadius: '6px',
    margin: '10px 5px 4px 10px'
  }
}

// function creating using Cloudinary's tutorial as a reference  https://www.youtube.com/watch?v=paiO6M2wBqE&t=7s
function UploadWidget({ setProfilePicture }) {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: 'dqlxeavfh',
      uploadPreset: 'bidske4r'
    }, function (error, result) {
      if (!error && result && result.event === "success") {
        console.log('Done! Here is the image info: ', result.info);
        setProfilePicture(result.info.secure_url)

      }
    })
  }, [])

  return (
    <div style={styles.container}>
      <button
        type="button"
        className='widgetBtn'
        onClick={() => widgetRef.current.open()} style={styles.button} >
        Upload
      </button>
      <button
        type='button'
        className='widgetBtn'
        onClick={() => setProfilePicture('')}
        style={styles.button}
      >Delete</button>
    </div>
  );
}

export default UploadWidget;