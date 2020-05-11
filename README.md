# Instillation

`npm i ocs-parallax --save`

# Usage (JS)

```
import { ocsParallax } from 'ocs-parallax'

ocsParallax()
```

# Usage (HTML)

Deafult:

```
  <img
    class="js-parallax"
    src="https://picsum.photos/400/500"
    alt="Test parallax img"
  >
```

Options:
```
  <img
    class="js-parallax"
    src="https://picsum.photos/400/500"
    alt="Test parallax img"
    data-direction="down"
    data-speed="8"
  >
```

`data-direction` "up" is default (leave blank/don't include), add "down" to change the direction

`data-speed` "10" is deafult (leave blank/don't include), add any int to control the speed; higher == slower