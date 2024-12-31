import React from 'react'
import TestSvg from '@/assets/test.svg'
import Test1Svg from '@/assets/test1.svg'
import { ABOUT_PAGE } from '../constants'

export const About: React.FC = () => {
  return (
    <div
      id={ABOUT_PAGE}
      className='element-page relative h-auto md:h-screen w-screen bg-about dark:bg-about-dark p-[80px_10vw_0_10vw] md:pt-[100px]'
    >
      <div className='w-full text-[26px] text-center font-jost uppercase tracking-wider font-bold md:text-[44px] transition-all duration-500 dark:text-white'>
        About
      </div>
      <div className='w-full flex justify-center items-center '>
        <span className='text-[14px] font-jost text-dodge-blue font-bold uppercase'>My</span>
        <span className='text-[24px] md:text-[30px] font-caveat ml-2 font-bold transition-all duration-500 dark:text-white'>
          Information
        </span>
      </div>
      <div className='w-full text-left flex mt-7 md:mt-10'>
        <div className='w-full lg:w-[600px]'>
          <p className='font-jost tracking-wider text-[30px] font-bold text-dodge-blue md:text-[4em] transition-all duration-500'>
            Working
          </p>
          <p className='font-jost text-[15px] p-[10px_0] md:text-[18px] text-gray-15 opacity-80 text-left dark:text-dark-text transition-all duration-500'>
            I'm Ngo Dong Quan who has nearly six years of experience as a Front-End Engineer. I am 26 years old.
            Currently, I'm working as a Front-End Engineer in PERSOL CROSS TECH VIET NAM CO., LTD . I'm a person that
            wants to learn from everybody. In my opinion, everybody has a specific aspect that I can gain knowledge from
            them.
          </p>
        </div>
        <div className='flex-1 justify-center hidden lg:flex'>
          <img className='w-[20em] h-[15em] ' src={TestSvg} alt='test-svg' />
        </div>
      </div>
      <div className='w-full text-left flex flex-row mt-7 md:mt-10'>
        <div className='flex-1 justify-center hidden lg:flex'>
          <img className='w-[15em] h-[15em] mr-5' src={Test1Svg} alt='test1-svg' />
        </div>
        <div className='w-full lg:w-[600px] lg:ml-auto'>
          <p className='font-jost tracking-wider text-[30px] font-bold text-dodge-blue md:text-[4em] transition-all duration-500'>
            Engineering
          </p>
          <p className='font-jost text-[15px] p-[10px_0] md:text-[18px] text-gray-15 opacity-80 text-left dark:text-dark-text transition-all duration-500'>
            In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function
            independently of them to deliver fast, resilient solutions optimized for scale — performance and scalabilty
            are priorities on my radar.
          </p>
        </div>
      </div>

      <div className='w-full mt-10 text-xl text-center font-satisfy font-bold  normal-case md:text-3xl md:mt-20 dark:text-dark-text transition-all duration-500'>
        "Get knowledge to make a career and take a self-kindness as a reason to live"
      </div>

      <div className='absolute w-[calc(100%_+_10vw)] z-[0] bottom-0 font-caveat font-bold text-center text-[350px] whitespace-nowrap pointer-events-none leading-none text-transparent-light dark:text-transparent-dark overflow-hidden -left-[10vw]'>
        About
      </div>
    </div>
  )
}
