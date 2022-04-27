import { createFloating } from './floating'
import TheImage from '../components/TheImage.vue'
const { container: TheImageContainer, proxy: TheImageProxy } = createFloating(
  TheImage,
  { duration: 2000 }
)

export { TheImageContainer, TheImageProxy }
