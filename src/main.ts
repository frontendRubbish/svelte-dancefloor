import './global.css'
import Dancefloor from './Dancefloor.svelte'

const dancefloor = new Dancefloor({
  target: document.getElementById('app') as HTMLElement,
})

export default dancefloor;
