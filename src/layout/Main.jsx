import { Outlet } from 'react-router-dom';


const Main = () => {
  
  return (
    <div
      className='mx-auto max-w-screen-2xl'>
      
      <Outlet />
      
    </div>
  );
};

export default Main;
