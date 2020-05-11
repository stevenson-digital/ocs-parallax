export { parallax }

const parallax = {
  isInExtendedViewport($el) {
    const elTop = $el.offsetTop
    const elBottom = elTop + $el.clientHeight
    const viewportHeight = window.innerHeight
    const viewportTop = window.scrollY
    const viewportBottom = viewportTop + viewportHeight
  
    return elBottom >= (viewportTop - (viewportHeight / 2)) && elTop <= (viewportBottom + (viewportHeight / 2))
  },

  move(currentScrollY) {
    const parallaxElements = document.querySelectorAll('.js-parallax')

    if (parallaxElements.length < 1)
      return

    parallaxElements.forEach($el => {
      if (window.innerWidth > 1024 && parallax.isInExtendedViewport($el)) {
        // Create parallax effect
        const speed = ($el.getAttribute('data-speed')) ? $el.getAttribute('data-speed') : 10
        const elTop = $el.offsetTop
        const amountScrolled = currentScrollY - elTop
        const offset = ($el.getAttribute('data-offset')) ? $el.getAttribute('data-offset') : 0
        const movement = ($el.getAttribute('data-direction') === 'down') ? (amountScrolled / speed) - offset : 1 - (amountScrolled / speed) - offset 

        $el.style.transform = `translate3d(0px, ${Math.round(movement)}px, 0)`

      } else {
        // Reset elements postions 
        $el.style.transform = 'translate3d(0px, 0px, 0'
      }
    })
  }
}
