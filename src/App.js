import { useState } from 'react';
import './App.css';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Section } from './components/Section/Section';
import { Statistic } from './components/Statistic/Statistic';
import { Notification } from './components/Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const chooseGoodFeedback = () => {
    setGood(prev => prev + 1);
  };

  const chooseNeutralFeedback = () => {
    setNeutral(prev => prev + 1);
  };

  const chooseBadFeedback = () => {
    setBad(prev => prev + 1);
  };

  const countTotalFeedback = () => {
    let total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    let positivePercentage = Math.floor((good * 100) / (good + neutral + bad));
    return positivePercentage;
  };

  return (
    <div className="App">
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          chooseGoodFeedback={chooseGoodFeedback}
          chooseNeutralFeedback={chooseNeutralFeedback}
          chooseBadFeedback={chooseBadFeedback}
        />
      </Section>

      {countTotalFeedback() > 0 ? (
        <Section title={'Statistics'}>
          <Statistic
            good={good}
            bad={bad}
            neutral={neutral}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message={'No feedback given'} />
      )}
    </div>
  );
};
