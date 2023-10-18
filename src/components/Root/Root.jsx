import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../NavigationBar/Header'
const Root = () => {
      return (
            <div className='px-0'>
                  <Header />
                  <div className=''><Outlet/></div>
            </div>
      )
}

export default Root