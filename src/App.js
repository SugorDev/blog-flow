import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages-component/Home";
import Explore from './components/pages-component/Explore';
import BlogPost from './components/pages-component/BlogPost';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/blog-flow' element={<Home />}/>
          <Route path='/explore' element={<Explore />}/>
          <Route path='/blog-post' element={<BlogPost />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
