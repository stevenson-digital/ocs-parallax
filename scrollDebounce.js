import { parallax } from './parallax'

export { scrollDebounce }

let latestKnownScrollY = 0
let ticking = false

const scrollDebounce = {
  init() {
    window.addEventListener('scroll', this.onScroll, false)
  },

  onScroll() {
    latestKnownScrollY = window.scrollY
    scrollDebounce.requestTick()
  },

  requestTick() {
    if (!ticking)
      requestAnimationFrame(this.update)

    ticking = true
  },

  update() {
    // Reset the tick so we can capture the next onScroll
    ticking = false
    parallax.move(Math.round(latestKnownScrollY))
  }
}
