import React from 'react'
import Header from '../Components/Layout/Header'
import LeftSidebar from '../Components/Layout/Leftsidebar'
import { Outlet } from 'react-router-dom'
import RightSidebar from '../Components/Layout/Rightsidebar'

const MainLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <LeftSidebar/>
      <RightSidebar/>
    </div>
  )
}

export default MainLayout
