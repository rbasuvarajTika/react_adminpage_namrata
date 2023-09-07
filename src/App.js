import './App.css';
import LoginPage from './Components/LoginPage';
import PagingTabs from './Components/PagingTabs';
import AdminPage
 from './Components/AdminPage';
function App() {
  return (
    <div className="App">
      {/* <LoginPage/> */}
      <PagingTabs/>
      <AdminPage/>
    </div>
  );
}

export default App;
