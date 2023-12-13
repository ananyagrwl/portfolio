import React from 'react'
import "./navbar.scss"
import { motion } from "framer-motion"
import Sidebar from '../sidebar/Sidebar'

export const Navbar = () => {
  return (
    <div className='navbar'>
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>Ananya Agrawal</motion.span>
        <div className="social">
          <a href="https://github.com/ananyagrwl" target='blank'><img src="/assets/github.png" alt="" /></a>
          <a href="https://www.linkedin.com/in/ananya-agrawal-65b1b7252/" target='blank'><img src="/assets/linkedin.png" alt="" /></a>
          <a href="https://www.codingninjas.com/studio/profile/Ananya88" target='blank'><img src="/assets/cn2.png" alt="" /></a>
          <a href="https://leetcode.com/Ananya88/" target='blank'><img src="/assets/leetcode.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}
