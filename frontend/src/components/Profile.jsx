import React, { useEffect, useState } from "react";
import { useAuth } from "./Auth";
import axios from "axios";

const Profile = () => {
  const auth = useAuth();
  const [serverData, setServerData] = useState([]);
  const [userData, setUserData] = useState(null);
  const [updateData, setUpdateData] = useState({});
  const [loan, setLoan] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:3000/users')
      .then((res) => setServerData(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const fetchId = serverData.find((X) => X.id === auth.userId);

    if (fetchId) {
      setUserData(fetchId);
    }
  }, [serverData, auth.userId]);

  const handlelogOut = () => {
    auth.logout();
  };

  const handleLoadRequest = (e) => {
    e.preventDefault();
    const mergeUpdateData = { ...userData, ...updateData};
      axios
        .put(`http://localhost:3000/users/${userData.id}`, mergeUpdateData)
        .then((res) => res.data)
        .catch((err) => console.log(err));

      alert("updated successfully");

      console.log(mergeUpdateData);
    }
  

  const handleLoanChanges = (e) => {
    e.preventDefault();
    setUpdateData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLoan = () => {
    setLoan(!loan);
  };
  return (
    <div>
      <button onClick={handleLoan}>Book services</button>

      {loan && (
        <div className='Login__container'>
          <form className='signUp__box' onSubmit={handleLoadRequest}>
            <input
              type='text'
              name='name'
              className='input'
              value={userData.name}
              readOnly={true}
              disabled={true}
            />

            <input
              type='email'
              name='email'
              className='input'
              value={userData.email}
              readOnly={true}
              disabled={true}
            />

            <input
              type='number'
              name='number'
              className='input'
              value={userData.number}
              readOnly={true}
              disabled={true}
            />

            <input
              type='text'
              name='city'
              className='input'
              value={userData.city}
              readOnly={true}
              disabled={true}
            />
             <select name="service" onChange={handleLoanChanges} >
            <option value="Project & Planning">Project & Planning</option>
            <option value="Architectural Modelling">Architectural Modelling</option>
            <option value="Foundation and Structural Work">Foundation and Structural Work</option>
            <option value="Consulting & Advisory">Consulting & Advisory</option>
        </select>

           
            <textarea
              name='description'
              className='input'
              placeholder='Which Purpose Do you need the  service for...'
              onChange={handleLoanChanges}
              required={true}
            />

            <button className='button' type='submit'>
              service Request
            </button>
          </form>
        </div>
      )}
      <button onClick={handlelogOut}>Log Out</button>
    </div>
  );
};

export default Profile;