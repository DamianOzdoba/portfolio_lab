import {Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/logowanie" element={<Login/>}/>
          <Route path="/rejestracja" element={<Register/>}/>
          <Route path="/wylogowano" element={<Logout/>}/>
        </Routes>
      </>
  );
}

export default App;
