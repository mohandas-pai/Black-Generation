import React from 'react'
import styles from '../styles'
import { arrowUp } from '../assets'


const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[110px] h-[110px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full `}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
            <span className='text-gradient'><a href="https://connect2india.com/Black-Generation/6056171" target="_blank">Get </a></span>
          </p>
          <a href="https://connect2india.com/Black-Generation/6056171" target="_blank"><img src={arrowUp} className='w-[23px] h-[23px] object-contain' alt="Arrow"/></a>
        </div>

        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-gradient'><a href="https://connect2india.com/Black-Generation/6056171" target="_blank">Started</a>
          </span>
        </p>
      </div>
    </div>
  )
}

export default GetStarted