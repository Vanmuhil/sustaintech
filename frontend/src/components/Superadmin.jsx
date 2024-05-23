import React, { useEffect, useState } from "react";
import axios from "axios";

const Superadmin = () => {
  const url = "http://localhost:3000/users";
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((res) =>  setUserData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='card__container'>
      {userData.map((x) => (
        <>
          <div key={x.id} className='card userCard'>
              <div className='image'>
              <img
                width='94'
                height='94'
                src='https://img.icons8.com/3d-fluency/94/guest-male--v1.png'
                alt='guest-male--v1'
              />
            </div>
            <div className='data'>
              <h2>{x.name}</h2>
              <p>{x.city}</p>
              <p>{x.number}</p>
              <p>{x.email}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Superadmin;