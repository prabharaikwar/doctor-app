import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/register/Register';
import Login from './pages/login/Login';
<<<<<<< Updated upstream
import { SIGNUP, LOGIN } from "./helper/PageRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path={SIGNUP} element={<Register />} />
          <Route path={LOGIN} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
=======
import {SIGNUP,LOGIN} from "./helper/PageRoute";

function App() {
  return (
<>
<BrowserRouter>
<Routes>
<Route index element={<Home />} />
<Route path={SIGNUP} element={<Register />} />
<Route path={LOGIN} element={<Login />} />
</Routes>
</BrowserRouter>
</>
>>>>>>> Stashed changes
  );
}

export default App;
