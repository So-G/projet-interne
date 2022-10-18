import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import NewProject from './components/NewProject'
import TestComp from './components/TestComp'
function App() {
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/test" element={<TestComp />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
