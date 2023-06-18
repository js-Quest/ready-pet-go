// import React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import { useParams } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { UPDATE_USER } from '../utils/mutations';

// function ProfilePicture() {
//   // const [editPhoto, setEditphoto] = useState(false);
//   // const [profilePicture, setProfilePicture] = useState('');

//   // useEffect(() => {
//   //   console.log(profilePicture)
//   // }, [profilePicture])

//   // const [updateUser, { error }] = useMutation(UPDATE_USER);
//   // const { username: userParam } = useParams();

//   // const handleSave = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const { data } = await updateUser({
//   //       variables: {
//   //         profilePicture
//   //       },
//   //     });
//   //     console.log(data)
//   //     setProfilePicture([...userData, {
//   //       ...data.updateUser
//   //     }])

//   //   } catch (err) {
//   //     console.error(err);
//   //   }
//   // };

//   return (
//     <>
//       {/* if editPhoto is false, it's in read-only mode */}
//       {editPhoto ? (
//         <Card sx={{ width: 300, height: 300 }}>
//           <CardContent>
//             <CardMedia
//               sx={{ height: 300 }}
//               image={user.profilePicture} />
//           </CardContent>
//           <button type="button" onClick={() => setEditphoto(true)}>
//             Edit
//           </button>
//         </Card >
//       ) : (
//         // if editPhoto is true, it's in edit mode
//         <Card sx={{ width: 300, height: 300 }}>
//           <CardContent>
//             <UploadWidget setProfilePicture={setprofilePicture} />
//           </CardContent>
//           <button type="button" onClick={handleSave}>
//             Save
//           </button>
//         </Card >
//       )}
//     </>
//   )
// }

// export default ProfilePicture;