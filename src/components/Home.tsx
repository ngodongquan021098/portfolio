import React, { useEffect, useRef, useState } from 'react'
import QuanImage from '../assets/Quan1.png'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import { useDispatch } from 'react-redux'
import { setCurrentPage } from '../redux/actions'
import { HOME_PAGE, SKILLS_PAGE } from '../constants'

export const Home: React.FC = () => {
  const refYear = useRef<NodeJS.Timeout>()

  const dispatch = useDispatch()

  const targetYear = 5

  const { elementRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  const [experienceYear, setExperienceYear] = useState<number>(1)

  useEffect(() => {
    if (!isIntersecting) return
    refYear.current = setInterval(() => {
      setExperienceYear((prev) => prev + 1)
    }, 100)
    return () => {
      clearInterval(refYear.current)
      setExperienceYear(1)
    }
  }, [isIntersecting])

  useEffect(() => {
    if (experienceYear === targetYear) {
      clearInterval(refYear.current)
    }
  }, [experienceYear])

  const handleGoToSkillsPage = () => {
    dispatch(setCurrentPage(SKILLS_PAGE))
    // scroll to page want
    const newElement = document.getElementById(SKILLS_PAGE)
    newElement?.scrollIntoView({ behavior: 'smooth' })
  }

  const openLink = (link: string) => {
    window.open(link, '_blank')
  }

  const RotateText = (): JSX.Element => {
    const letter = ' Front End Developer'
    return (
      <React.Fragment>
        {letter.split('').map((el, index) => {
          return (
            <span
              key={index}
              className='absolute -top-[50px] origin-[0px_50px] lg:-top-[90px] lg:origin-[0px_90px]'
              style={{ transform: `rotate(${index * (360 / letter.length)}deg)` }}
            >
              {el}
            </span>
          )
        })}
      </React.Fragment>
    )
  }

  const downLoadCV = () => {
    const link = document.createElement('a')
    link.href = '/files/cv.pdf' // Đường dẫn tới tệp trong thư mục public
    link.download = 'Ngo-Dong-Quan-CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div
      id={HOME_PAGE}
      className='element-page relative h-auto md:h-screen w-screen bg-home dark:bg-dark pt-28 md:flex-row lg:pt-0 '
    >
      <div className='h-full w-full flex flex-col lg:w-auto lg:grid lg:mx-auto lg:grid-rows-8 lg:grid-cols-2'>
        <div className='row-start-2 flex flex-col justify-around items-center lg:row-start-3 lg:row-end-5 lg:items-start lg:ml-[20%] '>
          <p className='font-jost text-sm font-bold uppercase dark:text-white '>
            Hello, <span className='text-dodge-blue dark:text-dodge-blue'>My name is</span>
          </p>

          <div className='text-shadow-styling flex font-jost pt-5 tracking-wider font-bold text-5xl md:text-7xl lg:text-90px'>
            <p className='text-dodge-blue dark:text-dodge-blue'>QUAN</p>
            <p className='text-white ml-5'>NGO</p>
          </div>

          <p className='font-jost font-bold uppercase tracking-wider text-sm pt-5 transition-all duration-500 dark:text-white'>
            I am <span className='font-satisfy font-bold text-3xl normal-case ml-3'>Web Developer</span>
          </p>
        </div>

        <div className='flex items-center justify-center row-start-3 col-start-1 lg:row-span-8 lg:col-start-2 lg:justify-start'>
          <div className='relative transition-all duration-500 flex w-[300px] h-[350px] lg:ml-[4%] lg:h-[700px] lg:w-[600px]'>
            <img
              className='absolute w-full left-1/2 -translate-x-1/2 h-full object-cover z-1 object-top rounded-[288px] lg:left-0 lg:translate-x-0'
              src={QuanImage}
            />
            <div className='w-full h-5/6 bg-dodge-blue rounded-full self-end'></div>

            <div
              className='absolute flex items-center justify-center transition-all duration-500 scale-75 -left-15% md:-left-25% gap-2 font-jost z-2 bottom-15% md:w-[200px] h-[60px] lg:w-[250px] lg:h-[80px] px-8 bg-white box-shadow rounded-56px border-solid border-2 border-black lg:-left-5% md:scale-100
            dark:bg-bg-note dark:border-line-dark dark:box-shadow-dark-mode'
            >
              <span ref={elementRef} className='text-[25px] lg:text-[37px] font-bold text-dodge-blue'>
                {experienceYear}
              </span>
              <span className='text-[25px] lg:text-[37px] text-dodge-blue pb-1 font-bold dark:text-white'>+</span>
              <span className='uppercase text-13px font-bold tracking-wider dark:text-white'>
                years<br></br>
                <span>experience</span>
              </span>
            </div>

            <div
              className='absolute flex items-center justify-center transition-all duration-500 scale-75 gap-2 font-jost z-2  bottom-5% md:w-[200px] h-[60px] lg:w-[250px] lg:h-[80px] px-8 bg-white box-shadow rounded-56px  border-solid border-2 border-black -right-15% md:-right-25% lg:-right-0 md:scale-100
            dark:bg-bg-note dark:border-line-dark dark:box-shadow-dark-mode'
            >
              <span className='uppercase text-13px font-bold tracking-wider dark:text-white'>
                Working<br></br>
                <span>since</span>
              </span>
              <span className='text-[25px] lg:text-[37px] font-bold text-dodge-blue'>2019</span>
            </div>

            <div className='absolute z-2 top-20% right-[25%] text-13px text-gray-15 opacity-50 font-jost lg:text-2xl rounded flex-nowrap animate-rotate transition-all duration-500 dark:text-white'>
              <RotateText></RotateText>
            </div>
          </div>
        </div>

        <div className='row-start-4 mt-10 flex flex-col items-center lg:row-start-5 lg:row-span-2 lg:items-start lg:ml-[20%]'>
          <div className='font-jost text-lg text-gray-15 opacity-80 w-4/5 text-center lg:w-11/12 lg:text-left dark:text-dark-text transition-all duration-500'>
            From VietNam, Ho Chi Minh City. I am currently a web developer in Persol Cross Technology Vietnam Co., Ltd.
          </div>

          <div className='flex items-center h-14'>
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

          <div className='flex flex-col items-center mt-6 lg:row-start-6 md:flex-row'>
            <button
              onClick={downLoadCV}
              className='group box-shadow py-4 px-9 text-center border-2 border-solid border-black font-jost text-13px font-bold rounded-56px tracking-wider relative
           before:content-[""] before:transition-all before:duration-700 before:absolute before:left-1/2 before:top-1/2 before:w-0 before:h-0 before:bg-dodge-blue before:opacity-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-56px
           hover:before:w-[calc(100%_-_4px)] hover:before:h-[calc(100%_-_4px)] hover:before:opacity-100
           dark:text-white dark:border-line-dark dark:box-shadow-dark-mode'
            >
              <span className='group-hover:text-white uppercase relative z-1 transition-all duration-500'>
                Download cv
              </span>
            </button>

            <button
              onClick={handleGoToSkillsPage}
              className='pl-0 pt-20 font-jost uppercase font-bold text-13px cursor-default relative before:transition-height md:pl-20 md:pt-0  before:duration-700 before:md:transition-width before:md:duration-700
          before:content-[""]  before:absolute before:h-10 before:w-2px before:md:h-2px before:md:w-10 before:bg-black before:top-1/4 before:left-1/2 before:md:-left-0 before:md:top-1/2
          dark:before:bg-white'
            >
              <span className='cursor-pointer tracking-wider transition-all duration-500 dark:text-white'>
                My skills
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className='absolute w-[100%] z-[0] bottom-0 font-caveat font-bold text-center text-[350px] whitespace-nowrap pointer-events-none leading-none text-transparent-light dark:text-transparent-dark overflow-hidden'>
        Developer
      </div>
    </div>
  )
}
