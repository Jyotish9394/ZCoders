import React from 'react'
import NavBar from '../Components/Navbar';
import Dashboard from '../Components/Dashboard';
import Bar from '../Components/Bar';
import Progress from '../Components/Progress';
export default function Home() {
  return (
    <div>
      <NavBar/>
      <Bar/>
      <Dashboard/>
      <Progress/>
    </div>
  )
}
