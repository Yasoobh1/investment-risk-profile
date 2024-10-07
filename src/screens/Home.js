import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  return (
    <div className="home">
      <h1>Investment Risk Profile Questionnaire</h1>
      <button onClick={() => history.push('/questionnaire')}>Start</button>
    </div>
  );
};

export default Home;
