import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/home/home.tsx'
import Post from './pages/post/post.tsx'
import Search from './pages/search/search.tsx'
import SearchResult from './pages/searchResult/searchResult.tsx'
import User from './pages/user/user.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='/home' element={<Home />} />
        <Route path='/post/:postId' element={<Post />} />
        <Route path='/search' element={<Search />} />
        <Route path='/searchResult' element={<SearchResult />} />
        <Route path='/user/:userId' element={<User />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
