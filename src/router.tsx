import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/home';
import Blog from "./pages/blogs/blog";
import BlogList from "./pages/blogs/blogList";
import Layout from "./pages/layout";

const Router = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='blog' element={<BlogList />} />
                    <Route path='blog/:id' element={<Blog />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
