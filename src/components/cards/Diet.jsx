import './Cards.css';
import { useContext } from 'react';
import { AllDataContext } from '../../contexts/AllDataContext';
import Navigation from '../navigation/Navigation.jsx';

const Diet = () => {

  const { allData, setAllData } = useContext(AllDataContext);

  const dietInputHandler = e => {
    setAllData({ ...allData, diet: e.target.value })
  }

  return (
    <div className='card diet'>
      <section className='title-and-inputs'>
        <h3>What is your type of diet?</h3>
        <input
          type="radio"
          value={'No diet'}
          name='diet'
          id='noDiet'
          checked={allData.diet === 'No diet' && true}
          onChange={dietInputHandler} />
        <label htmlFor="noDiet">No diet</label> <br />

        <input
          type="radio"
          value={'Intermittent fasting'}
          name='diet'
          id='intermittent'
          checked={allData.diet === 'Intermittent fasting' && true}
          onChange={dietInputHandler} />
        <label htmlFor="intermittent">Intermittent fasting</label> <br />

        <input
          type="radio"
          value={'Vegetarian'}
          name='diet'
          id='vegetarian'
          checked={allData.diet === 'Vegetarian' && true}
          onChange={dietInputHandler} />
        <label htmlFor="vegetarian">Vegetarian</label> <br />

        <input
          type="radio"
          value={'Vegan'}
          name='diet'
          id='vegan'
          checked={allData.diet === 'Vegan' && true}
          onChange={dietInputHandler} />
        <label htmlFor="vegan">Vegan</label> <br />
      </section>
      < Navigation />
    </div>
  )
}

export default Diet