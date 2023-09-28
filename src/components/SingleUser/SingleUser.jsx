import { useLoaderData, Link } from 'react-router-dom';
import './SingleUser.css'

const SingleUser = () => {
  const getUser = useLoaderData();
  // console.log(getUser);
  const {name, image, email, age, number, info} = getUser || {};
  
  return (
    <>
      {getUser && (
        <div className='bg-slate-200 p-2 md:p-8 lg:p-16 '>
          <div>
            <Link to='/' className='bg-green-400 px-3 py-2 rounded-lg '>
              Home
            </Link>
          </div>
          <div className=''>
            <img
              className='mx-auto w-48 md:w-2/6 lg:3/6  border-8 border-green-300 rounded-lg'
              src={image}
              alt=''
            />
          </div>
          <div className='my-2 md:my-4  border-4 border-sky-500 rounded-lg p-2 md:p-6 '>
            <div className='flex flex-col md:flex-row md:gap-4 justify-around'>
              <div className='my-1 md:my-4 lg:my-6'>
                <h3 className=' md:text-4xl name-style'>Name: {name}</h3>
                <h3 className=' md:text-4xl name-style'>Email: {email}</h3>
              </div>
              <div className='my-1 md:my-4 lg:my-6'>
                <h3 className=' md:text-4xl name-style'>Age: {age}</h3>
                <h3 className=' md:text-4xl name-style'>Cell: {number}</h3>
              </div>
            </div>
            <div>
              <p>{info}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleUser;
