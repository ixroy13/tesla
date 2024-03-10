import React from 'react'
import Content from '../Content/Content'
import Navbar from '../Navbar/Navbar'
import "./Screen.css"

export default function () {
  return (
    <div className='screen flex'>
        <div className="rotate">
            <p>Please rotate your screen horizontally</p>
        </div>
        <Content />
        <Navbar />
    </div>
  )
}
