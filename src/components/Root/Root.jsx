import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../NavigationBar/Header'
const Root = () => {
      return (
            <div className='container px-2 bg-black mx-auto xl:w-[80%]'>
                  <Header />
                  <div className=''><Outlet/></div>
            </div>
      )
}

export default Root