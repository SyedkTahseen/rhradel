import React from 'react'

const Head = () => {
  return (
    <div className='fixed top-0 left-0 w-full bg-blue-800 h-[65px] z-50 flex justify-between items-center'> 
    <span className='text-amber-50 font-tek ml-45'>RH RADEL</span>
        <ul className='text-amber-50 flex items-center mr-30 justify-between gap-10 font-items'>
            <li><a>HOME</a></li>
            <li><a>COURSES</a></li>
            <li><a>FLASHCARDS</a></li>
            <div className='flex gap-1.5'>
            <button className='bg-amber-300 rounded-full text-amber-950 px-5 py-1'>LOGIN</button>
            <button className='bg-amber-300 rounded-full px-5 py-1 text-amber-950'>SIGN-UP</button>
            </div>
        </ul>
    </div>
  )
}

export default Head