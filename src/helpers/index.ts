export const toggleNoScroll = (): void => {
  if (document.body.classList.contains('no-scroll')) {
    document.body.classList.remove('no-scroll')
  } else {
    document.body.classList.add('no-scroll')
  }
}
