import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Head from './Head'
import Content from './Content'
import Content2 from './Content2'
import Footer from './Footer'





function App() {
  

  return (
   <div className='w-screen h-120 bg-white overflow-x-hidden overflow-y-auto '>
     
     <header>
      <Head />
     </header>
     
     <main className='bg-amber-300 '>
      <Content />
     </main>

     <main className=''>
      <Content2 />
     </main>
     
     <footer>
      <Footer />
     </footer>

   </div>  
  )
}

export default App
