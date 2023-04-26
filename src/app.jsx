import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { setCategories } from "./redux/categorySlice"
import Footer from "./component/footer"
import Header from "./component/header"
import useApi from "./hooks/useApi"
import LoginPage from "./pages/auth/login-page"
import RegisterPage from "./pages/auth/register-page"
import MainPage from "./pages/main-page"
import CategoryPage from "./pages/category-page"
import CategoryDetailsPage from "./pages/category-details-page"
import BlogPage from "./pages/blog-page"
import { setBlogs } from "./redux/blogSlice"
import BlogDetailsPage from "./pages/blog-details-page"


function App() {
  const api = useApi()
  const dispatch = useDispatch()
  const { categoryState } = useSelector(state => state)

  useEffect(() => {

    async function executeCategories() {
      const response = await api
        .get(
          "https://api.adoptez1artisan.com/public/categories/listMainCategories"
        )
      dispatch(setCategories(response.data.data))
    }
    executeCategories()

    async function executeBlogs() {
      const response = await api
        .get(
          "https://api.adoptez1artisan.com/public/blogs/list?status=active&length=6"
        )
      dispatch(setBlogs(response.data.data))
    }
    executeBlogs()

  }, [])


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/auth" />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="category/:categoryId" element={<CategoryDetailsPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:blogId" element={<BlogDetailsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App
