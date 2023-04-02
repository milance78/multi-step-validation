import './Cards.css';
import Buttons from '../buttons/Buttons';
import { useContext } from 'react';
import { AllDataContext } from '../../contexts/AllDataContext';

const Love = () => {
  const { allData, setAllData } = useContext(AllDataContext);
  
  const textAreaHandler = (e) => {
    if (e.target.id === 'like') {
      setAllData({ ...allData, love: {...allData.love, like: e.target.value} });
    } else if (e.target.id === 'dislike'){
      setAllData({ ...allData, love: {...allData.love, dislike: e.target.value} });
    }   
  }  
 
  return (
    <div className='love-container'>
      <label htmlFor="love">What do you like to eat?</label><br /><br />
      <textarea
        id="like"
        cols="50"
        rows="3"
        value={allData.love.like}
        onChange={textAreaHandler} /><br /><br />
      <label htmlFor="hate">What do you don't like to eat?</label><br /><br />
      <textarea
        id="dislike"
        cols="50"
        rows="3"
        value={allData.love.dislike}
        onChange={textAreaHandler}
      />
      <Buttons />
    </div>
  )
}

export default Love