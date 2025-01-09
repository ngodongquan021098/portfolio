import { cn } from 'clsx-for-tailwind'
import { RESUME_PAGE } from '../constants'
import useWindowSize from '../hooks/useWindowSize'

export const Resume: React.FC = () => {
  const { overflow } = useWindowSize()
  return (
    <div
      id={RESUME_PAGE}
      className={cn(
        'element-page relative h-auto md:h-screen w-screen p-[100px_10vw_0_10vw] md:pt-0 lg:pt-[100px] bg-resume dark:bg-resume-dark flex flex-col md:justify-center lg:justify-start',
        {
          [`md:h-[900px]`]: !!overflow
        }
      )}
    >
      <div className='w-full text-[26px] text-center font-jost uppercase tracking-wider font-bold md:text-[44px] transition-all duration-500 dark:text-white'>
        Resume
      </div>
      <div className='w-full flex justify-center items-center '>
        <span className='text-[14px] font-jost text-dodge-blue font-bold uppercase'>My</span>
        <span className='text-[24px] md:text-[30px] font-caveat ml-2 font-bold transition-all duration-500 dark:text-white'>
          Story
        </span>
      </div>

      <div className='w-full relative flex h-auto flex-wrap md:justify-between md:items-start lg:items-stretch md:h-max mt-10 font-jost after:content-[""] after:w-[1px] after:absolute after:bg-dodge-blue after:left-0 after:h-[102%] after:md:left-1/2 after:md:h-[125%] after:-top-7'>
        {/* Step 1 */}
        <div
          className='relative ml-[20px] w-[calc(100%_-_20px)] md:ml-0 transition-shadow duration-300 md:w-[calc(50%_-_30px)] rounded-2xl border-solid border-[1px] border-gray-300 dark:border-[#e9ecef] p-[25px_30px] mb-10 flex flex-col hover:hover-resume hover:dark:hover-resume-dark
        before:content-[""] before:absolute before:top-1/2 before:h-[1px] before:bg-[#d1d5db] before:dark:bg-[#e9ecef] before:-left-[20px] before:w-[20px] before:md:left-auto before:md:-right-[30px] before:md:w-[30px]
        after:content-[""] after:absolute after:w-4 after:h-4 after:top-[calc(50%_-_8px)] after:rounded-full after:bg-dodge-blue after:-left-[28px] after:md:left-auto after:md:-right-[38px] after:animate-pulse'
        >
          <div className='absolute z-2 left-7 -top-5 p-[6px_16px] border-solid border-[1px] border-gray-300 dark:border-[#e9ecef] rounded-full bg-resume dark:bg-resume-dark dark:text-white'>
            Aug 2016 - Sep 2020
          </div>
          <p className='text-18px md:text-20px tracking-wider font-bold uppercase transition-all duration-500 dark:text-white'>
            Education
          </p>
          <p className='text-[14px] text-dodge-blue font-semibold font-mono text-pretty transition-all duration-500'>
            Ho Chi Minh City University of Foreign Languages – Information Technology
          </p>
          <p className='flex-1 mt-4 text-[16px] text-gray-15 opacity-80 text-pretty dark:text-dark-text transition-all duration-500 overflow-hidden'>
            Major: Software Technology <br />
            GPA: 3.4/4
          </p>
        </div>

        {/* Step 2 */}
        <div
          className='relative ml-[20px] w-[calc(100%_-_20px)] md:ml-0 transition-shadow duration-300 md:w-[calc(50%_-_30px)] rounded-2xl border-solid border-[1px] border-gray-300 dark:border-[#e9ecef] p-[25px_30px] mb-10 md:translate-y-20 lg:translate-y-28 flex flex-col hover:hover-resume hover:dark:hover-resume-dark
        before:content-[""] before:absolute before:top-1/2 before:h-[1px] before:bg-[#d1d5db] before:dark:bg-[#e9ecef] before:-left-[20px] before:w-[20px] before:md:-left-[30px] before:md:w-[30px]
        after:content-[""] after:absolute after:w-4 after:h-4 after:top-[calc(50%_-_8px)] after:rounded-full after:bg-dodge-blue after:-left-[28px] after:md:-left-[38px] after:animate-pulse'
        >
          <div className='absolute z-2 left-7 -top-5 p-[6px_16px] border-solid border-[1px] border-gray-300 dark:border-[#e9ecef] rounded-full bg-resume dark:bg-resume-dark dark:text-white'>
            Jul 2019 - Sep 2019
          </div>
          <p className='text-18px md:text-20px tracking-wider font-bold uppercase transition-all duration-500 dark:text-white'>
            Internship
          </p>
          <p className='text-[14px] text-dodge-blue font-semibold font-mono text-pretty transition-all duration-500'>
            HD Websoft (SoftWare Outsourcing Company)
          </p>
          <p className='flex-1 mt-4 text-[16px] text-gray-15 opacity-80 dark:text-dark-text text-pretty transition-all duration-500 w-full overflow-hidden'>
            I worked for in project Ewebinar to build Online educational training platform. Beside, I also studied for
            my my skillset for my starting career.
          </p>
        </div>

        {/* Step 3 */}
        <div
          className='relative ml-[20px] w-[calc(100%_-_20px)] md:ml-0 transition-shadow duration-300 md:w-[calc(50%_-_30px)] rounded-2xl border-solid border-[1px] border-gray-300 dark:border-[#e9ecef] p-[25px_30px] mb-10 flex flex-col hover:hover-resume hover:dark:hover-resume-dark
        before:content-[""] before:absolute before:top-1/2 before:h-[1px] before:bg-[#d1d5db] before:dark:bg-[#e9ecef] before:-left-[20px] before:w-[20px] before:md:left-auto before:md:-right-[30px] before:md:w-[30px]
        after:content-[""] after:absolute after:w-4 after:h-4 after:top-[calc(50%_-_8px)] after:rounded-full after:bg-dodge-blue after:-left-[28px] after:md:left-auto after:md:-right-[38px] after:animate-pulse'
        >
          <div className='absolute z-2 left-7 -top-5 p-[6px_16px] border-solid border-[1px] border-gray-300 dark:border-[#e9ecef] rounded-full bg-resume dark:bg-resume-dark dark:text-white'>
            Sep 2019 - Jul 2021
          </div>
          <p className='text-18px md:text-20px tracking-wider font-bold uppercase transition-all duration-500 dark:text-white'>
            Front End Developer
          </p>
          <p className='text-[14px] text-dodge-blue font-semibold font-mono text-pretty transition-all duration-500'>
            HD Websoft (SoftWare Outsourcing Company)
          </p>
          <p className='flex-1 mt-4 text-[16px] text-gray-15 opacity-80 text-pretty dark:text-dark-text transition-all duration-500 overflow-hidden'>
            During this time, I worked on more projects, more technical. In addition, I am also fortunate to be a key
            member of 1 or 2 new projects. Some outstanding projects are projects on statistics and managing slides
            running on billboards.
          </p>
        </div>

        {/* Step 4 */}
        <div
          className='relative ml-[20px] w-[calc(100%_-_20px)] md:ml-0 transition-shadow duration-300 md:w-[calc(50%_-_30px)] rounded-2xl border-solid border-[1px] border-gray-300 dark:border-[#e9ecef] p-[25px_30px] mb-10 md:translate-y-20 lg:translate-y-28 flex flex-col hover:hover-resume hover:dark:hover-resume-dark
        before:content-[""] before:absolute before:top-1/2 before:h-[1px] before:bg-[#d1d5db] before:dark:bg-[#e9ecef] before:-left-[20px] before:w-[20px] before:md:-left-[30px] before:md:w-[30px]
        after:content-[""] after:absolute after:w-4 after:h-4 after:top-[calc(50%_-_8px)] after:rounded-full after:bg-dodge-blue after:-left-[28px] after:md:-left-[38px] after:animate-pulse'
        >
          <div className='absolute z-2 left-7 -top-5 p-[6px_16px] border-solid border-[1px] border-gray-300 dark:border-[#e9ecef] rounded-full bg-resume dark:bg-resume-dark dark:text-white'>
            Jul 2021 - <span className='text-dodge-blue font-bold'>Present</span>
          </div>
          <p className='text-18px md:text-20px tracking-wider font-bold uppercase transition-all duration-500 dark:text-white'>
            Software Engineer
          </p>
          <p className='text-[14px] text-dodge-blue font-semibold font-mono text-pretty transition-all duration-500'>
            Persol Cross Technology Vietnam Co., Ltd
          </p>
          <p className='flex-1 mt-4 text-[16px] text-gray-15 opacity-80 text-left dark:text-dark-text transition-all duration-500 overflow-hidden'>
            We make a website for Japan Corporation. Having so many features, the major feature is accessing, managing,
            and reviewing all employees in the company. Instead of using Excel or World, we build another tool for users
            can make the form in that.
          </p>
        </div>

        <div className='absolute -left-[8px] -top-30px md:left-[calc(50%_-_8px)] w-4 h-4 rounded-full bg-dodge-blue'></div>
        <div className='absolute -left-[8px] bottom-0 md:-bottom-[100px] md:left-[calc(50%_-_8px)] w-4 h-4 rounded-full bg-dodge-blue'></div>
      </div>

      <div className='absolute w-[calc(100%_+_10vw)] z-[0] bottom-0 font-caveat font-bold text-center text-[350px] whitespace-nowrap pointer-events-none leading-none text-transparent-light dark:text-transparent-dark overflow-hidden -left-[10vw]'>
        Resume
      </div>
    </div>
  )
}
