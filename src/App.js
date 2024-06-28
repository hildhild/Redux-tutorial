import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Dashboard";
import Profile from "./pages/Profile";
import DefaultLayout from "./components/Layouts/DefaultLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout><Home></Home></DefaultLayout>}/>
        <Route path="/profile" element={<DefaultLayout><Profile></Profile></DefaultLayout>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
