import classes from './App.module.css';
import NavigationBar from './Header/NavigationBar/NavigationBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Pages/LoginPage/Login';
import Home from './Pages/Home/Home'
import { useSelector } from 'react-redux';
import TickGame from './Pages/Game/TicTacToe';
import Game from './Pages/Game/TTT';
import ProductList from './Header/ProductList/ProductList';

function App() {

  const isAuthenticate = useSelector((store) => store.authenticate.isAuthenticate);
  console.log("isAuthenticate = ", isAuthenticate)


  return (
    <div className={classes.App}>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route exact path='/' element={ <Login />}/>
          <Route path='/login' element={ <Login />}/>
          <Route path='/product-list' element={ <ProductList />}/>
          <Route path='/tic-tac-toe-game' element={ <TickGame />} />
          <Route path='/tic-practice-game' element={ <Game />} />
          

          {isAuthenticate && <Route exact path='/home' element={ <Home />} />}
          <Route path='*' element={ <Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
