import React, { useEffect} from 'react';
import './UserCard'
import { Link } from 'react-router-dom';

const UserCard = ({user}) => {
  // useEffect(()=>{
  //   fetch('./users.json').then(res=>res.json()).then(data=>console.log(data))
  // },[])
  const {name,image,email,id} = user || {};
  console.log(user)
  return (
    <>
      {/*  */}
      <tr className='bg-slate-400 table-data mx-4 w-full'>
        <td>
          <img
            src={image}
            className=' md:mx-4 lg:mx-8    w-24  object-contain rounded-full'
            alt='user-image'
          />
        </td>{' '}
        <td>
          {' '}
          <h4 className='mx-2 md:mx-4 lg:mx-8 px-2 my-2 md:my-4 lg:my-8 bg-slate-200 py-4 rounded-lg md:font-semibold   '>
            {name}
          </h4>{' '}
        </td>
        <td>
          {' '}
          <h4 className='mx-2 md:mx-4 lg:mx-8 px-2 my-2 md:my-4 lg:my-8 bg-slate-200 py-4 rounded-lg md:font-semibold '>
            {email}
          </h4>
        </td>
        <td>
          <Link to={`user/${id}`} className="bg-sky-400 hover:bg-sky-600 px-4 py-2 md:px-6 md:py-4 rounded-lg mx-4">Details</Link>
        </td>
      </tr>
      {/*  */}
    </>
  );
};

export default UserCard;