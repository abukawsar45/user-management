import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='my-4'>
      <Link
        to='/'
        className='my-12  mx-4 bg-pink-400 hover:bg-pink-600 px-4 py-2 md:px-6 md:py-4 rounded-lg '
      >
        Home
      </Link>
      <div className='flex justify-center'>
        <img
          src='https://i.ibb.co/1ZYVdV8/Taras-Migulko.gif'
          alt=''
          className='w-9/12 md:h-[500px] rounded-lg'
        />
      </div>
    </div>
  );
};

export default ErrorPage;
