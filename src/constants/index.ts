export const HOME_PAGE = 'HomePage'
export const ABOUT_PAGE = 'AboutPage'
export const SKILLS_PAGE = 'SkillsPage'
export const PROJECTS_PAGE = 'ProjectsPage'
export const RESUME_PAGE = 'ResumePage'
export const CONTACT_PAGE = 'ContactPage'

export const LIST_PAGE = [HOME_PAGE, ABOUT_PAGE, SKILLS_PAGE, PROJECTS_PAGE, RESUME_PAGE, CONTACT_PAGE]

export const TIME_LOADING_FIRST_LOAD = localStorage.getItem('darkMode') ? 1600 : 1500 // All the time effect animation loading and end loading to show screen
export const TIME_LOADING_START = localStorage.getItem('darkMode') ? 900 : 800 // The time start loading after run finish animation
