import PropTypes from 'prop-types';
import s from './Statistic.module.css';

export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p className={s.result}>Good : {good}</p>
      <p className={s.result}>Neutral : {neutral}</p>
      <p className={s.result}>Bad : {bad}</p>
      <p className={s.result}>Total : {total}</p>
      <p className={s.result}>Positive feedback : {positivePercentage} %</p>
    </div>
  );
};

Statistic.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.func,
};
