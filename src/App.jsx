import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
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
          element:<Home/>
        }
      ]
    },
    {
      path:"/login",
      element:<Login/>
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
