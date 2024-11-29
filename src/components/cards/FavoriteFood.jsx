import './Cards.css';
import { useState, useEffect, useContext } from 'react';
import { AllDataContext } from '../../contexts/AllDataContext';
import Navigation from '../navigation/Navigation.jsx';


const FavoriteFood = () => {
  const { allData, setAllData } = useContext(AllDataContext);
  const [favoritesArrow, setFavoritesArrow] = useState(allData.favorite);

  const favoriteInputHandler = (e) => {
    if (!favoritesArrow.includes(e.target.value) && e.target.checked === true) {
      setFavoritesArrow([...favoritesArrow, e.target.value]);
    } else if (e.target.checked === false) {
      setFavoritesArrow(favoritesArrow.filter(n => n !== e.target.value));
    }
  }

  useEffect(
    () => setAllData({ ...allData, favorite: favoritesArrow }),
    [favoritesArrow, allData, setAllData]
  );

  return (
    <div className='card favorite'>
      <section className='title-and-inputs'>
        <h3>What is your favorite food?</h3>
        <input
          type="checkbox"
          value={'Asian food'}
          id='asian'
          checked={favoritesArrow.includes('Asian food') && true}
          onChange={favoriteInputHandler} />
        <label htmlFor="asian">Asian food</label> <br />

        <input
          type="checkbox"
          value={'Indian food'}
          id='indian'
          checked={favoritesArrow.includes('Indian food') && true}
          onChange={favoriteInputHandler} />
        <label htmlFor="indian">Indian food</label> <br />

        <input
          type="checkbox"
          value={'Mediterranean food'}
          id='mediterranean'
          checked={favoritesArrow.includes('Mediterranean food') && true}
          onChange={favoriteInputHandler} />
        <label htmlFor="mediterranean">Mediterranean food</label> <br />

        <input
          type="checkbox"
          value={'Italian food'}
          id='italian'
          checked={favoritesArrow.includes('Italian food') && true}
          onChange={favoriteInputHandler} />
        <label htmlFor="italian">Italian food</label> <br />

        <input
          type="checkbox"
          value={'Mexican food'}
          id='mexican'
          checked={favoritesArrow.includes('Mexican food') && true}
          onChange={favoriteInputHandler} />
        <label htmlFor="mexican">Mexican food</label> <br />
      </section>
      <Navigation />
    </div>
  )
}

export default FavoriteFood 