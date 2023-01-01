import './InputCards.css'
import { useRef } from 'react'

const Healthy = () => {
  return (
    <div>
      <h2>Koji je tvoj režim ishrane?</h2>
      <form className='regim' action=""> 
        <input type="radio" id='noRegim' name='regim'/>
        <label htmlFor="noRegim">Nemam definisan režim</label>
        <br />
        <input type="radio" id='homnivorous' name='regim'/>
        <label htmlFor="homnivorous">Jedem i meso i biljnu hranu</label>
        <button>Potrvdi</button>
      </form>
      <br />
      - jedem vegetarijansku hranu
      <br />
      - ja sam vegan
    </div>
  )
}

export default Healthy