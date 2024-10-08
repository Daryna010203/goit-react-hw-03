import './App.module.css';
import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback.jsx';
import Options from '../Options/Options.jsx';
import Notification from '../Notification/Notification.jsx';
import { useState, useEffect } from 'react';

const App = () => {
  const [feedbacks, setFeedbacks] = useState(() => {
    const keyVal = localStorage.getItem('feadbackValue');
    const parsedKeyVal = JSON.parse(keyVal) ?? {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    return parsedKeyVal;
  });

  useEffect(() => {
    const stringifiedValue = JSON.stringify(feedbacks);
    localStorage.setItem('feadbackValue', stringifiedValue);
  }, [feedbacks]);

  const updateFeedback = feedbackType => {
    setFeedbacks({ ...feedbacks, [feedbackType]: feedbacks[feedbackType] + 1 });
  };

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  const positiefFeedback = Math.round((feedbacks.good / totalFeedback) * 100);

  const resetFeedback = () => {
    setFeedbacks({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <section>
      <Description></Description>
      <Options
        resetFeedback={resetFeedback}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
      ></Options>
      {totalFeedback >= 1 ? (
        <Feedback
          feedbacks={feedbacks}
          totalFeedback={totalFeedback}
          roundedNumber={positiefFeedback}
        ></Feedback>
      ) : (
        <Notification />
      )}
    </section>
  );
};

export default App;
