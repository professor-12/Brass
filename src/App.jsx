import React from 'react'
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import  Root  from './components/Root/Root'
const App = () => {

  const Route = createBrowserRouter([
    {
      path: '', element:<Root/>, children: [
      {index:true,element:<Home/> ,}
    ]}
  ])
  return (
    <div className='bg-black  text-white'>
      <RouterProvider router={Route}/>
    </div>
  )
}

export default App