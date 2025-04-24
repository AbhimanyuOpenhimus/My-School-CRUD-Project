import React, { Children } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Apptest from "./App.test";
import HeroSection from "./components/HeroSection";
import CreateStudent from "./components/CreateStudent";
import StudentList from "./components/StudentList";
import EditStudent from "./components/EditStudent"
import NotFoundPage from "./components/NotFoundPage";



function App() {
  const router = createBrowserRouter([
    {
      path:"/",
       element:<Apptest/>,
       children:[
        {
          path:"/",
          element:<HeroSection/>
        },

        {
          path:"/home",
          element:<HeroSection/>
        },

        {
          path:"/create-student",
          element:<CreateStudent/>
        },

        {
          path:"/student-list",
          element:<StudentList/>
        },

        {
          path:"/edit-student/:id",
          element:<EditStudent/>
        },
        {
          path:"/notfound",
          element:<NotFoundPage/>
        },


       ]
     }]);
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
