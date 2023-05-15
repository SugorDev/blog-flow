import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages-component/Home.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/blog-flow' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
