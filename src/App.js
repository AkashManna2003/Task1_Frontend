import { Routes, Route, useNavigate} from "react-router-dom";
 import Login from "./Login";
 import Register from "./Register";
 import CLogin from "./CLogin";
 import CRegister from "./CRegister";
import Homepage from "./Homepage";
import Ownerform from "./Ownerform";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/business/login" element={<Login />} />
        <Route path="/business/register" element={<Register />} />
        <Route path="/customer/login" element={<CLogin />} />
        <Route path="/customer/register" element={<CRegister />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/ft" element={<Ownerform />} />
      </Routes>
    </div>
  );
}

export default App;
