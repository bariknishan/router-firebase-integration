
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';


function App() {
  return (
    <div className="App">
      <h1>Hello Router</h1>

      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products' element={<Home></Home>}></Route>
        <Route path='/orders' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
