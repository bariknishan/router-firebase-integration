
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import Orders from './Components/Orders/Orders';
import Products from './Components/Products/Products';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';


function App() {

  return (
    <div className="App">
      <h1>Hello Router</h1>

      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>

        <Route path='/products' element={<RequireAuth>
           <Products></Products>

        </RequireAuth>}>

        </Route>

        <Route path='/orders' element={<RequireAuth>

          <Orders></Orders>
        </RequireAuth>}></Route>

        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
