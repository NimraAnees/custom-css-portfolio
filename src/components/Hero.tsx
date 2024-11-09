import React from 'react'
import Navbar from './Navbar'

export const Hero = () => {
  return (
    <div id='hero' className ='min-h-screen bg-no-repeat bg-[url(/banner_bg.png)]  bg-cover' style={{backgroundSize: "35%", backgroundPosition: "left 100px top 100px"}}>
       <Navbar/>
       <div className='container grid lg:grid-cols-2 h-[clac(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[120px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p data-aos="zoom-in-up">I'm</p>
            <p data-aos="zoom-in-up">Nimra</p>
            <p data-aos="zoom-in-up">Naz</p>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Hero