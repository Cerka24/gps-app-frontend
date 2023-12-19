import './App.css';
import Landing from "./components/Landing";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing/>
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
       path: "/logIn",
       element: <Login/>
    }
])

function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
