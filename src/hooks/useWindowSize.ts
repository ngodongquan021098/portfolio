import { useState, useEffect } from 'react'

const useWindowSize = (): { size: { width: number; height: number }; isMobile: boolean; overflow: number } => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { size, isMobile: size.width < 768, overflow: size.width < 768 ? 0 : Math.max(900 - size.height, 0) }
}

export default useWindowSize
