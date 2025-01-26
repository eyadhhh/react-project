import React from 'react'
import {Outlet} from 'react-router-dom'
import NavigationBar from '../components/NavigationBar'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/ReactToastify.css'

const MainLayout = () => {
  return (
    <div>
      <ToastContainer/>
      <NavigationBar/>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
