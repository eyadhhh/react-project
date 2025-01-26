import React from 'react'
import {Outlet} from 'react-router-dom'
import NavigationBar from '../components/NavigationBar'

const MainLayout = () => {
  return (
    <div>
      <NavigationBar/>
      <main>
        <Outlet />
      </main>
      footer
    </div>
  )
}

export default MainLayout
