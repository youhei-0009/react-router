import { Routes, Route } from "react-router-dom";
import { Home } from '../Home';
import { Page1 } from '../Page1';
import { Page2 } from '../Page2';
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";
import { Posts } from "../Posts";
import { Post } from "../Post";
import { page1Routes } from "./Page1Routes";

export const Router = () => {
    return (
        <Routes>
        <Route exact path="/" element={<Home />} />

        {page1Routes.map((route) => (
            <Route key={route.path} exact={route.exact} path={`/page1${route.path}`} element={route.children} />
        ))}
        {/*
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page1/detailA" element={<Page1DetailA />} />
        <Route path="/page1/detailB" element={<Page1DetailB />} />
        */}
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

    )
}