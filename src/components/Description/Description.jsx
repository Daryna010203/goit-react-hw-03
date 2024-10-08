import css from './Description.module.css';

const Description = () => {
  return (
    <div className={css.wrapper}>
      <h1>
        <span className={css.title}>Sip</span> Happens Café
      </h1>
      <p className={css.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
