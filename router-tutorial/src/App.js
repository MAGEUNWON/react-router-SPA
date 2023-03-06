import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";


const App = () => {
  return (
    <Routes>
      <Route element = {<Layout />}>
        {/* <Route path="/" element={<Home />} /> */}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="profiles/:username" element={<Profile />} />
        <Route path="Articles" element={<Articles />} />
        {/* <Route path="Articles/:id" element={<Article />} /> */}
        <Route path="articles" element={<Articles />}>
          <Route path=":id" element={<Article />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      
    </Routes>
  );
};

export default App;
