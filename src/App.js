import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from './components/pages-component/AboutUs';
import Blog from './components/pages-component/Blog';
import Home from "./components/pages-component/Home";
import Contacts from './components/pages-component/Contacts';
import Explore from './components/pages-component/Explore';
import CreatePost from './components/pages-component/user/CreatePost';
import Login from './components/pages-component/user/Login';
import UserProfile from './components/pages-component/user/Profile';
import ProfileSettings from './components/pages-component/user/ProfileSettings';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog-flow' element={<Home />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contacts' element={<Contacts />} />
          {/* User Routes */}
          <Route path='/login' element={<Login />} />
          <Route path='/blog-flow/user-profile' element={<UserProfile />} />
          <Route path='/user-settings' element={<ProfileSettings />} />
          <Route path='/create-post' element={<CreatePost />} />

          <Route
            path="/blog-flow/:author/:title"
            element={
              <Blog
                blogTitle="Sample Blog Title"
                blogThumbnail="https://javelina.co/wp-content/uploads/2017/03/bigstock-Blog-Blogging-Homepage-Social-134171063-3.jpg"
                blogContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                blogAuthorName="John Doe"
                blogAuthorImg="https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              />}
          />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
