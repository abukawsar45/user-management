import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './../../redux/features/users/usersSlice';
import UserCard from './../UserCard/UserCard';

const Home = () => {
  const { isLoading, users, error } = useSelector((state) => state.usersSlice);
  // console.log(isLoading, users, error);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchUsers())
  },[])

  return (
    <>
      <div>
        {/* <UserCard/> */}
        {isLoading && <h5>Loading</h5>}
      </div>
      <div>{error && <h5>{error}</h5>}</div>
      {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 lg:gap-8'> */}
      {users && (<div className='w-full'>
        <table className='table overflow-auto'>
          {/* head */}
          <thead>
            <tr className='  overflow: scroll-auto'>
              <th className='md:w-3/12'>Photo</th>
              <th className='md:w-3/12'>Name</th>
              <th className='md:w-3/12'>Email</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => <UserCard user={user} key={user.id} />)}
          </tbody>
        </table>
      </div>)}
    </>
  );
};

export default Home;