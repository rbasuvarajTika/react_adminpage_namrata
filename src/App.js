import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from './Components/LoginPage';
import AdminPage from './Components/AdminPage';
import CreateNewUser from './Components/CreateNewUser';
import EditUser from './Components/EditUser';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage/>,
    },
    {
      path: "/createnewuser",
      element: <CreateNewUser/>,
    },
    {
      path: "/adminpage",
      element: <AdminPage/>,
    },
    {
      path: "/edituser",
      element: <EditUser/>,
    },
    
  
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
