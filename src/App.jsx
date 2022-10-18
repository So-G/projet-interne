import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import NewProject from './components/NewProject'

function App() {
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
