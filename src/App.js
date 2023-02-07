import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import About from './components/About/About'
// import Applications from './components/Applications'
// import Commitees from './components/Commitees'
import Home from './components/Home'
import About from './components/About/About'
import Applications from './components/Applications'
import Commitees from './components/Commitees'
import Secretarait from './components/Secretariat'
import TechTeam from './components/TechTeam'
import ErrorPage from './components/404'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="applications" element={<Applications />} />
        <Route path="commitees" element={<Commitees />} />
        <Route path="secretarait" element={<Secretarait />} />
        <Route path="techteam" element={<TechTeam />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
