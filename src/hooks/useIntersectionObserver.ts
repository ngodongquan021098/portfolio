import { useEffect, useRef, useState } from 'react'

const useIntersectionObserver = (options: IntersectionObserverInit) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const elementRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null)

  useEffect(() => {
    const currentElementRef = elementRef.current

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (currentElementRef) {
        observer.unobserve(currentElementRef)
      }
    }
  }, [])

  return { elementRef, isIntersecting }
}

export default useIntersectionObserver
