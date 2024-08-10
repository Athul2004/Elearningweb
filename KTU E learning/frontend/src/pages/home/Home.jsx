import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./home.css";
import Branches from '../../components/branches/Branches';


const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className='home'>
        <div className='home-content'>
          <h1>Welcome to our KTU E-Learning Platform</h1>
          <p>Learn, Grow, Excel</p>
          <button onClick={() => navigate("/courses")}
          className='common-btn'>Get Started</button>

        </div>
      </div>
      <Branches/>
    </div>
  );
};

export default Home;
