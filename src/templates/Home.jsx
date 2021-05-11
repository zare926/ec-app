import React from 'react';
import {getUserId} from "../reducks/user/selectors";
import {userSelector} from "react-redux";

const Home = () => {
    const selector = userSelector(state => state);
    const uid = getUserId(selector)
  return(
    <div>
      <h2>Home</h2>
      <p>{uid}</p>
    </div>
  )
}

export default Home;