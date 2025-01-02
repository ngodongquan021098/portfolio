import { FOOTER_PAGE } from '../constants'

export const Footer: React.FC = () => {
  return (
    <div
      id={FOOTER_PAGE}
      className='element-page relative h-auto w-screen p-[40px_10vw_40px_10vw] md:p-[60px_10vw_60px_10vw] bg-contact dark:bg-contact-dark flex justify-between items-center flex-col md:flex-row border-t-[1px] border-solid border-t-light-gray dark:border-t-normal-gray'
    >
      <p className='font-jost tracking-wider font-bold uppercase text-13px dark:text-dark-text'>
        © <span className='text-dodge-blue'>Quan Ngo</span> 2025
      </p>
      <p className='mt-5 font-jost tracking-wider font-bold uppercase text-13px text-center md:mt-0 dark:text-dark-text'>
        Built with <span className='text-dodge-blue'> React js</span> and{' '}
        <span className='text-dodge-blue'>Tailwind CSS</span>, deployed with{' '}
        <span className='text-dodge-blue'> Vercel</span>.
      </p>
      <p className='mt-5 font-jost tracking-wider font-bold uppercase text-13px md:mt-0 dark:text-dark-text'>
        Developed By <span className='text-dodge-blue'>Quan Ngo</span>
      </p>
    </div>
  )
}
