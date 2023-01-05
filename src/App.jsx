import { useState } from 'react';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";



import Login from './Pages/login/Login';
import Register from './Pages/register/Register';
import Landing from './Pages/Landing/Landing'
import Header from './component/landingHeader/Header';
import Course from './Pages/allCourse/Course'
import NextSeminer from './Pages/seminer/NextSeminer';
import Teachers from './Pages/teacher/Teachers';
import StudentProject from './Pages/studentProject/StudentProject';
import Products from './Pages/products/Products';
import DevTools from './Pages/devTools/DevTools';
import StudentDashboard from './Pages/studentHome/StudentDashboard';
import ClientHome from './Pages/clientHome/ClientHome';
import ModaretorDashboard from './Pages/modaretorDashboard/ModaretorDashboard';
import AdminDashboard from './Pages/adminDashboard/AdminDashboard';
import { useContext } from 'react';
import { LanguageContaxt } from './context/LanguageContext';
import SingleCourse from './Pages/singleCourse/SingleCourse';
import Footer from './component/footer/Footer'



const App = () => {

  const {IsBangla} = useContext(LanguageContaxt);
  console.log(IsBangla);

  const [uesrRole, setUserRole] = useState(null);
  const [userIsLogin, setUserIsLogin] = useState(null);
  const [userRoles, setUserRoles] = useState({
    student: null,
    teacher: null,
    modaretor: null,
    admin: null,
  });


  //router Protector
  const ProtectedRoute = ({children})=>{
    if(uesrRole){
      return <Navigate to='/login'/>
    }
    return children;
  }
  const Layout = ()=>{
    return(
      <div>
        <Header/>
        <div style={{ display: "flex"}}>
            <Outlet/>
        </div>
        {/* <Footer/> */}
      </div>
    )
  }
  //all router
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout/>
        </ProtectedRoute>
      ),
      children : [
       {
        path: '/',
        element: <Landing/>
       }
       ,{
        path: '/Course/:type',
        element: <Course/>
       },{
        path: '/single/:status/:id',
        element: <SingleCourse/>
       }
       ,{
        path: '/seminer',
        element: <NextSeminer/>
       }
       ,{
        path: '/teachers',
        element: <Teachers/>
       }
       ,{
        path: '/studentProject',
        element: <StudentProject/>
       },{
        path: '/devTools',
        element: <DevTools/>
       }
       ,{
        path: '/product',
        element: <Products/>
       }
       ,{
        path: '/dashboard',
        element: userRoles.student ? <StudentDashboard/> : <ClientHome/> 
        && userRoles.modaretor ? <ModaretorDashboard/> : <ClientHome/>
        && userRoles.admin ? <AdminDashboard/> : <ClientHome/>
       }
       
       
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>

    
  )

    
}


export default App;