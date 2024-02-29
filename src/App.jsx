//import { useState } from 'react'
//import './App.css'
// const [count, setCount] = useState(0)
import Header from "./components/header";
import Footer from "./components/footer";
import { Route, Routes } from 'React-router-dom';
import Home from './pages/home';
import About from "./pages/about";
import CreateYourPlan from "./pages/create";

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/create" element={<CreateYourPlan />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
