import { cn } from 'clsx-for-tailwind'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import { useEffect, useState } from 'react'
import { SKILLS_PAGE } from '../constants'

export const Skills: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  const [isRunAgain, setIsRunAgain] = useState<number>(0)

  useEffect(() => {
    if (isIntersecting) {
      setIsRunAgain(Math.random())
    } else {
      setIsRunAgain(0)
    }
  }, [isIntersecting])

  return (
    <div
      ref={elementRef}
      id={SKILLS_PAGE}
      className='element-page relative h-auto md:h-screen w-screen p-[80px_10vw_40px_10vw] md:pt-[100px] bg-skills dark:bg-skills-dark'
    >
      <div className='w-full text-[26px] text-center font-jost uppercase tracking-wider font-bold md:text-[44px] transition-all duration-500 dark:text-white'>
        Professional skills
      </div>
      <div className='w-full flex justify-center items-center '>
        <span className='text-[14px] font-jost text-dodge-blue font-bold uppercase'>My</span>
        <span className='text-[24px] md:text-[30px] font-caveat ml-2 font-bold transition-all duration-500 dark:text-white'>
          Talent
        </span>
      </div>

      <div className='w-full grid grid-cols-1 md:grid-cols-2 font-jost mt-10 md:mt-20 gap-x-10 gap-7 md:gap-y-20'>
        <div className='h-auto'>
          <div className='text-[18px] md:text-[20px] font-bold dark:text-white'>JavaScript / TypeScript</div>
          <div className='w-full h-2px bg-light-gray mt-4 md:mt-7 dark:bg-normal-gray'>
            <div
              className={cn('w-0 h-2px transition-all duration-700 bg-black dark:bg-dodge-blue relative', {
                'w-[90%]': isRunAgain
              })}
            >
              <div className='absolute w-[25px] h-[25px] rounded-full -top-[12px] right-0 box-shadow bg-dodge-blue border-2 border-solid border-black z-4 dark:bg-bg-note dark:box-shadow-dark-mode dark:border-line-dark'></div>
            </div>
          </div>
        </div>
        <div className='h-auto'>
          <div className='text-[18px] md:text-[20px] font-bold dark:text-white'>React JS</div>
          <div className='w-full h-2px bg-light-gray mt-4 md:mt-7 dark:bg-normal-gray'>
            <div
              className={cn('w-0 h-2px transition-all duration-700 bg-black dark:bg-dodge-blue relative', {
                'w-[85%]': isRunAgain
              })}
            >
              <div className='absolute w-[25px] h-[25px] rounded-full -top-[12px] right-0 box-shadow bg-dodge-blue border-2 border-solid border-black z-4 dark:bg-bg-note dark:box-shadow-dark-mode dark:border-line-dark'></div>
            </div>
          </div>
        </div>
        <div className=' h-auto'>
          <div className='text-[18px] md:text-[20px] font-bold dark:text-white'>Vue JS</div>
          <div className='w-full h-2px bg-light-gray mt-4 md:mt-7 dark:bg-normal-gray'>
            <div
              className={cn('w-0 h-2px transition-all duration-700 bg-black dark:bg-dodge-blue relative', {
                'w-[80%]': isRunAgain
              })}
            >
              <div className='absolute w-[25px] h-[25px] rounded-full -top-[12px] right-0 box-shadow bg-dodge-blue border-2 border-solid border-black z-4 dark:bg-bg-note dark:box-shadow-dark-mode dark:border-line-dark'></div>
            </div>
          </div>
        </div>
        <div className=' h-auto'>
          <div className='text-[18px] md:text-[20px] font-bold dark:text-white'>HTML5, SCSS</div>
          <div className='w-full h-2px bg-light-gray mt-4 md:mt-7 dark:bg-normal-gray'>
            <div
              className={cn('w-0 h-2px transition-all duration-700 bg-black dark:bg-dodge-blue relative', {
                'w-[85%]': isRunAgain
              })}
            >
              <div className='absolute w-[25px] h-[25px] rounded-full -top-[12px] right-0 box-shadow bg-dodge-blue border-2 border-solid border-black z-4 dark:bg-bg-note dark:box-shadow-dark-mode dark:border-line-dark'></div>
            </div>
          </div>
        </div>
        <div className='h-auto'>
          <div className='text-[18px] md:text-[20px] font-bold dark:text-white'>Java</div>
          <div className='w-full h-2px bg-light-gray mt-4 md:mt-7 dark:bg-normal-gray'>
            <div
              className={cn('w-0 h-2px transition-all duration-700 bg-black dark:bg-dodge-blue relative', {
                'w-[40%]': isRunAgain
              })}
            >
              <div className='absolute w-[25px] h-[25px] rounded-full -top-[12px] right-0 box-shadow bg-dodge-blue border-2 border-solid border-black z-4 dark:bg-bg-note dark:box-shadow-dark-mode dark:border-line-dark'></div>
            </div>
          </div>
        </div>
        <div className='h-auto'>
          <div className='text-[18px] md:text-[20px] font-bold dark:text-white'>Algorithms</div>
          <div className='w-full h-2px bg-light-gray mt-4 md:mt-7 dark:bg-normal-gray'>
            <div
              className={cn('w-0 h-2px transition-all duration-700 bg-black dark:bg-dodge-blue relative', {
                'w-[60%]': isRunAgain
              })}
            >
              <div className='absolute w-[25px] h-[25px] rounded-full -top-[12px] right-0 box-shadow bg-dodge-blue border-2 border-solid border-black z-4 dark:bg-bg-note dark:box-shadow-dark-mode dark:border-line-dark'></div>
            </div>
          </div>
        </div>

        <div className='h-auto'>
          <div className='text-[18px] md:text-[20px] font-bold dark:text-white'>English</div>
          <div className='w-full h-2px bg-light-gray mt-4 md:mt-7 dark:bg-normal-gray'>
            <div
              className={cn('w-0 h-2px transition-all duration-700 bg-black dark:bg-dodge-blue relative', {
                'w-[70%]': isRunAgain
              })}
            >
              <div className='absolute w-[25px] h-[25px] rounded-full -top-[12px] right-0 box-shadow bg-dodge-blue border-2 border-solid border-black z-4 dark:bg-bg-note dark:box-shadow-dark-mode dark:border-line-dark'></div>
            </div>
          </div>
        </div>
      </div>

      <div className='absolute w-[calc(100%_+_10vw)] z-[0] bottom-0 font-caveat font-bold text-center text-[350px] whitespace-nowrap pointer-events-none leading-none text-transparent-light dark:text-transparent-dark overflow-hidden -left-[10vw]'>
        Skills
      </div>
    </div>
  )
}
