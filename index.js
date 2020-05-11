import { scrollDebounce } from './scrollDebounce'
import { parallax } from './parallax'

const ocsParallax = () => {
  parallax.init()
  scrollDebounce.init()
  window.addEventListener('resize', parallax.resize)
}

export { ocsParallax }
