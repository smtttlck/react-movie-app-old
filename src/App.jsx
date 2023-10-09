import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/home/Home'
import List from './pages/list/List'
import Detail from './pages/detail/Detail'
import People from './pages/people/People'
import Person from './pages/person/Person'
import SearchList from './pages/searchList/SearchList'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/list/:category' element={<List />} />
        <Route path='/searchList/:info' element={<SearchList />} />
        <Route path='/detail/:info' element={<Detail />} />
        <Route path='/people/:page' element={<People />} />
        <Route path='/person/:actorId' element={<Person />} />
      </Routes>
    </Router>
  )
}

export default App
