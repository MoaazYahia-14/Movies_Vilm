import './App.css';
import IntroPage from './components/IntroPage/IntroPage';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { Route, Routes } from 'react-router';

function App() {
  return (<>
  <Routes>
      <Route path='/' element={ <IntroPage/>} />
      <Route path='/home' element={ <Home/>} />
      <Route path='/login' element={ <Login/>} />
      <Route path='/register' element={ <Register/>} />
    </Routes>
  </>
  );
}

export default App;
