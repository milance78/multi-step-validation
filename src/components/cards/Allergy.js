import './Cards.css';
import Buttons from '../buttons/Buttons';
import { useState, useContext, useEffect, useRef } from 'react';
import { AllDataContext } from '../../contexts/AllDataContext';

const Allergy = () => {
  const { allData, setAllData } = useContext(AllDataContext);
  const [checked, setChecked] = useState(allData.allergy);
  const milk = useRef();
  const peanuts = useRef();
  const eggs = useRef();
  const noAllergies = useRef();

  const disabledHandler = () => {
    if (noAllergies.current.checked === true) {
      milk.current.disabled = true;
      peanuts.current.disabled = true;
      eggs.current.disabled = true;
    } else {
      milk.current.disabled = false;
      peanuts.current.disabled = false;
      eggs.current.disabled = false;
    }
    if (milk.current.checked === true
      || peanuts.current.checked === true
      || eggs.current.checked === true) {
      noAllergies.current.disabled = true
    } else {
      noAllergies.current.disabled = false
    }
  }
  const allergyInputHandler = (e) => {
    if(!checked.includes(e.target.value)&&e.target.checked===true) {
      setChecked([...checked, e.target.value])
    }else if (e.target.checked===false) {
      setChecked(checked.filter(n=>n!==e.target.value));
    }
    disabledHandler();
  }

  useEffect(
    () => {
      setAllData({ ...allData, allergy: checked, })   
  },
    [checked]
  )

  return (
    <div className='allergies'>
      <h2>Do you have any alimentation allergies?</h2>
      <input
        type="checkbox"
        id='noAllergies'
        value={'No allergies'}
        checked={checked.includes('No allergies')&&true}
        onChange={allergyInputHandler}
        ref={noAllergies} />
      <label htmlFor="noAllergies">No allergies</label><br />
      <input
        type="checkbox"
        id='milk'
        value={'Milk'}
        checked={checked.includes('Milk')&&true}
        onChange={allergyInputHandler}
        ref={milk} />
      <label htmlFor="milk">Milk</label><br />
      <input
        type="checkbox"
        id='peanuts'
        value={'Peanuts'}
        checked={checked.includes('Peanuts')&&true}
        onChange={allergyInputHandler}
        ref={peanuts} />
      <label htmlFor="peanuts">Peanuts</label><br />
      <input
        type="checkbox"
        id='eggs'
        value={'Eggs'}
        checked={checked.includes('Eggs')&&true}
        onChange={allergyInputHandler}
        ref={eggs} />
      <label htmlFor="eggs">Eggs</label><br />
      <Buttons />
    </div>
    
  )
}

export default Allergy