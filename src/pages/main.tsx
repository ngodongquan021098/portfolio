import React, { useEffect, useRef, useState } from 'react'
import { Home } from '../components/Home'
import { Header } from '../components/Header'
import { About } from '../components/About'
import { ScrollNav } from '../components/ScrollNav'
import useWindowSize from '../hooks/useWindowSize'
import { Skills } from '../components/Skills'
import { useDispatch } from 'react-redux'
import { setCurrentPage } from '../redux/actions'
import { HOME_PAGE, TIME_LOADING_FIRST_LOAD } from '../constants'
import { Resume } from '../components/Resume'
import { Projects } from '../components/Projects'
import { Contact } from '../components/Contact'
import { LoadingFirstLoad } from '../components/LoadingFirstLoad'
import { Loading } from '../components/Loading'
import { Footer } from '../components/Footer'

export const MainPage = () => {
  const dispatch = useDispatch()
  const { isMobile, overflow } = useWindowSize()
  const [isShowLoadingFirstLoad, setIsShowLoadingFirstLoad] = useState(true)
  const timeOutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (isMobile) {
      dispatch(setCurrentPage(HOME_PAGE))
      const newElement = document.getElementById(HOME_PAGE)
      if (newElement) {
        newElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [isMobile, dispatch])

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode')
    if (isDarkMode) {
      document.body.classList.add('dark')
    }
    timeOutRef.current = setTimeout(() => {
      setIsShowLoadingFirstLoad(false)
      document.body.classList.remove('no-scroll')
    }, TIME_LOADING_FIRST_LOAD)
    return () => {
      clearTimeout(timeOutRef.current)
    }
  }, [])

  return (
    <React.Fragment>
      <Header></Header>
      {!isMobile && !overflow && <ScrollNav isShowLoadingFirstLoad={isShowLoadingFirstLoad}></ScrollNav>}
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Resume></Resume>
      <Contact></Contact>
      <Footer></Footer>
      {isShowLoadingFirstLoad && <LoadingFirstLoad></LoadingFirstLoad>}
      <Loading></Loading>
    </React.Fragment>
  )
}

export default MainPage
