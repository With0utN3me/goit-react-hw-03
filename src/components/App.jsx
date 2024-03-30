import './App.css'
import { useState, useEffect } from 'react';
import Description from './Description';
import Options from './Options';
import Feedback from './Feedback';
import Notification from './Notification';

const App = () => {
  const [feedbacks, setFeedbacks] = useState (() => {
    const savedFeedbacks = window.localStorage.getItem("saved-feedbacks");
    if(savedFeedbacks !== null) {
      return JSON.parse(savedFeedbacks);
    }
      return {
        good: 0,
        neutral: 0,
        bad: 0
      }
  })
  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const updateFeedback = feedbackType => {
    setFeedbacks(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1
    }));
  }
  const resetFeedbacks = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0
    });
  }
  useEffect(() => {
    window.localStorage.setItem("saved-feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  let positiveFeedback = 0;
  if(totalFeedback > 0){
    positiveFeedback = Math.round((feedbacks.good/ totalFeedback) * 100);
  }

  return (
    <>
    <Description/>
    <Options 
    updateF={updateFeedback}
    totalF={totalFeedback}
    resetF={resetFeedbacks}/>
    { totalFeedback > 0 ?
      <Feedback 
        valueG = {feedbacks.good}
        valueN = {feedbacks.neutral}
        valueB = {feedbacks.bad}
        valueP = {positiveFeedback}
        valueTF = {totalFeedback}
    /> : <Notification/>}
    </>
  )
}
export default App;

