import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import PetCard from '../components/PetCard';
import PetForm from '../components/PetForm';
import PetButton from '../components/PetButton';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';


import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { UPDATE_USER } from '../utils/mutations';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Profile() { 
  const [editProf, editProfile] = useState(false);
  const [formState, setFormState] = useState({ email: '', city: '', bio: '', username: '', phoneNumber: '' });

  const [updateUser, { error }] = useMutation(UPDATE_USER);


  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });


  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  console.log(data)

  if (loading) {
    return <div>Loading...</div>;
  }

  const editFormState = (event) => {
    event.preventDefault();
    console.log('thisworks')
    if (!editProf) {
      editProfile(true)
    } else {
      editProfile(false)
    }
  };

  const handleChange = (event) => { 
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);


    //formstate will have the variable read as '' if the user does not change the value. These if statements catchs any of the variables not changed and sets to them back to thier original value. 
    if (!formState.email) {
      formState.email = data.me.email
    }
    if (!formState.city) {
      formState.city = data.me.city
    }
    if (!formState.bio) {
      formState.bio = data.me.bio
    }
    if (!formState.username) {
      formState.username = data.me.username
    }
    if (!formState.phoneNumber) {
      formState.phoneNumber = data.me.phoneNumber
    }

    try {
      const { data } = await updateUser({
        variables: { ...formState }
      })

      console.log(data)

    } catch (err) {
      console.error(err);
    }



    setFormState({ email: '', city: '', bio: '', username: '', phoneNumber: '' });
    editProfile(false)
  };


  return (


    <div>


      <div class="col-9 container-fluid mt-5 border border-5 rounded">
        <h1>User Info</h1>


        {editProf ? (
          <div>
            <form className='d-flex  justify-content-around' onSubmit={handleFormSubmit}>
            Username: <input
                className="form-input"
                placeholder="Username"
                name="username"
                type="text"
                value={formState.username || data.me.username}
                onChange={handleChange}
              />
              EMAIL:  <input
                className="form-input"
                placeholder="User Email"
                name="email"
                type="email"
                value={formState.email || data.me.email}
                onChange={handleChange}
              />
              City: <input
                className="form-input"
                placeholder="User City"
                name="city"
                type="text"
                value={formState.city || data.me.city}
                onChange={handleChange}
              />
              Phone Number: <input
                className="form-input"
                placeholder="Phone Number"
                name="phoneNumber"
                type="text"
                value={formState.phoneNumber || data.me.phoneNumber}
                onChange={handleChange}
              />
              Bio: <input
                className="form-input"
                placeholder="Bio"
                name="bio"
                type="text"
                value={formState.bio || data.me.bio}
                onChange={handleChange}
              />
              <button
                className="btn btn-block btn-primary"
                style={{ cursor: 'pointer' }}
                type="submit"
              >
                Submit
              </button>
            </form>

            <button type="click" onClick={editFormState}>Cancel</button>

          </div>


        ) :
          (
            <div>
              <p1> My Username: {data.me.username} </p1>
              <br></br>
              <p1> My Email: {data.me.email} </p1>
              <br></br>
              <p1> My City,State: {data.me.city} </p1>
              <br></br>
              <p1> My Phone Number: {data.me.phoneNumber} </p1>
              <br></br>
              <p1> My Bio: {data.me.bio} </p1>
              <br></br>
              <br></br>
              <button type="click" onClick={editFormState}>Update</button>
            </div>

          )}

      </div>




      <div class="col-9 container-fluid mt-5 border border-5 rounded">
        <h1>Pet Info</h1>
        <p>
          Jean shorts JOMO YOLO VHS marfa ugh, thundercats scenester cliche tote bag unicorn fit occupy. Leggings fashion axe cloud bread, chia green juice copper mug hashtag cardigan taxidermy meditation hell of. Shabby chic disrupt vaporware, hell of paleo you probably haven't heard of them pinterest migas. Meggings franzen hexagon fam marfa. You probably haven't heard of them taiyaki artisan banh mi echo park. Gorpcore hammock enamel pin plaid trust fund venmo. Activated charcoal YOLO gastropub tilde marfa.

          Trust fund readymade tousled, af hexagon kombucha shoreditch cray adaptogen tote bag tumblr whatever DIY. Vegan trust fund leggings hammock jawn fam cupping, tote bag etsy PBR&B health goth pug raclette tumblr. Literally bruh health goth green juice portland bicycle rights, palo santo tumblr prism. Same etsy meditation wolf.

          Banh mi la croix lumbersexual DIY paleo, mustache dreamcatcher kitsch salvia. Four loko put a bird on it fashion axe kogi VHS. Selfies raclette poutine hot chicken. Hashtag fanny pack mustache vibecession. Chillwave four loko lyft cred PBR&B, activated charcoal mlkshk lo-fi blog cloud bread pinterest.
        </p>
      </div>

    </div>
  )
}
