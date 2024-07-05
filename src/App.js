import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import DefaultLayout from "./components/Layouts/DefaultLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout><Dashboard></Dashboard></DefaultLayout>}/>
        <Route path="/profile" element={<DefaultLayout><Profile></Profile></DefaultLayout>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
