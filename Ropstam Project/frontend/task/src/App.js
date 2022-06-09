import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Screens/Signup";
import SignIn from "./Screens/SignIn";
import Cars from "./Screens/Cars";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<Cars />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
