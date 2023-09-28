import { createBrowserRouter } from 'react-router-dom';
import Main from './../layout/Main';
import ErrorPage from './../components/ErrorPage/ErrorPage';
import Home from './../components/Home/Home';
import SingleUser from './../components/SingleUser/SingleUser';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'user/:id',
        element: <SingleUser/>,
        loader: ({params})=> fetch('./users.json').then(res=>res.json()).then(data=>{
          // console.log(data)
          const specificUser = data.find((user)=>user.id===params.id);
          // console.log(specificUser);
          return specificUser;
        })

      }
    ],
  },
]);

export default router;
