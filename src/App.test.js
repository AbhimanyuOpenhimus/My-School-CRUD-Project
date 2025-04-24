import React from 'react'
import SchoolNavbar from './components/SchoolNavbar'
import { Outlet } from 'react-router-dom'
import SchoolFooter from './components/SchoolFooter'
import NotFoundPage from './components/NotFoundPage'

function Apptest() {
  return (
    <>
    <SchoolNavbar/>
    <Outlet/>
    
    </>
  )
}

export default Apptest