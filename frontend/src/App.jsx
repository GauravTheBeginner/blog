
import './App.css'
import BlogList from './components/BlogList'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Add from './components/Add';
import FullBlog from './components/FullBlog';
import Update from './components/Update';
function App() {


  return (
  <main className='boder-2 border-black'>
  <Router>
    <Routes>
      <Route path='/' element={<BlogList/>}/>
      <Route path='/AddingBlogs' element={<Add/>}/>
      <Route path='/fullblog/:id' element={<FullBlog />} />
      <Route path='/update/:id' element={<Update />} />
    </Routes>
  </Router>

  </main>
  )
}

export default App
