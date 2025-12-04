import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/home";
import Contact from "./components/contact";
import HomePosts from "./components/home";
import PostComponent from "./components/posts";
import Header from "./components/header";
import MainLayout from "./components/layouts/mainLayout";
const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePosts />} />
          <Route path="contact" element={<Contact />} />
          <Route path="articles/:id" element={<PostComponent />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default Router;
