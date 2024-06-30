import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import { Details } from './pages/Details';
import Login from './pages/Login';
import Nopage from './pages/Nopage';
import Appointments from './pages/Appointments';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="details" element={<Details />} />
          <Route path="appointment" element={<Appointments />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
