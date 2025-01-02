import React, { useEffect, useLayoutEffect, useState } from 'react'
import Logo from '../assets/logo.svg'
import MoonImg from '../assets/moon.svg'
import SunImg from '../assets/sun.svg'
import { cn } from 'clsx-for-tailwind'
import { useDispatch } from 'react-redux'
import { setActiveMenu, setCurrentPage } from '../redux/actions'
import { ABOUT_PAGE, CONTACT_PAGE, HOME_PAGE, PROJECTS_PAGE, RESUME_PAGE, SKILLS_PAGE } from '../constants'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import useWindowSize from '../hooks/useWindowSize'

export const Header: React.FC = () => {
  const dispatch = useDispatch()

  const { isMobile } = useWindowSize()

  const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false)

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  const { isIntersecting, elementRef } = useIntersectionObserver({ threshold: 0 })

  const handleClickMenu = (): void => {
    document.body.classList.toggle('no-scroll')
    setIsActiveMenu((prev) => !prev)
  }

  const handleClickButtonDarkMode = (): void => {
    if (!isDarkMode) {
      localStorage.setItem('darkMode', 'true')
    } else {
      localStorage.removeItem('darkMode')
    }
    document.body.classList.toggle('dark')
    setIsDarkMode(!isDarkMode)
  }

  const handleMoveToPage = (page: string) => {
    document.body.classList.toggle('no-scroll')
    dispatch(setCurrentPage(page))
    setIsActiveMenu(false)

    // scroll to page want
    const newElement = document.getElementById(page)
    newElement?.scrollIntoView({ behavior: 'smooth' })
  }

  useLayoutEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode')
    if (isDarkMode) {
      setIsDarkMode(true)
    }
  }, [])

  const openLink = (link: string) => {
    window.open(link, '_blank')
  }

  useEffect(() => {
    dispatch(setActiveMenu(isActiveMenu))
  }, [isActiveMenu, dispatch])

  return (
    <>
      {/* ref to check element disappear */}
      <div ref={elementRef} className='absolute h-[70px] w-[1px]'></div>

      {/* main element */}
      <div
        className={cn(
          'fixed z-50 transition-all duration-500 p-5 md:p-30px flex items-center justify-between w-full top-0 left-0',
          { 'animate-spinIn bg-white dark:bg-bg-note': !isIntersecting && isMobile }
        )}
      >
        <img
          onClick={(): void => handleMoveToPage(HOME_PAGE)}
          src={Logo}
          alt='logo'
          className='scale-75 cursor-pointer md:scale-90 dark:brightness-0 dark:invert'
        />
        <div className='text-3xl flex'>
          <img
            onClick={handleClickButtonDarkMode}
            className='w-30px h-30px mr-10 -rotate-12 cursor-pointer'
            src={isDarkMode ? SunImg : MoonImg}
            alt='moon img'
          />
          <div onClick={handleClickMenu} className='relative w-30px cursor-pointer z-2'>
            <span
              className={`absolute m-0 left-0 top-2 w-full h-[2px] bg-black dark:bg-white transition-all duration-300 ${isActiveMenu && 'rotate-45 top-[14px]'}`}
            ></span>
            <span
              className={`absolute m-0 left-0 top-5 w-full h-[2px] bg-black dark:bg-white transition-all duration-300 ${isActiveMenu && '-rotate-45 top-[14px]'}`}
            ></span>
          </div>
        </div>

        <div
          className={cn(
            'fixed top-0 w-screen md:w-[500px] -right-[500px] h-screen transition-all duration-[1000ms] before:content-[""] before:absolute before:transition-all before:duration-[1000ms] before:w-0 before:h-screen before:top-0 before:right-0 before:z-1 before:bg-white before:skew-x-12 before:skew-y-0 dark:before:bg-dark-gray',
            {
              'w-full before:w-full before:h-full right-0 before:skew-x-0 before:skew-y-0': isActiveMenu
            }
          )}
        >
          <div
            className={cn(
              'flex absolute top-0 left-0 w-full h-full z-4 items-center justify-center overflow-auto opacity-0 transition-all duration-[500ms]',
              {
                'opacity-100 duration-[2000ms]': isActiveMenu
              }
            )}
          >
            <div className='relative h-3/5 md:h-2/4 w-[2px] bg-black before:content-[""] before:absolute before:-top-[30px] before:-left-[15px] before:w-30px before:h-30px before:border-solid before:border-2 before:border-black before:rounded-full before:box-shadow-2 after:content-[""] after:absolute after:-bottom-[30px] after:-left-[15px] after:w-30px after:h-30px after:border-solid after:border-2 after:border-black after:rounded-full after:box-shadow-2 dark:bg-line-dark dark:before:border-line-dark dark:after:border-line-dark dark:before:bg-bg-note dark:after:bg-bg-note'></div>

            <div className='relative p-[0px_80px]'>
              <ul className='list-none text-left mt-30px mb-30px uppercase font-jost tracking-wider font-bold text-[22px] transition-all duration-[1000ms] dark:text-white'>
                <li
                  onClick={(): void => handleMoveToPage(HOME_PAGE)}
                  className='mb-5 cursor-pointer hover:text-dodge-blue transition-all duration-500'
                >
                  Home
                </li>
                <li
                  onClick={(): void => handleMoveToPage(ABOUT_PAGE)}
                  className='mb-5 cursor-pointer hover:text-dodge-blue transition-all duration-500'
                >
                  About
                </li>
                <li
                  onClick={(): void => handleMoveToPage(SKILLS_PAGE)}
                  className='mb-5 cursor-pointer hover:text-dodge-blue transition-all duration-500'
                >
                  Skills
                </li>
                <li
                  onClick={(): void => handleMoveToPage(PROJECTS_PAGE)}
                  className='mb-5 cursor-pointer hover:text-dodge-blue transition-all duration-500'
                >
                  Projects
                </li>
                <li
                  onClick={(): void => handleMoveToPage(RESUME_PAGE)}
                  className='mb-5 cursor-pointer hover:text-dodge-blue transition-all duration-500'
                >
                  Resume
                </li>
                <li
                  onClick={(): void => handleMoveToPage(CONTACT_PAGE)}
                  className='cursor-pointer hover:text-dodge-blue transition-all duration-500'
                >
                  Contact
                </li>
              </ul>
              <div className='flex items-center h-14 mt-10'>
                <div
                  onClick={() => openLink('https://www.facebook.com')}
                  className='text-2xl transition-all duration-500 hover:text-dodge-blue cursor-pointer dark:text-white dark:hover:text-dodge-blue'
                >
                  <i className='fa-brands fa-facebook'></i>
                </div>
                <div
                  onClick={() => openLink('https://www.linkedin.com/in/quan-ngo-7816741b2')}
                  className='text-2xl ml-4 transition-all duration-500 hover:text-dodge-blue cursor-pointer dark:text-white dark:hover:text-dodge-blue'
                >
                  <i className='fa-brands fa-linkedin-in'></i>
                </div>
                <div
                  onClick={() => openLink('https://www.instagram.com')}
                  className='text-2xl transition-all duration-500 ml-4 hover:text-dodge-blue cursor-pointer dark:text-white dark:hover:text-dodge-blue'
                >
                  <i className='fa-brands fa-instagram'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
