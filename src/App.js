import './App.css';
import NavigationBar from './Header/NavigationBar/NavigationBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Pages/LoginPage/Login';
import Home from './Pages/Home/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Login} />
          <Route path='/login' Component={Login} />
          <Route exact path='/home' Component={Home} />
          <Route path='*' Component={Home} />
        </Routes>
      </BrowserRouter>
      <NavigationBar />
    </div>
  );
}

export default App;
