import css from './Options.module.css';

const Options = ({
  options,
  onLeaveFeedback,
  totalFeedback,
  onResetFeedback,
}) => {
  return (
    <div className={css.btn}>
      {options.map(option => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
      {totalFeedback > 0 && <button onClick={onResetFeedback}>Reset</button>}
    </div>
  );
};

export default Options;
