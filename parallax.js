export { parallax }

let $ = jQuery.noConflict()
const $window = $(window)

const parallax = {
  isInExtendedViewport($el) {
    const elTop = $el.offset().top
    const elBottom = elTop + $el.outerHeight()
    
    const viewportHeight = $window.height()
    const viewportTop = $window.scrollTop()
    const viewportBottom = viewportTop + viewportHeight
  
    return elBottom >= (viewportTop - (viewportHeight / 2)) && elTop <= (viewportBottom + (viewportHeight / 2))
  },

  move(currentScrollY) {
    const parallaxElements = $('.js-parallax')

    if (parallaxElements.length < 1)
      return
      
    parallaxElements.each(function(i, element) {
      const $el = $(element)

      if ($window.width() > 1024 && isInExtendedViewport($el)) {
        // Create parallax effect
        const speed = ($el.attr('data-speed')) ? $el.attr('data-speed') : 10
        const st = currentScrollY
        const elTop = $el.offset().top
        const amountScrolled = st - elTop
        const offset = ($el.attr('data-offset')) ? $el.attr('data-offset') : 0
        const scroll = ($el.attr('data-is-top')) ? currentScrollY : amountScrolled
        const movement = ($el.attr('data-direction') === 'up') ? 1 - (scroll / speed) - offset : (scroll / speed) - offset

        $el.css('transform', `translate3d(0px, ${Math.round(movement)}px, 0)`)

      } else {
        // Reset elements postions 
        $el.css('transform', 'translate3d(0px, 0px, 0')
      }
    })
  }
}