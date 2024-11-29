import './Cards.css';
import { useContext } from 'react';
import { StageContext } from '../../contexts/StageContext';
import Button from '../button/Button';

const EndCard = () => {
  const { stage, setStage } = useContext(StageContext);
  const resultFunction = () => {
    setStage(stage + 1)
  }
  const backFunction = () => {
    setStage(stage - 1)
  }

  return (
    <div className='card end-card'>
      <section className="greetings">
        <h3>Thank you for filling out the form &#128578;</h3>
        <br />
        <h3>Have a good day and enjoy your meal !</h3>
      </section>
      <section className='end-buttons'>
      <Button buttonName={'back'}
        clickFunction={backFunction}
        additionalClass={''} />
      <Button buttonName={'result'}
        clickFunction={resultFunction}
        additionalClass={'result'} />
        </section>
    </div>
  )
}

export default EndCard