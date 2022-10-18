import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
// import ProjectList from './components/ProjectList/ProjectList'
import NewProject from './components/NewProject'

function App() {
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          {/* <Route path="/list" element={<ProjectList />} /> */}
          <Route path="/list" element={<NewProject />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
