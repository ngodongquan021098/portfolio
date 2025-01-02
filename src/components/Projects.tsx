import { PROJECTS_PAGE } from '../constants'
import Carousel from 'react-multi-carousel'
import HitoImg from '../assets/hito.webp'
import ScreenfluenceImg from '../assets/Screenfluence.jpg'
import TaxfulImg from '../assets/taxful.png'
import TaxplanationImg from '../assets/taxplanation.webp'
import TextMessageImg from '../assets/TextMessage.svg'
import CssIcon from '../assets/css.svg'
import HtmlIcon from '../assets/html.svg'
import JsIcon from '../assets/javascript.svg'
import ReactIcon from '../assets/react.svg'
import TypeScriptIcon from '../assets/typescript.svg'
import VueIcon from '../assets/vue.svg'
import KitteImg from '../assets/kitte.svg'
import CommasImg from '../assets/commas.svg'
import { cn } from 'clsx-for-tailwind'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1600 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1600, min: 1000 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1000, min: 640 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1
  }
}

const listProject = [
  {
    id: 1,
    name: 'HITO TALENT',
    description:
      ' A program is building for operating human resources in Japan Corporation. The major feature is accessing, managing, and reviewing all employees in the company.',
    company: 'PERSOL PROCESS & TECHNOLOGY',
    img: HitoImg,
    techIcons: [TypeScriptIcon, ReactIcon, HtmlIcon, CssIcon]
  },
  {
    id: 2,
    name: 'Taxplanation',
    description:
      ' Develop a website about statistics of assets between companies, exchange, and transfer of loans between companies.',
    company: 'HD Websoft',
    img: TaxplanationImg,
    techIcons: [JsIcon, VueIcon, HtmlIcon, CssIcon]
  },
  {
    id: 3,
    name: 'Taxful-Thinking',
    description: 'Building a program to manage all statistics of employees in the company.',
    company: 'HD Websoft',
    img: TaxfulImg,
    techIcons: [JsIcon, VueIcon, HtmlIcon, CssIcon]
  },
  {
    id: 4,
    name: 'Screenfluence',
    description:
      'Develop a website with the job is manage slides running on billboards, and selecting the types of signs that will appear.',
    company: 'HD Websoft',
    img: ScreenfluenceImg,
    techIcons: [JsIcon, VueIcon, HtmlIcon, CssIcon]
  },
  {
    id: 5,
    name: 'Text Message Marketing',
    description:
      'The website development job is to manage messages, and phone numbers from customers in different companies.',
    company: 'HD Websoft',
    img: TextMessageImg,
    techIcons: [JsIcon, VueIcon, HtmlIcon, CssIcon]
  },
  {
    id: 6,
    name: 'Kitte Player Book',
    description:
      ' Develop extension with the job to take notes of important ideas from articles and magazines, then send them to others',
    company: 'HD Websoft',
    img: KitteImg,
    techIcons: [JsIcon, VueIcon, HtmlIcon, CssIcon]
  }
]

export const Projects: React.FC = () => {
  return (
    <div
      id={PROJECTS_PAGE}
      className='element-page relative h-auto md:h-screen w-screen p-[80px_10vw_40px_10vw] md:pt-[100px] bg-projects dark:bg-projects-dark'
    >
      <div className='w-full text-[26px] text-center font-jost uppercase tracking-wider font-bold md:text-[44px] transition-all duration-500 dark:text-white'>
        Projects
      </div>
      <div className='w-full flex justify-center items-center '>
        <span className='text-[14px] font-jost text-dodge-blue font-bold uppercase'>My</span>
        <span className='text-[24px] md:text-[30px] font-caveat ml-2 font-bold transition-all duration-500 dark:text-white'>
          Works
        </span>
      </div>

      <div className='w-full relative h-[520px] md:h-[600px] mt-10'>
        <Carousel
          responsive={responsive}
          showDots={true}
          removeArrowOnDeviceType={['superLargeDesktop', 'desktop', 'tablet', 'mobile']}
          renderDotsOutside
        >
          {listProject.map((el) => {
            return (
              <div className='h-[480px] p-[0px_5px] md:p-[0px_20px] group'>
                <div className='w-full h-full bg-white rounded-[18px] dark:bg-bg-note'>
                  <div className='w-full h-full p-[20px_20px] flex flex-col'>
                    <div className='w-full h-[150px] overflow-hidden relative'>
                      <img
                        src={el.img}
                        alt='img'
                        className='object-contain w-full h-full group-hover:scale-110 transition-all duration-500'
                      />
                      <div className='w-auto h-auto rounded-br-2xl absolute top-0 left-0 bg-white dark:bg-bg-note'>
                        <img className='h-9' src={CommasImg} alt='commas' />
                      </div>
                    </div>
                    <div className='mt-4 text-[14px] text-dodge-blue font-semibold font-mono text-pretty transition-all duration-500 tracking-wider'>
                      {el.company}
                    </div>
                    <div className='mt-1 text-18px md:text-[20px] tracking-wider font-bold uppercase transition-all duration-500 dark:text-white'>
                      {el.name}
                    </div>
                    <div className='flex-1 flex mt-5 flex-col'>
                      <div className=' font-jost text-[16px] text-gray-15 dark:text-dark-text transition-all duration-500 flex-1 tracking-wide'>
                        {el.description}
                      </div>

                      <div className='flex justify-center'>
                        {el.techIcons.map((icon, index) => {
                          return (
                            <img
                              className={cn('w-7', {
                                'ml-2': index
                              })}
                              key={icon}
                              src={icon}
                              alt='tech-icon'
                            />
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Carousel>
      </div>
      <div className='absolute w-[calc(100%_+_10vw)] z-[0] bottom-0 font-caveat font-bold text-center text-[350px] whitespace-nowrap pointer-events-none leading-none text-transparent-light dark:text-transparent-dark overflow-hidden -left-[10vw]'>
        Projects
      </div>
    </div>
  )
}
