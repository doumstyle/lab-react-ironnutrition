import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox.jsx';
import Form from './components/Form';
import Search from './components/Search';
import TodaysFood from './components/TodaysFood';

import allFoods from './foods.json';

function App() {
  const [isFormVisible, setFormVisible] = useState(false);
  const [foods, setFoods] = useState(allFoods);
  const [searchFood, setSearchFood] = useState([]);
  const [menu, setMenu] = useState([]);

  const research = (searchValue) => {
    setSearchFood([...foods].filter(food => food.name.includes(searchValue)));
  };

  const toggleForm = () => {
    setFormVisible(!isFormVisible)
  }

  const addFood = (food) => {
    setFoods([...foods, food]);
  }

  const sendMenu = (food) => {
    setMenu([...menu, food]);
  }

  return (
    <div className="App">
      <h1 className='title'>IronNutrition</h1>
      <Search research={research} /> 
      <button className="button is-primary is-large mb-6" onClick={toggleForm}>More Food</button>

      {isFormVisible && <Form addFood={addFood} />}

      <div className="columns mt-6">
        <div className="column is-one-third">
          <h2 className='title'>List of Foods</h2>
          {searchFood.length ? searchFood.map(food => {
            return <FoodBox key={food.name} oneFood={food} sendMenu={sendMenu}/>
          }) : foods.map(food => {
            return <FoodBox key={food.name} oneFood={food} sendMenu={sendMenu}/>
          })}
        </div>
        <div className='column is-one-third ml-6'>
          <TodaysFood menu={menu}/>
        </div>
      </div>
    </div>
  );
}

export default App;
