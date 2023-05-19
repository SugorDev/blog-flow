import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages-component/Home";
import Explore from './components/pages-component/Explore';
import CreatePost from './components/pages-component/CreatePost';

import Login from './components/pages-component/user/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/blog-flow' element={<Home />}/>
          <Route path='/explore' element={<Explore />}/>
          <Route path='/create-post' element={<CreatePost />}/>

          {/* User Routes */}
          <Route path='/login' element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
