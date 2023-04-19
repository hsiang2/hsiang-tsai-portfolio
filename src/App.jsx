import 'antd/dist/reset.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import DetailPage from './pages/DetailPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/id/:projectId' element={<DetailPage />} />
        {/* <Route path='products'>
          <Route path='category/:categoryName' element={<HomePage />} />
          <Route path='id/:projectId' element={<HomePage />} />
        </Route> */}
        <Route path='about' element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
