import css from './Feedback.module.css';

const Feedback = ({ feedbacks, totalFeedback, roundedNumber }) => {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>Good: {feedbacks.good}</p>
      <p className={css.text}>Neutral: {feedbacks.neutral}</p>
      <p className={css.text}>Bad: {feedbacks.bad}</p>
      <p className={css.text}>Total: {totalFeedback}</p>
      <p className={css.text}>Positief: {roundedNumber}%</p>
    </div>
  );
};

export default Feedback;
