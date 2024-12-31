import { cn } from 'clsx-for-tailwind'
import { useEffect, useRef, useState } from 'react'
import { TIME_LOADING_START } from '../constants'

export const LoadingFirstLoad: React.FC = () => {
  const [isRun, setIsRun] = useState(false)
  const timeOutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    timeOutRef.current = setTimeout(() => {
      setIsRun(true)
    }, TIME_LOADING_START)
    return () => {
      clearTimeout(timeOutRef.current)
    }
  }, [])

  return (
    <div
      className={cn(
        'fixed w-screen h-screen z-[99999] top-0 before:content-[""] before:left-0 before:top-0 before:absolute before:w-1/2 before:h-full before:bg-black before:transition-all before:duration-700 after:content-[""] after:right-0 after:top-0 after:absolute after:w-1/2 after:h-full after:bg-black after:duration-700 after:transition-all',
        {
          'before:w-0 after:w-0': isRun
        }
      )}
    >
      <div className='absolute top-1/2 left-1/2 w-1 z-5 bg-white animate-increaseHeight'></div>
      <div className='absolute bottom-1/2 left-1/2 w-1 z-5 bg-white animate-increaseHeight'></div>
    </div>
  )
}
