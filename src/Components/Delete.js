import React, { useState } from 'react';
import axios from 'axios';
const FoodReviewDelete = () => {
  const [restaurantName, setRestaurantName] = useState('');
   

  const handleDelete = () => {
    axios.delete(`http://localhost:8083/api/delete/${restaurantName}`)
      .then(response => {
        alert('Restaurant Name deleted successfully!');
        setRestaurantName('');
         
      })
      .catch(error => {
        alert('Failed to delete Restaurant Name.');
        console.error(error);
      });
  };

  return (
    <div className='a'>
      <h1>DELETE FOOD REVIEW DETAILS</h1>
      <form className='b'>
        <div>
          <label htmlFor="RestaurantName">RestaurantName:</label>
          <input
            type="text"
            id="RestaurantName"
            value={restaurantName}
            style={{width:200,height:20}}
            onChange={event => setRestaurantName(event.target.value)}
          />
        </div>
        <br/><br/>
        <button style={{width:70,height:30,borderRadius:10}} type="button" onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
};

export default FoodReviewDelete;
