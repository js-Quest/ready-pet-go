import React, { useEffect, useRef } from 'react';

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
    width: '8rem', 
    fontSize: '15px',
    color: 'white',
    borderRadius: '6px',
    marginTop: '10px'
  }
}

// function creating using Cloudinary's tutorial as a reference  https://www.youtube.com/watch?v=paiO6M2wBqE&t=7s
function UploadWidget({setProfilePicture}) {
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
      <button onClick={() => widgetRef.current.open()} style={styles.button} >
        Upload Photo
      </button>
    </div>
  );
}

export default UploadWidget;