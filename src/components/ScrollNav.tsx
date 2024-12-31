import { cn } from 'clsx-for-tailwind'
import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { setCurrentPage } from '../redux/actions'
import { LIST_PAGE as listPage } from '../constants'
import { debounce } from 'lodash'

export const ScrollNav: React.FC<{ isShowLoadingFirstLoad: boolean }> = ({
  isShowLoadingFirstLoad
}: {
  isShowLoadingFirstLoad: boolean
}) => {
  const isScrolling = useRef(false)
  const { currentPage, isActiveMenu, isLoading } = useSelector((state: RootState) => state.main)
  const dispatch = useDispatch()

  const selectedScrollItem = useMemo(() => {
    return currentPage
  }, [currentPage])

  const handleClickScrollItem = useMemo(() => {
    return debounce((scrollItem: string): void => {
      dispatch(setCurrentPage(scrollItem))
      const index = listPage.findIndex((el) => el === scrollItem)
      const newElement = document.getElementById(listPage[index])
      newElement?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }, [dispatch])

  const handleGetCurrentSelectedScrollItem = () => {
    const elements = document.querySelectorAll('.element-page')
    const viewPortHeight = window.innerHeight || document.documentElement.clientHeight
    let index = 0
    for (let i = 0; i < elements.length; i++) {
      const rect = elements[i].getBoundingClientRect()
      if (rect.top === 0 && rect.bottom === viewPortHeight) {
        index = i
        break
      }
      if (rect.top > 0) {
        const rest = viewPortHeight - rect.top
        if (rest >= Math.floor(viewPortHeight / 2)) {
          index = i
        } else {
          if (i > 0) {
            index = i - 1
          }
        }
        break
      }
    }
    handleClickScrollItem(listPage[index])
  }

  const handleScroll = useCallback(
    (direction: string) => {
      if (isScrolling.current || isActiveMenu || isShowLoadingFirstLoad || isLoading) {
        return
      }

      isScrolling.current = true
      let index = listPage.findIndex((el) => el === selectedScrollItem)
      if (direction === 'down') {
        index = Math.min(index + 1, listPage.length - 1)
      } else {
        index = Math.max(index - 1, 0)
      }
      dispatch(setCurrentPage(listPage[index]))

      const newPage = listPage[index]
      const newElement = document.getElementById(newPage)
      if (newElement) {
        newElement.scrollIntoView({ behavior: 'smooth' })
      }

      setTimeout(() => {
        isScrolling.current = false
      }, 100)
    },
    [selectedScrollItem, isActiveMenu, isShowLoadingFirstLoad, isLoading, dispatch]
  )

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      // Scrolling down
      if (e.deltaY > 0) {
        handleScroll('down')
      }
      // Scrolling up
      else {
        handleScroll('up')
      }
    }

    window.addEventListener('wheel', onWheel)

    const onKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        handleScroll('up')
      } else if (e.key === 'ArrowDown') {
        handleScroll('down')
      }
    }

    window.addEventListener('keyup', onKeyPress)

    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keyup', onKeyPress)
    }
  }, [selectedScrollItem, handleScroll])

  useEffect(() => {
    handleGetCurrentSelectedScrollItem()
  }, [])

  return (
    <div className='fixed right-9 top-1/2 z-30'>
      <ul className='flex flex-col'>
        {listPage.map((el, index) => (
          <li
            key={index}
            onClick={() => handleClickScrollItem(el)}
            className={cn(
              'w-2 h-2 rotate-45 bg-dodge-blue border border-solid border-dodge-blue cursor-pointer transition-all duration-500',
              {
                'mb-5': index !== listPage.length - 1,
                'rotate-0 bg-white scale-[1.75] dark:bg-dark-gray': selectedScrollItem === el
              }
            )}
          ></li>
        ))}
      </ul>
    </div>
  )
}
