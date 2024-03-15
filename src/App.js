import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/register/Register';
import Login from './pages/login/Login';

function App() {
  return (
<>
<BrowserRouter>
{/* <Home/> */}
<Routes>
<Route index element={<Home />} />
<Route path="/register" element={<Register />} />
<Route path="/login" element={<Login />} />
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
