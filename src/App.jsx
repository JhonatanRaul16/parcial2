import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Private from "./Routes/Private";
import Public from "./Routes/Public";
function App() {
  const Layout= () =>{
    return(
      <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Private><Home/></Private>
        }
      ]
    },
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/asistencia",
          element:<Private><Home/></Private>
        }
      ]
    },
    {
      path:"/login",
      element:<Public><Login/></Public>
    }
  ])
  return (
    <div className="app">
      <div>
        <RouterProvider router={router}/>
      </div>
    </div>
  )
}

export default App
