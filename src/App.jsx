import { useState } from 'react'
import { Navbar } from './Component/Navbar'
import { LandingPage } from './Component/LandingPage'
import { Marquee } from './Component/Marquee'
import { About } from './Component/About'
import { Eye } from './Component/Eye'
import { Featured } from './Component/Featured'
import { Box } from './Component/Box'
import { Contect } from './Component/Contect'
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const [count, setCount] = useState(0)
  const locomotiveScroll = new LocomotiveScroll();
  return (
   <div className=' w-full min-h-screen text-white bg-zinc-900' >
   <Navbar/>
   <LandingPage/>
   <Marquee/>
   <About/>
   <Eye/>
   <Featured/>
   <Box/>
   <Contect/>
   </div>
  )
}

export default App
