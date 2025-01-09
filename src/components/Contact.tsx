import { CONTACT_PAGE } from '../constants'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import { useEffect, useRef } from 'react'
import emailJs from '@emailjs/browser'
import { useDispatch } from 'react-redux'
import { setIsLoading } from '../redux/actions'
import { Bounce, toast, ToastOptions, ToastContainer } from 'react-toastify'
import useWindowSize from '../hooks/useWindowSize'
import { cn } from 'clsx-for-tailwind'
import { toggleNoScroll } from '../helpers'

export type FormValues = {
  fullName: string
  email: string
  subject: string
  message: string
}

const schema = yup
  .object({
    fullName: yup.string().required('Please Enter FullName'),
    email: yup.string().email().required('Please Enter Email'),
    subject: yup.string().required('Please Enter Subject'),
    message: yup.string().required('Please Enter Message')
  })
  .required()

export const Contact: React.FC = () => {
  const { overflow } = useWindowSize()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: '',
      email: '',
      subject: '',
      message: ''
    }
  })

  const dispatch = useDispatch()

  const refForm = useRef(null)

  const showToast = (isSuccess: boolean) => {
    const isDarkMode = localStorage.getItem('darkMode')
    const options: ToastOptions = {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: isDarkMode ? 'dark' : 'light',
      transition: Bounce
    }
    if (isSuccess) {
      toast.success('Send succesfully', options)
    } else {
      toast.error('Send fail', options)
    }
  }

  const sendEmail = () => {
    dispatch(setIsLoading(true))
    toggleNoScroll()
    if (refForm.current !== null)
      emailJs
        .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, refForm.current, {
          publicKey: import.meta.env.VITE_PUBLIC_KEY
        })
        .then(
          () => {
            dispatch(setIsLoading(false))
            toggleNoScroll()
            showToast(true)
          },
          () => {
            dispatch(setIsLoading(false))
            toggleNoScroll()
            showToast(false)
          }
        )
  }

  const { isIntersecting, elementRef } = useIntersectionObserver({ threshold: 0 })

  useEffect(() => {
    if (isIntersecting) {
      reset(undefined, { keepErrors: false, keepValues: true })
    }
  }, [isIntersecting, reset])

  return (
    <div
      id={CONTACT_PAGE}
      className={cn(
        'element-page relative h-auto md:h-[100vh] lg:h-[95vh] w-screen bg-contact dark:bg-contact-dark p-[100px_10vw_0_10vw] md:pt-0 lg:pt-[100px] flex flex-col md:justify-center lg:justify-start',
        {
          [`md:h-auto lg:h-auto md:pb-4 lg:pb-4`]: !!overflow
        }
      )}
    >
      <div className='w-full text-[26px] text-center font-jost uppercase tracking-wider font-bold md:text-[44px] transition-all duration-500 dark:text-white'>
        Contact Me
      </div>
      <div className='w-full flex justify-center items-center '>
        <span className='text-[14px] font-jost text-dodge-blue font-bold uppercase'>Let's</span>
        <span className='text-[24px] md:text-[30px] font-caveat ml-2 font-bold transition-all duration-500 dark:text-white'>
          Talk About Ideas
        </span>
      </div>

      <div className='w-full flex flex-col mt-10 md:flex-row '>
        <div className='w-full md:w-2/5'>
          <div className='flex mb-10'>
            <div
              className='relative w-14 h-14 rounded-full border-2 border-solid border-black flex justify-center items-center box-shadow dark:box-shadow-dark-mode bg-white dark:bg-bg-note dark:border-line-dark
            before:content-[""] before:absolute before:-right-10 before:w-10 before:h-[2px] before:bg-black before:dark:bg-line-dark'
            >
              <i className='fa-regular fa-map text-2xl dark:text-dark-text'></i>
            </div>
            <div className='flex flex-col ml-14 flex-1'>
              <p className='text-3xl font-caveat font-bold tracking-wider p-[10px_0] dark:text-white'>Address</p>
              <p className='text-[16px] font-jost text-gray-15 opacity-80 text-pretty dark:text-dark-text'>
                34/9 8B Street, Binh Hung Hoa A Ward, Binh Tan District, Ho Chi Minh City, Vietnam
              </p>
            </div>
          </div>

          <div className='flex mb-10'>
            <div
              className='relative w-14 h-14 rounded-full border-2 border-solid border-black flex justify-center items-center box-shadow dark:box-shadow-dark-mode bg-white dark:bg-bg-note dark:border-line-dark
            before:content-[""] before:absolute before:-right-10 before:w-10 before:h-[2px] before:bg-black before:dark:bg-line-dark'
            >
              <i className='fa-regular fa-user text-2xl dark:text-dark-text'></i>
            </div>
            <div className='flex flex-col ml-14 flex-1'>
              <p className='text-3xl font-caveat font-bold tracking-wider p-[10px_0] dark:text-white'>Freelance</p>
              <p className='text-[16px] font-jost text-gray-15 opacity-80 text-pretty dark:text-dark-text'>
                Available Right Now
              </p>
            </div>
          </div>

          <div className='flex mb-10'>
            <div
              className='relative w-14 h-14 rounded-full border-2 border-solid border-black flex justify-center items-center box-shadow dark:box-shadow-dark-mode bg-white dark:bg-bg-note dark:border-line-dark
            before:content-[""] before:absolute before:-right-10 before:w-10 before:h-[2px] before:bg-black before:dark:bg-line-dark'
            >
              <i className='fa-regular fa-envelope text-2xl dark:text-dark-text'></i>
            </div>
            <div className='flex flex-col ml-14 flex-1 max-w-full overflow-hidden'>
              <p className='text-3xl font-caveat font-bold tracking-wider p-[10px_0] dark:text-white'>Email</p>
              <p className='text-[16px] font-jost text-gray-15 opacity-80 text-pretty dark:text-dark-text max-w-full text-ellipsis overflow-hidden'>
                ngodongquan98@gmail.com
              </p>
            </div>
          </div>

          <div className='flex mb-10'>
            <div
              className='relative w-14 h-14 rounded-full border-2 border-solid border-black flex justify-center items-center box-shadow dark:box-shadow-dark-mode bg-white dark:bg-bg-note dark:border-line-dark
            before:content-[""] before:absolute before:-right-10 before:w-10 before:h-[2px] before:bg-black before:dark:bg-line-dark'
            >
              <i className='fa-regular fa-address-book text-2xl dark:text-dark-text'></i>
            </div>
            <div className='flex flex-col ml-14 flex-1'>
              <p className='text-3xl font-caveat font-bold tracking-wider p-[10px_0] dark:text-white'>Phone</p>
              <p className='text-[16px] font-jost text-gray-15 opacity-80 text-pretty dark:text-dark-text'>
                +84 36 362 1888
              </p>
            </div>
          </div>
        </div>
        <form ref={refForm} onSubmit={handleSubmit(sendEmail)} className='w-full md:flex-1 md:pl-10'>
          <div ref={elementRef} className='flex flex-col lg:flex-row md:justify-between mb-5 lg:mb-10'>
            <div className='relative w-full lg:w-[calc(50%_-_10px)] mb-5 lg:mb-0'>
              <label
                className='text-[14px] uppercase tracking-wider font-bold indent-7 font-jost block dark:text-dark-text'
                htmlFor='fullName'
              >
                Your Full Name <b className='text-dodge-blue'>*</b>
              </label>
              <input
                {...register('fullName')}
                className='mt-[10px] w-full h-16 outline-none font-jost text-[16px] border-2 border-solid border-black rounded-[30px] p-[0px_30px] dark:bg-bg-note dark:border-line-dark dark:text-dark-text'
                type='text'
                name='fullName'
                id='fullName'
              />
              <p className='text-red-300 font-jost text-sm block indent-4 pt-2 uppercase'>{errors.fullName?.message}</p>
            </div>

            <div className='relative w-full lg:w-[calc(50%_-_10px)]'>
              <label
                className='text-[14px] uppercase tracking-wider font-bold indent-7 font-jost block dark:text-dark-text'
                htmlFor='email'
              >
                Your Email Adress <b className='text-dodge-blue'>*</b>
              </label>
              <input
                {...register('email')}
                className='mt-[10px] w-full h-16 outline-none font-jost text-[16px] border-2 border-solid border-black rounded-[30px] p-[0px_30px] dark:bg-bg-note dark:border-line-dark dark:text-dark-text'
                type='text'
                name='email'
                id='email'
              />

              <p className='text-red-300 font-jost text-sm block indent-4 pt-2 uppercase'>{errors.email?.message}</p>
            </div>
          </div>

          <div className='relative w-full mb-5 lg:mb-10'>
            <label
              className='text-[14px] uppercase tracking-wider font-bold indent-7 font-jost block dark:text-dark-text'
              htmlFor='subject'
            >
              Your Subject <b className='text-dodge-blue'>*</b>
            </label>
            <input
              {...register('subject')}
              className='mt-[10px] w-full h-16 outline-none font-jost text-[16px] border-2 border-solid border-black rounded-[30px] p-[0px_30px] dark:bg-bg-note dark:border-line-dark dark:text-dark-text'
              type='text'
              name='subject'
              id='subject'
            />

            <p className='text-red-300 font-jost text-sm block indent-4 pt-2 uppercase'>{errors.subject?.message}</p>
          </div>

          <div className='relative w-full mb-10'>
            <label
              className='text-[14px] uppercase tracking-wider font-bold indent-7 font-jost block dark:text-dark-text'
              htmlFor='message'
            >
              Your Message <b className='text-dodge-blue'>*</b>
            </label>
            <textarea
              {...register('message')}
              className='mt-[10px] w-full h-40 resize-none outline-none font-jost text-[16px] border-2 border-solid border-black rounded-[30px] p-[10px_30px] dark:bg-bg-note dark:border-line-dark dark:text-dark-text '
              name='message'
              id='message'
            />

            <p className='text-red-300 font-jost text-sm block indent-4 pt-2 uppercase'>{errors.message?.message}</p>
          </div>

          <div className='relative w-full flex flex-col md:flex-row items-end md:justify-end md:items-center'>
            <p className='text-[16px] tracking-wider font-jost dark:text-dark-text mb-5 md:mr-3 md:mb-0'>
              <b className='text-dodge-blue pr-2'>*</b>Accept the terms and conditions.
            </p>
            <button
              type='submit'
              className='group w-max box-shadow py-4 px-9 text-center border-2 border-solid border-black font-jost text-13px font-bold rounded-56px tracking-wider relative 
           before:content-[""] before:transition-all before:duration-700 before:absolute before:left-1/2 before:top-1/2 before:w-0 before:h-0 before:bg-dodge-blue before:opacity-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-56px
           hover:before:w-[calc(100%_-_4px)] hover:before:h-[calc(100%_-_4px)] hover:before:opacity-100
           dark:text-white dark:border-line-dark dark:box-shadow-dark-mode'
            >
              <span className='group-hover:text-white uppercase relative z-1 transition-all duration-500'>
                Send Message
              </span>
            </button>
          </div>
        </form>
      </div>

      <ToastContainer></ToastContainer>

      <div className='absolute w-[calc(100%_+_10vw)] z-[0] bottom-0 font-caveat font-bold text-center text-[350px] whitespace-nowrap pointer-events-none leading-none text-transparent-light dark:text-transparent-dark overflow-hidden -left-[10vw]'>
        Contact
      </div>
    </div>
  )
}
