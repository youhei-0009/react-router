import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import './App.css';
import { Home } from './Home';
import { Page1 } from './Page1';
import { Page2 } from './Page2';
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";
import { Posts } from "./Posts";
import { Post } from "./Post";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Link to="/">Home</Link>
          <br />
          <Link to="/page1">Page1</Link>
          <br />
          <Link to="/page2">Page2</Link>
          <br />
          <Link to="/posts">Posts</Link>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page1/detailA" element={<Page1DetailA />} />
          <Route path="/page1/detailB" element={<Page1DetailB />} />
          {/*これは使えない。
          <Route path="/page1" 
            render={() => (
              <Routes>
                <Route exact path="page1"><Page1 /></Route>
                <Route path="page1/detailA"><Page1DetailA /></Route>
                <Route path="page1/detailB"><Page1DetailB /></Route>
              </Routes>
            )}
          />
          */}
          <Route path="/page2" element={<Page2 />} />
          <Route path="/posts" element={<Posts />} >
            <Route path=":postId" element={<Post />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
