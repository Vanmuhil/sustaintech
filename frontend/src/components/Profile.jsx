import React, { useEffect, useState } from "react";
import { useAuth } from "./Auth";
import axios from "axios";

const Profile = () => {
  
  const auth = useAuth();
  const [serverData, setServerData] = useState([]);
  const [userData, setUserData] = useState(null);
  const [updateData, setUpdateData] = useState();
  const [loan, setLoan] = useState(false);
  const cities = ["Kovai", "Chennai", "Madurai", "Salem", "Thirupur"];
  const id = auth.userId;
    

  useEffect(() => {
    axios
       .get(`http://localhost:3001/auth/usersdetail/${id}`)
      .then((res) => setServerData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   const fetchId = serverData.find((X) => X.id === auth.userId);

  //   if (fetchId) {
  //     setUserData(fetchId);
  //   }
  // }, [serverData, auth.userId]);
 console.log(serverData);

  const handlelogOut = () => {
    auth.logout();
  };

  const handleLoadRequest = (e) => {
    e.preventDefault();
      axios
        .post('​http://localhost:3001/auth/service',{updateData})
        .then((res) => res.data)
        .catch((err) => console.log(err));

      alert("updated successfully");
    }
  

  const handleLoanChanges = (e) => {
    e.preventDefault();
    setUpdateData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    
  };
  console.log(updateData);
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
              onChange={handleLoanChanges}
              placeholder="enter your Name"
            />

          

            <input
              type='number'
              name='number'
              className='input'
              onChange={handleLoanChanges}
              placeholder="enter your Number"
            />

<label htmlFor='city'>Select a city:</label>
        <select
        type="text"
          className='input select'
          name='city'
          id='city'
          onChange={handleLoanChanges}
          required
        >
          <option value=''>Select a city</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
             <select name="service" type="text" onChange={handleLoanChanges} >
             <option value="">select</option>
            <option value="Project & Planning">Project & Planning</option>
            <option value="Architectural Modelling">Architectural Modelling</option>
            <option value="Foundation and Structural Work">Foundation and Structural Work</option>
            <option value="Consulting & Advisory">Consulting & Advisory</option>
        </select>

           
            <textarea
              name='description'
              type="text"
              className='input'
              placeholder='Which Purpose Do you need the  service for...'
              onChange={handleLoanChanges}
             
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