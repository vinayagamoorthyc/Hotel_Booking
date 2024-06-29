import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminHome from './Admin/AdminHome';
import Home from './Home/Home';
import ShowPage from './pages/ShowPage';
import Login from './Authentication/Login';
import SignUp from './Authentication/SignUp';

function App() {
  return (
    <Routes>
      <Route path='/admin' element={<AdminHome/>} />
      <Route path='/home' element={<Home/>}/>
      <Route path='/show' element={<ShowPage/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
  );
}

export default App;
